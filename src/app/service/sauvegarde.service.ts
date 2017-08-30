import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { MdSnackBar } from '@angular/material';

import { saveAs } from 'file-saver';

import * as model from '../model/model';
import { DataService } from '../service/data.service';

@Injectable()
export class SauvegardeService {

  private static dateDerniereSauvegardeDeLaSession: { message: string, date: Date };
  private static horsReseau: boolean = false;

  private readonly DELAI_SAUVEGARDE_AUTOMATIQUE = 300000;
  private readonly URL_SERVEUR = 'http://192.168.1.52/download/upload.php';
  private readonly HEADERS_APPEL_SERVEUR = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  constructor(private http: HttpClient, private dataService: DataService, public snackBar: MdSnackBar) { }

  getNomDernierFichierSauvegardeDansBrowser() {
    if (typeof (Storage) !== 'undefined') {
      return window.localStorage.getItem('nomDernierFichierModifié');
    } else {
      return null;
    }
  }

  storeNomDernierFichierSauvegardeDansBrowser(value: string) {
    if (typeof (Storage) !== 'undefined') {
      return window.localStorage.setItem('nomDernierFichierModifié', value);
    } else {
      return null;
    }
  }

  getDateDerniereSauvegardeDeLaSession(): { message: string, date?: Date } {
    return SauvegardeService.dateDerniereSauvegardeDeLaSession;
  }

  travailleHorsReseau() {
    SauvegardeService.horsReseau = true;
  }

  /**
   * Récupère la liste des fichiers de sauvegarde disponibles sur le serveur
   */
  getlisteSauvegardesDuServeur(): Observable<{ fichiers: string[] }> {
    if (SauvegardeService.horsReseau) {
      return new Observable<{ fichiers: string[] }>((subscriber: Subscriber<{ fichiers: string[] }>) => subscriber.next({ fichiers: [] }));
    }
    const corp = 'methode=liste';
    const params = { headers: this.HEADERS_APPEL_SERVEUR };
    return this.http.post<{ fichiers: string[] }>(this.URL_SERVEUR, corp, params);
  }

  // Si le browser contient le nom du dernier fichier sauvegardé et que le fichier sélectionné n'est pas le bon, demande de confirmation à l'utilisateur
  validationEtConfirmationSiFichierNestPasLeDernierSauvegardeDansBrowser(nomFichier: string) {
    const dernierNomFichier = this.getNomDernierFichierSauvegardeDansBrowser();

    // Si le fichier chargé n'est pas le dernier sauvegardé, demande de confirmation
    if (dernierNomFichier && dernierNomFichier !== nomFichier) {
      return confirm('Le fichier que vous souhaitez chargé n\'est pas le dernier sauvegardé dans ce browser. Souhaitez tout de même le charger ?');
    }

    // Sinon, pas de soucis
    else {
      return true;
    }
  }

  /**
   * Charge le contenu d'un fichier et l'envoie au service "dataService.setAnneeChargee"
   */
  chargeAnneeDuFichier(fichier: string): void {
    if (SauvegardeService.horsReseau) {
      return;
    }
    // Si le browser contient le nom du dernier fichier sauvegardé et que le fichier sélectionné n'est pas le bon, demande de confirmation à l'utilisateur
    if (!this.validationEtConfirmationSiFichierNestPasLeDernierSauvegardeDansBrowser(fichier)) {
      return;
    }
    const corp = 'methode=charge&nomFichier=' + fichier;
    const params = { headers: this.HEADERS_APPEL_SERVEUR };
    this.http.post<model.Annee>(this.URL_SERVEUR, corp, params).subscribe(
      (dataOk) => {

        // Sauvegarde de l'instance dans le service DataService
        this.dataService.setAnneeChargee(dataOk);

        // notification
        const message = 'Fichier \'' + fichier + '\' chargé depuis le serveur';
        this.snackBar.open(message, undefined, { duration: 3000 });
      }
    );
  }

  /**
   * Parse le texte et l'envoie au service "dataService.setAnneeChargee"
   */
  chargeAnneeDepuisText(nomFichier: string, contenu: string): void {
    // Si le browser contient le nom du dernier fichier sauvegardé et que le fichier sélectionné n'est pas le bon, demande de confirmation à l'utilisateur
    if (!this.validationEtConfirmationSiFichierNestPasLeDernierSauvegardeDansBrowser(nomFichier)) {
      return;
    }
    // Sauvegarde de l'instance dans le service DataService
    this.dataService.setAnneeChargee(JSON.parse(contenu));

    // notification
    const message = 'Données chargées depuis le fichier local \'' + nomFichier + '\'';
    this.snackBar.open(message, undefined, { duration: 3000 });
  }

  /**
   * Execution de la sauvegarde par téléchargement et démarrage de cette même sauvegarde à un rythme régulier
   */
  sauvegardeAnneeParTelechargement(): void {
    // Mise en place de la sauvegarde automatique
    if (!this.getDateDerniereSauvegardeDeLaSession()) {
      window.setInterval(() => {
        this.sauvegardeAnneeParTelechargementExecution();
      }, this.DELAI_SAUVEGARDE_AUTOMATIQUE);
    }

    // Execution de la sauvegarde
    this.sauvegardeAnneeParTelechargementExecution();
  }

  /**
   * Execution de la sauvegarde sur le serveur et démarrage de cette même sauvegarde à un rythme régulier
   */
  sauvegardeAnneeSurServeur(): void {
    // Mise en place de la sauvegarde automatique
    if (!this.getDateDerniereSauvegardeDeLaSession()) {
      window.setInterval(() => {
        this.sauvegardeAnneeSurServeurExecution();
      }, this.DELAI_SAUVEGARDE_AUTOMATIQUE);
    }
    // Execution de la sauvegarde
    this.sauvegardeAnneeSurServeurExecution();
  }

  /**
   * Sauvegarde sur le serveur distant le contenu de l'année en cours d'édition.
   */
  private sauvegardeAnneeSurServeurExecution(): void {
    // Pas de sauvegarde réseau si horsReseau
    if (SauvegardeService.horsReseau) {
      return;
    }

    // Stockage de la date de sauvegarde
    SauvegardeService.dateDerniereSauvegardeDeLaSession = { message: 'Sauvegardé sur le serveur à ', date: new Date() };

    // Préparation des données
    const nomFichier = this.dataService.prepareSauvegardeEtCalculNomFichier();
    const contenuFichier = this.dataService.transformeAnneeEnJson();

    // Préparation des paramètres
    const params = new HttpParams()
      .append('methode', 'sauvegarde')
      .append('nomFichier', nomFichier)
      .append('contenuFichier', contenuFichier);

    // Problème d'encodage des caractères '+'
    const paramsSansBug = params.toString().replace(/\+/g, '%2B');

    // Post
    this.http.post<model.Annee>(this.URL_SERVEUR, paramsSansBug, { headers: this.HEADERS_APPEL_SERVEUR }).subscribe(
      (dataOk) => {
        const message = 'Données sauvegardées sur le serveur dans le fichier \'' + nomFichier + '\'';
        this.snackBar.open(message, undefined, { duration: 3000 });
        // Sauvegarde du nom du fichier dans le browser
        this.storeNomDernierFichierSauvegardeDansBrowser(nomFichier);
      },
      (error: HttpErrorResponse) => {
        const message = 'Erreur durant la sauvegarde : {statut=' + error.status + ', message=' + error.message + '}';
        this.snackBar.open(message, undefined, { duration: 3000 });
      }
    );
  }

  /**
   * Génération d'un objet contenant le nom du fichier et le blob à faire télécharger dans le navigateur
   */
  private sauvegardeAnneeParTelechargementExecution(): void {
    // Stockage de la date de sauvegarde
    SauvegardeService.dateDerniereSauvegardeDeLaSession = { message: 'Sauvegardé par téléchargement à ', date: new Date() };

    // Préparation des données
    const nomDuFichier = this.dataService.prepareSauvegardeEtCalculNomFichier();
    const contenuFichier = this.dataService.transformeAnneeEnJson();
    const leBlob = new Blob([contenuFichier], { type: 'text/plain;charset=utf-8' });
    const resultat = { nomFichier: nomDuFichier, blob: leBlob };

    // Sauvegarde du nom du fichier dans le browser
    this.storeNomDernierFichierSauvegardeDansBrowser(nomDuFichier);

    // Appel à saveAs pour déclencher le téléchargement dans le navigateur
    saveAs(resultat.blob, resultat.nomFichier);

    // notification
    const message = 'Données sauvegardées par téléchargement';
    this.snackBar.open(message, undefined, { duration: 3000 });
  }
}

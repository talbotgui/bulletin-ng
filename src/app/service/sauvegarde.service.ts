import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {DataService} from '../service/data.service';
import * as model from '../model/model';

@Injectable()
export class SauvegardeService {

  private readonly serveurUrl = 'http://192.168.1.52/download/upload.php';
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  private readonly headersJSON = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private dataService: DataService) {}

  /**
   * Récupère la liste des fichiers de sauvegarde disponibles sur le serveur
   */
  getlisteSauvegardesDuServeur(): Observable<{fichiers: string[]}> {
    const corp = 'methode=liste';
    const params = {headers: this.headers};
    return this.http.post(this.serveurUrl, corp, params);
  }

  /**
   * Charge le contenu d'un fichier et l'envoie au service "eleveService.setAnneeChargee"
   */
  chargeAnneeDuFichier(fichier: string): void {
    const corp = 'methode=charge&nomFichier=' + fichier;
    const params = {headers: this.headers};
    this.http.post<model.Annee>(this.serveurUrl, corp, params).subscribe(
      dataOk => {

        // Sauvegarde de l'instance dans le service DataService
        this.dataService.setAnneeChargee(dataOk);
      }
    );
  }

  /**
   * Charge le contenu d'un fichier et l'envoie au service "eleveService.setAnneeChargee"
   */
  sauvegardeAnneeDansFichier(): void {

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
    this.http.post<model.Annee>(this.serveurUrl, paramsSansBug, {headers: this.headers}).subscribe(
      dataOk => {
        console.log('ok=' + dataOk);
      },
      error => {
        console.log('error=' + error);
      }
    );
  }
}

import { Injectable } from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class DataRepository {

  public static readonly MESSAGE_ERREUR_REFERENCE = 'Aucune année chargée, il faut en vérifier la présence avant d\'y accéder';

  /** Données chargées et en cours d'édition */
  private anneeChargee: model.Annee | undefined;

  getAnneeChargee(): model.Annee {
    if (this.anneeChargee) {
      return this.anneeChargee;
    } else {
      throw new ReferenceError(DataRepository.MESSAGE_ERREUR_REFERENCE);
    }
  }

  /** Pour savoir si une année est chargée */
  isAnneeChargee(): boolean {
    return !!this.anneeChargee;
  }

  /** Initialisation des données chargées et en cours d'édition. */
  setAnneeChargee(annee: model.Annee): void {

    // Les MAP sont chargées comme des objets classiques avec des attributs. Donc reconstruction manuelle des MAP
    const mapLibelleStatutEleveMap: Map<string, string> = new Map<string, string>();
    for (const k in annee.mapLibelleStatutEleve) {
      if (annee.mapLibelleStatutEleve.hasOwnProperty(k)) {
        mapLibelleStatutEleveMap.set(k, annee.mapLibelleStatutEleve[k]);
      }
    }
    annee.mapLibelleStatutEleveMap = mapLibelleStatutEleveMap;
    const mapLibelleNotesMap: Map<string, string> = new Map<string, string>();
    for (const k in annee.mapLibelleNotes) {
      if (annee.mapLibelleNotes.hasOwnProperty(k)) {
        mapLibelleNotesMap.set(k, annee.mapLibelleNotes[k]);
      }
    }
    annee.mapLibelleNotesMap = mapLibelleNotesMap;

    // Initialisation du thème si présent dans les données
    if (annee.themeSelectionne) {
      this.setThemeSelectionne(annee.themeSelectionne);
    }

    // Sauvegarde de l'année
    this.anneeChargee = annee;
  }

  /** Getter du thème sélectionné ou 'sobre' par défaut */
  getThemeSelectionne(): string {

    // Si le theme est dans les données
    if (this.anneeChargee && this.anneeChargee.themeSelectionne) {
      return this.anneeChargee.themeSelectionne;
    }

    // Sinon, calcul du theme par défaut
    else {
      let themeParDefaut = 'sobre';
      if (document.cookie.indexOf('theme') === 0) {
        themeParDefaut = document.cookie.split('=')[1].split(';')[0];
      }
      return themeParDefaut;
    }
  }

  /** Pour sauvegarder le theme */
  setThemeSelectionne(theme: string): void {

    // Sauvegarde du theme dans les cookies
    document.cookie = 'theme=' + theme;

    // Sauvegarde du thème dans les données
    if (this.anneeChargee) {
      this.anneeChargee.themeSelectionne = theme;
    }

    // Application du thème
    document.getElementsByTagName('body').item(0).className = theme;
  }
}

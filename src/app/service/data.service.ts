import {Injectable} from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class DataService {

  /** Données chargées et en cours d'édition */
  private anneeChargee: model.Annee;

  /** Initialisation des données chargées et en cours d'édition. */
  setAnneeChargee(annee: model.Annee): void {
    this.anneeChargee = annee;
  }

  /** Donne la liste complète des élèves */
  getListeEleve(): model.Eleve[] {
    if (this.anneeChargee) {
      return this.anneeChargee.eleves;
    } else {
      return [];
    }
  }

  /** Donne la liste des periodes */
  getListePeriode(): model.Periode[] {
    if (this.anneeChargee) {
      return this.anneeChargee.periodes;
    } else {
      return [];
    }
  }

  /** Donne la liste des élèves présents dans la classe */
  getListeEleveActif(): model.Eleve[] {
    return this.getListeEleve().filter(eleve => eleve.statut === model.Eleve.CODE_STATUT_DANS_LA_CLASSE);
  }

  /** Donne la liste complète des compétences */
  getListeCompetence(): model.Competence[] {
    if (this.anneeChargee) {
      return this.anneeChargee.competences;
    } else {
      return [];
    }
  }

  /** Fournit les lignes de données pour un tableau de bord. */
  getListeLigneTableauDeBord(eleve: model.Eleve, periode: model.Periode): model.LigneTableauDeBord[] {
    const liste: model.LigneTableauDeBord[] = [];

    const ligne: model.LigneTableauDeBord = new model.LigneTableauDeBord('domaine1');
    ligne.aides.push(this.anneeChargee.notes[0]);
    ligne.aides.push(this.anneeChargee.notes[1]);
    ligne.constations.push(this.anneeChargee.notes[2]);
    ligne.constations.push(this.anneeChargee.notes[3]);

    liste.push(ligne);

    return liste;
  }

}

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

    // Création de la map des compétences
    const mapCompetences: Map<string, model.Competence> = this.calculMapCompetences();

    // Récupération des notes de l'élève sur la période évaluée triées par compétence
    const notesElevePeriodeEvaluee = this.anneeChargee.notes
      .filter(note => note.idEleve === eleve.id && periode.debut <= note.date && note.date <= periode.fin)
      .sort((a, b) => a.idItem.localeCompare(b.idItem));

    // Création d'une map avec toutes les notes regroupées par idCompetenceNiveau3
    const mapNotesElevePeriodeEvaluees: Map<string, model.Note[]> = new Map();
    for (let i = 0; i < notesElevePeriodeEvaluee.length; i++) {
      const note = notesElevePeriodeEvaluee[i];
      const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
      if (!mapNotesElevePeriodeEvaluees.get(idCompetenceNiveau3)) {
        mapNotesElevePeriodeEvaluees.set(idCompetenceNiveau3, [note]);
      } else {
        mapNotesElevePeriodeEvaluees.get(idCompetenceNiveau3).push(note);
      }
    }

    mapNotesElevePeriodeEvaluees.forEach((notesEvaluees: model.Note[], idCompetenceNiveau3: string) => {
      const nomDomaine = mapCompetences.get(idCompetenceNiveau3).text;
      liste.push(new model.LigneTableauDeBord(nomDomaine, notesEvaluees, [], mapCompetences));
    });

    return liste;
  }

  private calculIdCompetenceNiveau3(idCompetence: string, mapCompetences: Map<string, model.Competence>): string {
    const ancetres: string[] = this.calculListeAncetres(idCompetence, mapCompetences);
    return ancetres[ancetres.length - 3];
  }
  private calculListeAncetres(idCompetence: string, mapCompetences: Map<string, model.Competence>): string[] {
    const ancetres = [];
    let idParent = idCompetence;
    while (idParent !== '#') {
      ancetres.push(idParent);
      idParent = mapCompetences.get(idParent).parent;
    }
    return ancetres;
  }
  private calculMapCompetences(): Map<string, model.Competence> {
    const laMap: Map<string, model.Competence> = new Map<string, model.Competence>();
    for (let competence of this.anneeChargee.competences) {
      laMap.set(competence.id, competence);
    }
    return laMap;
  }

}

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
  getListeLigneTableauDeBord(eleve: model.Eleve, periodeEvaluee: model.Periode): model.LigneTableauDeBord[] {
    const liste: model.LigneTableauDeBord[] = [];
    const indexPeriodeEvaluee = this.anneeChargee.periodes.findIndex(p => p === periodeEvaluee);
    let periodePreparee = null;
    if (indexPeriodeEvaluee < this.anneeChargee.periodes.length - 1) {
      periodePreparee = this.anneeChargee.periodes[indexPeriodeEvaluee + 1];
    }

    // Création de la map des compétences
    const mapCompetences: Map<string, model.Competence> = this.calculMapCompetences();

    // Récupération des notes de l'élève sur la période évaluée triées par compétence
    const notesElevePeriodeEvaluee = this.anneeChargee.notes
      .filter(note => note.idEleve === eleve.id && periodeEvaluee.debut <= note.date && note.date <= periodeEvaluee.fin)
      .sort((a, b) => a.idItem.localeCompare(b.idItem));
    // Récupération des notes de l'élève sur la période préparée triées par compétence
    let notesElevePeriodePreparee = [];
    if (periodePreparee) {
      notesElevePeriodePreparee = this.anneeChargee.notes
        .filter(note => note.idEleve === eleve.id && periodePreparee.debut <= note.date && note.date <= periodePreparee.fin)
        .sort((a, b) => a.idItem.localeCompare(b.idItem));
    }

    // Création d'une map avec toutes les notes regroupées par idCompetenceNiveau3
    const mapNotesEleve: Map<string, {eval: model.Note[], prepa: model.Note[]}> = new Map();
    for (let i = 0; i < notesElevePeriodeEvaluee.length; i++) {
      const note = notesElevePeriodeEvaluee[i];
      const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
      if (!mapNotesEleve.get(idCompetenceNiveau3)) {
        mapNotesEleve.set(idCompetenceNiveau3, {eval: [note], prepa: []});
      } else {
        mapNotesEleve.get(idCompetenceNiveau3).eval.push(note);
      }
    }
    for (let i = 0; i < notesElevePeriodePreparee.length; i++) {
      const note = notesElevePeriodePreparee[i];
      const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
      if (!mapNotesEleve.get(idCompetenceNiveau3)) {
        mapNotesEleve.set(idCompetenceNiveau3, {eval: [], prepa: [note]});
      } else {
        mapNotesEleve.get(idCompetenceNiveau3).prepa.push(note);
      }
    }

    mapNotesEleve.forEach((notes: {eval: model.Note[], prepa: model.Note[]}, idCompetenceNiveau3: string) => {
      const nomDomaine = mapCompetences.get(idCompetenceNiveau3).text;
      liste.push(new model.LigneTableauDeBord(nomDomaine, notes.eval, notes.prepa, mapCompetences));
    });

    return liste;
  }

  private calculIdCompetenceNiveau3(idCompetence: string, mapCompetences: Map<string, model.Competence>): string {
    const ancetres: string[] = this.calculListeAncetres(idCompetence, mapCompetences);
    return ancetres[ancetres.length - 4];
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

import { Injectable } from '@angular/core';

import { DataRepository } from './data.repository';
import { LectureService } from './lecture.service';
import * as model from '../model/model';

@Injectable()
export class NoteService {

  constructor(private dataRepository: DataRepository, private lectureService: LectureService) { }

  ajouteNoteDepuisTdb(ligne: model.LigneTableauDeBord, ajoutSurPeriodeEvaluee: boolean): void {

    // Lecture des données avec la sélection periodeEvaluee/periodePreparee
    let debutPeriode = ligne.periodeEvaluee.debut;
    let constat: string | undefined = ligne.constat;
    let aide: string | undefined;
    if (!ajoutSurPeriodeEvaluee) {
      constat = undefined;
      aide = ligne.aide;
      const periodeSuivante = this.lectureService.getPeriodeSuivante(ligne.periodeEvaluee);
      if (periodeSuivante) {
        debutPeriode = periodeSuivante.debut;
      }
    }

    // Ajout de la note dans l'année
    const note = new model.Note('', ligne.idEleve, ligne.idDomaine, debutPeriode, aide, constat, '');
    this.dataRepository.getAnneeChargee().notes.push(note);

    // Mise à jour de la ligne avec une nouvelle sous ligne
    if (ligne.idDomaine) {
      const competence = this.lectureService.getCompetence(ligne.idDomaine);
      if (competence) {
        if (ajoutSurPeriodeEvaluee) {
          ligne.sousLignes.push(new model.SousLigneTableauDeBord(competence, note, undefined));
        } else {
          ligne.sousLignes.push(new model.SousLigneTableauDeBord(competence, undefined, note));
        }
      }
    }
  }

  /** Fournit les lignes de données pour un tableau de bord. */
  calculerListeLigneTableauDeBord(eleve: model.Eleve, periodeEvaluee: model.Periode): model.LigneTableauDeBord[] {

    const liste: model.LigneTableauDeBord[] = [];
    const periodePreparee = this.lectureService.getPeriodeSuivante(periodeEvaluee);
    const notes: model.Note[] = this.lectureService.getListeNote();

    // Récupération des notes de l'élève sur la période évaluée triées par compétence
    const notesElevePeriodeEvaluee = notes
      .filter((note) => note && note.date && note.idEleve === eleve.id && periodeEvaluee.debut <= note.date && note.date <= periodeEvaluee.fin)
      .sort((a, b) => (a.idItem !== undefined && b.idItem !== undefined) ? a.idItem.localeCompare(b.idItem) : 0);

    // Récupération des notes de l'élève sur la période préparée triées par compétence
    let notesElevePeriodePreparee: model.Note[] = [];
    if (periodePreparee) {
      notesElevePeriodePreparee = notes
        .filter((note) => note.date && note.idEleve === eleve.id && periodePreparee && periodePreparee.debut <= note.date && note.date <= periodePreparee.fin)
        .sort((a, b) => (a.idItem !== undefined && b.idItem !== undefined) ? a.idItem.localeCompare(b.idItem) : 0);
    }

    // Création d'une map avec toutes les notes regroupées par idCompetenceNiveau3
    const mapCompetences: Map<string, model.Competence> = this.lectureService.getMapCompetences();
    const mapNotesEleve: Map<string, { eval: model.Note[], prepa: model.Note[] }> = new Map();
    notesElevePeriodeEvaluee.forEach((note, i) => {
      if (note.idItem) {
        const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
        const element = mapNotesEleve.get(idCompetenceNiveau3);
        if (!element) {
          mapNotesEleve.set(idCompetenceNiveau3, { eval: [note], prepa: [] });
        } else {
          element.eval.push(note);
        }
      }
    });
    notesElevePeriodePreparee.forEach((note, i) => {
      if (note.idItem) {
        const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
        const element = mapNotesEleve.get(idCompetenceNiveau3);
        if (!element) {
          mapNotesEleve.set(idCompetenceNiveau3, { eval: [], prepa: [note] });
        } else {
          element.prepa.push(note);
        }
      }
    });

    // Création de la liste des lignes à partir des map précédentes
    mapNotesEleve.forEach((dto: { eval: model.Note[], prepa: model.Note[] }, idCompetenceNiveau3: string) => {
      const nomDomaine = this.lectureService.getLibelleCompletCompetence(idCompetenceNiveau3);
      liste.push(new model.LigneTableauDeBord(idCompetenceNiveau3, nomDomaine, dto.eval, dto.prepa, mapCompetences, eleve.id, periodeEvaluee));
    });

    return liste;
  }

  supprimeNoteDepuisTdb(ligne: model.LigneTableauDeBord, sousLigne: model.SousLigneTableauDeBord, supprimeSurPeriodeEvaluee: boolean): void {

    // Note à supprimer
    let note: model.Note;
    if (supprimeSurPeriodeEvaluee && sousLigne && sousLigne.constatation) {
      note = sousLigne.constatation;
    } else if (!supprimeSurPeriodeEvaluee && sousLigne && sousLigne.aide) {
      note = sousLigne.aide;
    } else {
      return;
    }

    // Suppression de la note dans l'année
    const notes = this.dataRepository.getAnneeChargee().notes;
    notes.splice(notes.indexOf(note), 1);

    // MaJ du DTO
    if (supprimeSurPeriodeEvaluee && sousLigne.aide) {
      sousLigne.constatation = undefined;
    } else if (!supprimeSurPeriodeEvaluee && sousLigne.constatation) {
      sousLigne.aide = undefined;
    } else {
      ligne.sousLignes.splice(ligne.sousLignes.indexOf(sousLigne), 1);
    }
  }

  /** Retourne le domaine lié à la compétence idCompetence */
  private calculIdCompetenceNiveau3(idCompetence: string, mapCompetences: Map<string, model.Competence>): string {
    const ancetres: string[] = this.calculListeAncetres(idCompetence, mapCompetences);
    return ancetres[ancetres.length - 4];
  }

  /** Retourne la liste des ancetres de la compétence idCompetence */
  private calculListeAncetres(idCompetence: string, mapCompetences: Map<string, model.Competence>): string[] {
    const ancetres = [];
    let idParent = idCompetence;
    while (idParent !== '#') {
      ancetres.push(idParent);
      const parent = mapCompetences.get(idParent);
      if (parent) {
        idParent = parent.parent;
      }
    }
    return ancetres;
  }
}

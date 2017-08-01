import {Injectable} from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class DataService {

  /** Données chargées et en cours d'édition */
  private anneeChargee: model.Annee;

  /** Pour savoir si une année est chargée */
  isAnneeChargee(): boolean {
    return !!this.anneeChargee;
  }

  // Transforme une copie des données en cours en JSON
  transformeAnneeEnJson(): string {

    // Clone de la structure avant modification pour sauvegarde
    const anneeAsauvegarder = Object.assign({}, this.anneeChargee);

    // Suppression des Map recalculées
    delete anneeAsauvegarder.mapLibelleNotesMap;
    delete anneeAsauvegarder.mapLibelleStatutEleveMap;

    return JSON.stringify(anneeAsauvegarder, null, 2);
  }

  // Prépare la sauvegarde et calcul le nom du fichier de sauvegarde
  prepareSauvegardeEtCalculNomFichier(): string {

    // Si aucune année chargée, rien à faire
    if (!this.anneeChargee) {
      return '';
    }

    // Mise à jour de la date de dernière modification
    const date = new Date();
    this.anneeChargee.dateDerniereSauvegarde = date;

    // Calcul du nom du fichier
    const y = date.getFullYear();
    const mo = this.formateNombre(date.getMonth() + 1);
    const d = this.formateNombre(date.getDate());
    const h = this.formateNombre(date.getHours());
    const mi = this.formateNombre(date.getMinutes());
    const s = this.formateNombre(date.getSeconds());

    return y + '-' + mo + '-' + d + '-' + h + 'h' + mi + 'm' + s + 's.json';
  }

  /** Initialisation des données chargées et en cours d'édition. */
  setAnneeChargee(annee: model.Annee): void {

    // Les MAP sont chargées comme des objets classiques avec des attributs. Donc reconstruction manuelle des MAP
    if (annee) {
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
    }

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
    return this.getListeEleve().filter((eleve) => eleve.statut === model.Eleve.CODE_STATUT_DANS_LA_CLASSE);
  }

  /** Donne la liste complète des compétences */
  getListeCompetence(): model.Competence[] {
    if (this.anneeChargee) {
      return this.anneeChargee.competences;
    } else {
      return [];
    }
  }

  /** Donne la map des libellés de note */
  getMapLibelleNote(): any {
    if (this.anneeChargee) {
      return this.anneeChargee.mapLibelleNotes;
    } else {
      return {};
    }
  }

  /** Donne la map des status d'élève */
  getMapLibelleStatutEleveMap(): Map<string, string> {
    if (this.anneeChargee) {
      return this.anneeChargee.mapLibelleStatutEleveMap;
    } else {
      return new Map<string, string>();
    }
  }

  /** Fournit les lignes de données pour un tableau de bord. */
  getListeLigneTableauDeBord(eleve: model.Eleve, periodeEvaluee: model.Periode): model.LigneTableauDeBord[] {

    // Si aucune année chargée, aucune données
    if (!this.anneeChargee) {
      return [];
    }

    const liste: model.LigneTableauDeBord[] = [];
    const indexPeriodeEvaluee = this.anneeChargee.periodes.findIndex((p) => p === periodeEvaluee);
    let periodePreparee = null;
    if (indexPeriodeEvaluee < this.anneeChargee.periodes.length - 1) {
      periodePreparee = this.anneeChargee.periodes[indexPeriodeEvaluee + 1];
    }

    // Création de la map des compétences
    const mapCompetences: Map<string, model.Competence> = this.calculMapCompetences();

    // Récupération des notes de l'élève sur la période évaluée triées par compétence
    const notesElevePeriodeEvaluee = this.anneeChargee.notes
      .filter((note) => note.idEleve === eleve.id && periodeEvaluee.debut <= note.date && note.date <= periodeEvaluee.fin)
      .sort((a, b) => a.idItem.localeCompare(b.idItem));
    // Récupération des notes de l'élève sur la période préparée triées par compétence
    let notesElevePeriodePreparee = [];
    if (periodePreparee) {
      notesElevePeriodePreparee = this.anneeChargee.notes
        .filter((note) => note.idEleve === eleve.id && periodePreparee.debut <= note.date && note.date <= periodePreparee.fin)
        .sort((a, b) => a.idItem.localeCompare(b.idItem));
    }

    // Création d'une map avec toutes les notes regroupées par idCompetenceNiveau3
    const mapNotesEleve: Map<string, {eval: model.Note[], prepa: model.Note[]}> = new Map();
    notesElevePeriodeEvaluee.forEach((note, i) => {
      const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
      if (!mapNotesEleve.get(idCompetenceNiveau3)) {
        mapNotesEleve.set(idCompetenceNiveau3, {eval: [note], prepa: []});
      } else {
        mapNotesEleve.get(idCompetenceNiveau3).eval.push(note);
      }
    });
    notesElevePeriodePreparee.forEach((note, i) => {
      const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
      if (!mapNotesEleve.get(idCompetenceNiveau3)) {
        mapNotesEleve.set(idCompetenceNiveau3, {eval: [], prepa: [note]});
      } else {
        mapNotesEleve.get(idCompetenceNiveau3).prepa.push(note);
      }
    });

    mapNotesEleve.forEach((notes: {eval: model.Note[], prepa: model.Note[]}, idCompetenceNiveau3: string) => {
      const nomDomaine = mapCompetences.get(idCompetenceNiveau3).text;
      liste.push(new model.LigneTableauDeBord(nomDomaine, notes.eval, notes.prepa, mapCompetences));
    });

    return liste;
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
      idParent = mapCompetences.get(idParent).parent;
    }
    return ancetres;
  }
  /** Retourne une Map <idCompetence Competence> de toutes les compétences existantes */
  private calculMapCompetences(): Map<string, model.Competence> {
    const laMap: Map<string, model.Competence> = new Map<string, model.Competence>();
    for (const competence of this.anneeChargee.competences) {
      laMap.set(competence.id, competence);
    }
    return laMap;
  }
  /** Renvoit le nombre en String sur 2 chiffres */
  private formateNombre(n: number) {
    if (n < 10) {
      return '0' + n;
    } else {
      return '' + n;
    }
  }
}

import { Injectable } from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class DataService {

  /** Données chargées et en cours d'édition */
  private anneeChargee: model.Annee;

  /** Données de cache utilisées pour ne pas parcourir anneeChargee constamment */
  private cacheMapDateJournal: Map<number, model.Journal> = new Map<number, model.Journal>();
  private cacheMapCompetence: Map<string, model.Competence> = new Map<string, model.Competence>();
  private cacheMapLibelleCompletCompetence: Map<string, string> = new Map<string, string>();
  private cacheMapListeCompetencesEnfant: Map<string, model.Competence[]> = new Map<string, model.Competence[]>();

  // Pour sauvegarder le theme
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
        themeParDefaut = document.cookie.split('=')[1];
      }
      return themeParDefaut;
    }
  }

  /** Pour obtenir la liste des types de temps */
  getlisteTypeDeTemps(): string[] {
    if (!this.anneeChargee) {
      return [];
    } else {
      return this.anneeChargee.libellesTypeTempsJournal;
    }
  }

  /** Pour savoir si une année est chargée */
  isAnneeChargee(): boolean {
    return !!this.anneeChargee;
  }

  /** Pour ajouter un journal */
  ajouterJournal(date: Date): model.Journal | undefined {
    // Cas où aucune année n'est chargée
    if (!this.anneeChargee) {
      return undefined;
    } else {

      // Cas d'un journal déjà existant
      let journal = this.getJournal(date);
      if (journal) {
        return journal;
      }

      // Création d'un journal
      journal = new model.Journal();
      journal.date = date;
      journal.temps = [];
      this.anneeChargee.journal.push(journal);
      this.cacheMapDateJournal.set(new Date(date).getTime(), journal);
      return journal;
    }
  }

  /** Pour obtenir le journal d'un jour précis */
  getJournal(date: Date): model.Journal | undefined {
    if (this.cacheMapDateJournal.size === 0 && this.anneeChargee) {
      for (const journal of this.anneeChargee.journal) {
        this.cacheMapDateJournal.set(new Date(journal.date).getTime(), journal);
      }
    }
    return this.cacheMapDateJournal.get(date.getTime());
  }

  /**
   * Obtenir une compétence par sa date.
   */
  getCompetence(idCompetence: string): model.Competence | undefined {
    let competence = this.cacheMapCompetence.get(idCompetence);
    if (competence) {
      return competence;
    } else if (this.anneeChargee) {
      for (const c of this.anneeChargee.competences) {
        if (c.id === idCompetence) {
          competence = c;
          break;
        }
      }
      if (competence) {
        this.cacheMapCompetence.set(idCompetence, competence);
      }
    }
    return competence;
  }
  /**
   * Calcul le libellé de la compétence à partir de son ID.
   * Si idCompetenceRacine est précisé, le libellé commence à cette compétence
   */
  getLibelleCompletCompetence(idCompetence: string, idCompetenceRacine?: string): string {
    let libelle = this.cacheMapLibelleCompletCompetence.get(idCompetence + idCompetenceRacine);
    if (libelle) {
      return libelle;
    } else if (this.anneeChargee) {
      libelle = '';
      let idCompetenceEnfant = idCompetence;
      for (let i = this.anneeChargee.competences.length - 1; i !== -1; i--) {
        if (this.anneeChargee.competences[i].id === idCompetenceRacine) {
          break;
        } else if (this.anneeChargee.competences[i].id === idCompetenceEnfant) {
          libelle = this.anneeChargee.competences[i].text + ' > ' + libelle;
          idCompetenceEnfant = this.anneeChargee.competences[i].parent;
        }
      }
      libelle = libelle.substr(0, libelle.length - 3);
      this.cacheMapLibelleCompletCompetence.set(idCompetence + idCompetenceRacine, libelle);
    } else {
      libelle = '';
    }
    return libelle;
  }

  getListeCompetencesEnfant(idCompetence: string): model.Competence[] {
    let liste = this.cacheMapListeCompetencesEnfant.get(idCompetence);
    if (liste) {
      return liste;
    } else if (this.anneeChargee) {
      liste = [];
      for (const competence of this.anneeChargee.competences) {
        if (competence.parent === idCompetence) {
          liste.push(competence);
        }
      }
      this.cacheMapListeCompetencesEnfant.set(idCompetence, liste);
    } else {
      liste = [];
    }
    return liste;

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

    // Initialisation du thème si présent dans les données
    if (annee.themeSelectionne) {
      this.setThemeSelectionne(annee.themeSelectionne);
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

  ajouteNoteDepuisTdb(ligne: model.LigneTableauDeBord, ajoutSurPeriodeEvaluee: boolean): void {
    if (this.anneeChargee) {
      let indexPeriode = ligne.indexPeriodeEvaluee;
      let constat = ligne.constat;
      let aide = '';
      if (!ajoutSurPeriodeEvaluee) {
        constat = '';
        aide = ligne.aide;
        if (indexPeriode < this.anneeChargee.periodes.length) {
          indexPeriode++;
        }
      }
      const note = new model.Note('', ligne.idEleve, ligne.idDomaine, this.anneeChargee.periodes[indexPeriode].debut, aide, constat, '');
      this.anneeChargee.notes.push(note);
      const competence = this.getCompetence(ligne.idDomaine);
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
  getListeLigneTableauDeBord(eleve?: model.Eleve, periodeEvaluee?: model.Periode): model.LigneTableauDeBord[] {

    // Si aucune année chargée, aucune données
    if (!this.anneeChargee || !eleve || !periodeEvaluee) {
      return [];
    }

    const liste: model.LigneTableauDeBord[] = [];
    const indexPeriodeEvaluee = this.anneeChargee.periodes.findIndex((p) => p === periodeEvaluee);
    let periodePreparee: model.Periode | undefined;
    if (indexPeriodeEvaluee < this.anneeChargee.periodes.length - 1) {
      periodePreparee = this.anneeChargee.periodes[indexPeriodeEvaluee + 1];
    } else {
      periodePreparee = undefined;
    }

    // Création de la map des compétences
    const mapCompetences: Map<string, model.Competence> = this.calculMapCompetences();

    // Récupération des notes de l'élève sur la période évaluée triées par compétence
    const notesElevePeriodeEvaluee = this.anneeChargee.notes
      .filter((note) => note && note.date && note.idEleve === eleve.id && periodeEvaluee.debut <= note.date && note.date <= periodeEvaluee.fin)
      .sort((a, b) => (a.idItem !== undefined && b.idItem !== undefined) ? a.idItem.localeCompare(b.idItem) : 0);
    // Récupération des notes de l'élève sur la période préparée triées par compétence
    let notesElevePeriodePreparee: model.Note[] = [];
    if (periodePreparee) {
      notesElevePeriodePreparee = this.anneeChargee.notes
        .filter((note) => note.date && note.idEleve === eleve.id && periodePreparee && periodePreparee.debut <= note.date && note.date <= periodePreparee.fin)
        .sort((a, b) => (a.idItem !== undefined && b.idItem !== undefined) ? a.idItem.localeCompare(b.idItem) : 0);
    }

    // Création d'une map avec toutes les notes regroupées par idCompetenceNiveau3
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

    mapNotesEleve.forEach((notes: { eval: model.Note[], prepa: model.Note[] }, idCompetenceNiveau3: string) => {
      const nomDomaine = this.getLibelleCompletCompetence(idCompetenceNiveau3);
      liste.push(new model.LigneTableauDeBord(idCompetenceNiveau3, nomDomaine, notes.eval, notes.prepa, mapCompetences, eleve.id, indexPeriodeEvaluee));
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
      const parent = mapCompetences.get(idParent);
      if (parent) {
        idParent = parent.parent;
      }
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

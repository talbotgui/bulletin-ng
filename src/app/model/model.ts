export class ModelUtil {
  static getUID() {
    const n = 8;
    return new Array(n + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, n);
  }
}

export class Periode {
  id: number; nom: string; debut: Date; fin: Date;
}

export class Cursus {
  annee: number; niveau: string; etablissement: string; accompagnement: string;
}

export class Eleve {
  static readonly CODE_STATUT_DANS_LA_CLASSE = '2';

  dateNaissance: Date;
  pere: string; mere: string; fratrie: string;
  adresses: string; telephones: string;
  statut: string; bilans: string; cursus: Cursus[];
  dateAdmission: Date; accueil: string; datesPPA: string; datesPAP: string; datesESS: string;

  constructor(public id: string, public nom: string, public prenom: string) { }
}

export class Competence {
  id: string; text: string; parent: string;
}

export class Note {
  id: string;
  constructor(public valeur: string, public idEleve?: string, public idItem?: string, public date?: Date, public modalitesAide?: string, public constat?: string, public commentaire?: string) {
    this.id = ModelUtil.getUID();
  }
}

export class Historique {
  date: Date; modification: string;
}

export class Temps {
  debut: string; fin: string; nom: string; type: string; commentaire: string; eleves: string[] = []; competences: string[] = [];
}

export class Journal {
  date: Date; remarque: string; temps: Temps[];
}

export class Annee {
  anneeScolaire: string; periodes: Periode[];
  enteteEdition: string; enseignant: string; cycleNiveau: string;
  libellesTypeTempsJournal: string[];
  eleves: Eleve[]; competences: Competence[]; notes: Note[]; journal: Journal[];
  dateDerniereSauvegarde: Date; historique: Historique[]; erreursChargement: string[];
  mapLibelleStatutEleve: any; mapLibelleNotes: any;
  mapLibelleStatutEleveMap: Map<string, string>; mapLibelleNotesMap: Map<string, string>;
  themeSelectionne: string;
}
export class SousLigneTableauDeBord {
  constructor(public competence?: Competence, public constatation?: Note, public aide?: Note) { }
}
export class LigneTableauDeBord {
  sousLignes: SousLigneTableauDeBord[];

  set constat(value: string) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.constatation) {
        sousLigne.constatation.constat = value;
      }
    }
  }
  get constat() {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.constatation && sousLigne.constatation.constat) {
          return sousLigne.constatation.constat;
        }
      }
    }
    return '';
  }
  set aide(value: string) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.aide) {
        sousLigne.aide.modalitesAide = value;
      }
    }
  }
  get aide() {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.aide && sousLigne.aide.modalitesAide) {
          return sousLigne.aide.modalitesAide;
        }
      }
    }
    return '';
  }

  constructor(public idDomaine: string, public nomDomaine: string, constatations: Note[] = [], aides: Note[] = [], mapCompetences: Map<string, Competence>, public idEleve: string, public indexPeriodeEvaluee: number) {
    this.sousLignes = [];

    // Creation des sousLignes pour les constations
    for (const constatation of constatations) {
      if (constatation.idItem) {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(constatation.idItem), constatation, undefined));
      }
    }

    // Creation/complétion des sousLignes pour les constations
    for (const aide of aides) {

      // Recherche de la sousLigne par identifiant de competence
      const sousLigneTrouvee = this.sousLignes.find((l) => l.competence !== undefined && l.competence.id === aide.idItem);
      if (sousLigneTrouvee && !sousLigneTrouvee.aide) {
        sousLigneTrouvee.aide = aide;
      }

      // Si pas trouvé, création d'une sousLigne
      else if (aide.idItem) {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(aide.idItem), undefined, aide));
      }
    }
  }
}

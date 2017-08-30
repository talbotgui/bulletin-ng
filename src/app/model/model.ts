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

  id: string; nom: string; prenom: string; dateNaissance: Date;
  pere: string; mere: string; fratrie: string;
  adresses: string; telephones: string;
  statut: string; bilans: string; cursus: Cursus[];
  dateAdmission: Date; accueil: Date; datesPPA: Date; datesPAP: Date; datesESS: Date;
  constructor(id: string, nom: string, prenom: string) {
    this.id = id; this.nom = nom; this.prenom = prenom;
  }
}

export class Competence {
  id: string; text: string; parent: string;
}

export class Note {
  id: string; idEleve?: string; idItem?: string; valeur: string; date?: Date;
  modalitesAide?: string; constat?: string; commentaire?: string;
  constructor(valeur: string, idEleve?: string, idItem?: string, date?: Date, modalitesAide?: string, constat?: string, commentaire?: string) {
    this.id = ModelUtil.getUID();
    this.idEleve = idEleve;
    this.idItem = idItem;
    this.valeur = valeur;
    this.date = date;
    this.modalitesAide = modalitesAide;
    this.constat = constat;
    this.commentaire = commentaire;
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
  competence?: Competence; aide?: Note; constatation?: Note;
  constructor(competence?: Competence, constatation?: Note, aide?: Note) {
    this.competence = competence;
    this.constatation = constatation;
    this.aide = aide;
  }
}
export class LigneTableauDeBord {
  idEleve: string;
  indexPeriodeEvaluee: number;
  idDomaine: string;
  nomDomaine: string;
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

  constructor(idDomaine: string, nomDomaine: string, constatations: Note[] = [], aides: Note[] = [], mapCompetences: Map<string, Competence>, idEleve: string, indexPeriodeEvaluee: number) {
    this.idDomaine = idDomaine;
    this.nomDomaine = nomDomaine;
    this.sousLignes = [];
    this.idEleve = idEleve;
    this.indexPeriodeEvaluee = indexPeriodeEvaluee;

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

export class Periode {
  id: number; nom: string; debut: Date; fin: Date;
}

export class Cursus {
  annee: string; niveau: string; etablissement: string; accompagnement: string;
}

export class Eleve {
  static readonly CODE_STATUT_DANS_LA_CLASSE = '2';
  static readonly STATUT_ELEVE: Map<string, string> = new Map([
    ['0', 'hors établissement'], ['1', 'dans l\'établissement'], [Eleve.CODE_STATUT_DANS_LA_CLASSE, 'dans la classe']
  ]);

  id: string; nom: string; prenom: string; dateNaissance: Date;
  pere: string; mere: string; fratrie: string;
  adresses: string; telephones:
  string; statut: string; bilans: string; cursus: Cursus[];
  dateAdmission: Date; accueil: Date; datesPPA: Date; datesPAP: Date; datesESS: Date;
  constructor(id: string, nom: string, prenom: string) {
    this.id = id; this.nom = nom; this.prenom = prenom;
  }
}

export class Competence {
  id: string; text: string; parent: string;
}

export class Note {
  id: string; idEleve: string; idItem: string; valeur: string; date: Date;
  string; modalitesAide: string; constat: string; commentaire: string;
}

export class Historique {
  date: Date; modification: string;
}

export class Temps {
  debut: string; fin: string; nom: string; type: string; commentaire: string; eleves: string[]; competences: string[];
}

export class Journal {
  date: Date; remarque: string; temps: Temps[];
}

export class Annee {
  anneeScolaire: string; periodes: Periode[];
  enteteEdition: string; enseignant: string; cycleNiveau: string;
  libellesTypeTempsJournal: string[];
  eleves: Eleve[]; competences: Competence[]; notes: Note[]; journal: Journal[];
  dateDerniereSauvegarde: Date; historique: Historique[]; erreursChargement: String[];
}
export class SousLigneTableauDeBord {
  competence: Competence;
  aides: Note[] = [];
  constatations: Note[] = [];
  get constat(): string {
    if (this.constatations && this.constatations.length > 0) {
      return this.constatations[0].constat;
    }
    return '';
  }
  get aide(): string {
    if (this.aides && this.aides.length > 0) {
      return this.aides[0].modalitesAide;
    }
    return '';
  }
  set constat(value: string) {
    if (this.constatations) {
      for (let constation of this.constatations) {
        constation.constat = value;
      }
    }
  }
  set aide(value: string) {
    if (this.aides) {
      for (let aide of this.aides) {
        aide.modalitesAide = value;
      }
    }
  }
}
export class LigneTableauDeBord {
  nomDomaine: string;
  sousLignes: SousLigneTableauDeBord[];
  constructor(nomDomaine: string, constatations: Note[] = [], aides: Note[] = [], mapCompetences: Map<string, Competence>) {
    this.nomDomaine = nomDomaine;
    this.sousLignes = [];

    // Creation des sousLignes pour les aides
    for (let i = 0; i < constatations.length; i++) {
      const constatation = constatations[i];

      // Création ou réutilisation de la sousLigne
      let sousLigne: SousLigneTableauDeBord;
      if (i === 0 || constatation.idItem === constatations[i - 1].idItem) {
        sousLigne = new SousLigneTableauDeBord();
        sousLigne.competence = mapCompetences.get(constatation.idItem);
        this.sousLignes.push(sousLigne);
      } else {
        sousLigne = this.sousLignes[this.sousLignes.length - 1];
      }

      // Ajout de l'aide dans les aides de la sousLigne
      sousLigne.constatations.push(constatation);
    }

    // Creation/complétion des sousLignes pour les constations
    // TODO:à compléter
  }
}

export class Periode {
  id: number; nom: string; debut: Date; fin: Date;
}

export class Cursus {
  annee: string; niveau: string; etablissement: string; accompagnement: string;
}

export class Eleve {
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

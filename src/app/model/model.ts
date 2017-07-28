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
  competence: Competence; aide: Note; constatation: Note;
  constructor(competence: Competence, constatation: Note, aide: Note) {
    this.competence = competence;
    this.constatation = constatation;
    this.aide = aide;
  }
}
export class LigneTableauDeBord {
  nomDomaine: string;
  sousLignes: SousLigneTableauDeBord[];

  set constat(value: string) {}
  get constat() {return 'constatYY';}
  set aide(value: string) {}
  get aide() {return 'aideXX';}

  constructor(nomDomaine: string, constatations: Note[] = [], aides: Note[] = [], mapCompetences: Map<string, Competence>) {
    this.nomDomaine = nomDomaine;
    this.sousLignes = [];

    // Creation des sousLignes pour les constations
    for (let constatation of constatations) {
      this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(constatation.idItem), constatation, null));
    }

    // Creation/complétion des sousLignes pour les constations
    for (let aide of aides) {

      // Recherche de la sousLigne par identifiant de competence
      let sousLigneTrouvee = this.sousLignes.find(l => l.competence.id === aide.idItem);
      if (sousLigneTrouvee) {
        sousLigneTrouvee.aide = aide;
      }

      // Si pas trouvé, création d'une sousLigne
      else {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(aide.idItem), null, aide));
      }
    }
  }
}

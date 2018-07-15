import { Utils } from '../service/utils';

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
  statut: string; bilans: string; cursus: Cursus[] = [];
  dateAdmission: Date; accueil: string; datesPPA: string; datesPAP: string; datesESS: string;
  droitImage: string; autorisationBaignade: string;

  constructor(public id: string, public nom: string, public prenom: string) { }
}

export class Competence {
  id: string; text: string; parent: string;
}

export class Note {
  id: string;
  constructor(public valeur: string, public idEleve?: string, public idItem?: string, public date?: Date, public proposition?: string, public constat?: string, public commentaire?: string, public outil?: string) {
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
  date: Date; remarque: string; temps: Temps[] = [];
}

export class Echeance {
  termine: boolean;
  constructor(public nom: string, public date: Date) { }
}

export class Tache {
  constructor(public titre: string, public echeances: Echeance[] = []) { }

  get avancement(): string {
    if (this.echeances) {
      const nbEcheancesTerminees = this.echeances.filter((el: Echeance) => el.termine).length;
      return nbEcheancesTerminees + '/' + this.echeances.length;
    } else {
      return '';
    }
  }

  get prochaineEcheance(): Date | undefined {
    if (this.echeances) {
      const listeTrieeFiltree = this.echeances.filter((el: Echeance) => !el.termine)
        .sort((a, b) => b.date.getTime() - a.date.getTime());

      if (listeTrieeFiltree.length > 0) {
        return listeTrieeFiltree[listeTrieeFiltree.length - 1].date;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  get terminee(): boolean {
    if (this.echeances) {
      const nbEcheancesTerminees = this.echeances.filter((el: Echeance) => el.termine).length;
      return nbEcheancesTerminees === this.echeances.length;
    } else {
      return false;
    }
  }

  compareTo(autre: Tache): number {
    return this.getStringPourCompare().localeCompare(autre.getStringPourCompare());
  }

  private getStringPourCompare() {
    let stringPourComparer = '' + this.terminee;
    if (!!this.prochaineEcheance && !!this.prochaineEcheance.getTime) {
      stringPourComparer += this.prochaineEcheance.getFullYear() + Utils.formatNumber(this.prochaineEcheance.getMonth());
      stringPourComparer += Utils.formatNumber(this.prochaineEcheance.getDate());
    }
    stringPourComparer += this.titre;
    return stringPourComparer;
  }
}

export class Annee {
  anneeScolaire: string; periodes: Periode[] = [];
  enteteEdition: string; enseignant: string; cycleNiveau: string;
  libellesTypeTempsJournal: string[] = [];
  eleves: Eleve[] = []; competences: Competence[] = []; notes: Note[] = []; journal: Journal[] = [];
  dateDerniereSauvegarde: Date; historique: Historique[] = []; erreursChargement: string[] = [];
  mapLibelleStatutEleve: any; mapLibelleNotes: any;
  mapLibelleStatutEleveMap: Map<string, string>; mapLibelleNotesMap: Map<string, string>;
  themeSelectionne: string; taches: Tache[] = []; projets: Projet[];
}

export class Projet {
  nom: string; idCompetences: string[] = [];
}

export class SousLigneTableauDeBord {
  constructor(public competence?: Competence, public constatation?: Note, public proposition?: Note) { }
}

export class LigneTableauDeBord {
  sousLignes: SousLigneTableauDeBord[] = [];

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
  set proposition(value: string) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.proposition) {
        sousLigne.proposition.proposition = value;
      }
    }
  }
  get proposition() {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.proposition && sousLigne.proposition.proposition) {
          return sousLigne.proposition.proposition;
        }
      }
    }
    return '';
  }
  set outil(value: string | undefined) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.constatation) {
        sousLigne.constatation.outil = value;
      }
    }
  }
  get outil(): string | undefined {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.constatation && sousLigne.constatation.outil) {
          return sousLigne.constatation.outil;
        }
      }
    }
    return '';
  }
  get sousLignesAvecNotes(): SousLigneTableauDeBord[] {
    const sousLignesAvecNotes: SousLigneTableauDeBord[] = [];
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (!!sousLigne.constatation && !!sousLigne.constatation.valeur) {
          sousLignesAvecNotes.push(sousLigne);
        }
      }
    }
    return sousLignesAvecNotes;
  }

  get nomDomaineCoupe(): string[] {
    if (this.nomDomaine) {
      return this.nomDomaine.split(' > ');
    } else {
      return [];
    }
  }

  constructor(public idDomaine: string | undefined, public nomDomaine: string | undefined, constatations: Note[] = [], propositions: Note[] = [], mapCompetences: Map<string, Competence>, public idEleve: string, public periodeEvaluee: Periode) {
    this.sousLignes = [];

    // Creation des sousLignes pour les constations
    for (const constatation of constatations) {
      if (constatation.idItem) {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(constatation.idItem), constatation, undefined));
      }
    }

    // Creation/complétion des sousLignes pour les propositions
    for (const proposition of propositions) {

      // Recherche de la sousLigne par identifiant de competence
      const sousLigneTrouvee = this.sousLignes.find((l) => l.competence !== undefined && l.competence.id === proposition.idItem);
      if (sousLigneTrouvee && !sousLigneTrouvee.proposition) {
        sousLigneTrouvee.proposition = proposition;
      }

      // Si pas trouvé, création d'une sousLigne
      else if (proposition.idItem) {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(proposition.idItem), undefined, proposition));
      }
    }

    // Tri des lignes
    this.sousLignes.sort((a, b) => {
      if (a.competence && b.competence) {
        return a.competence.text.localeCompare(b.competence.text)
      } else {
        return -1;
      }
    });
  }
}

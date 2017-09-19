import { Injectable } from '@angular/core';

import { DataRepository } from './data.repository';
import * as model from '../model/model';

@Injectable()
export class LectureService {

  /** Données de cache utilisées pour ne pas parcourir anneeChargee constamment */
  private cacheMapDateJournal: Map<number, model.Journal> = new Map<number, model.Journal>();
  private cacheMapCompetence: Map<string, model.Competence> = new Map<string, model.Competence>();
  private cacheMapLibelleCompletCompetence: Map<string, string> = new Map<string, string>();
  private cacheMapListeCompetencesEnfant: Map<string, model.Competence[]> = new Map<string, model.Competence[]>();

  constructor(private dataRepository: DataRepository) { }

  /** Retourne la liste des tâches */
  getListeTaches(): model.Tache[] {
    return this.dataRepository.getAnneeChargee().taches;
  }

  /** Pour obtenir la liste des types de temps */
  getlisteTypeDeTemps(): string[] {
    return this.dataRepository.getAnneeChargee().libellesTypeTempsJournal;
  }

  /** Pour obtenir le journal d'un jour précis */
  getJournal(date: Date): model.Journal | undefined {
    if (!date) {
      return undefined;
    }

    const time = date.getTime();

    // Si présent dans le cache, on renvoie
    if (this.cacheMapDateJournal.has(time)) {
      return this.cacheMapDateJournal.get(time);
    }

    // Sinon, recherche, mise en cache et renvoie
    for (const journal of this.dataRepository.getAnneeChargee().journal) {
      if (journal.date.getTime() === time) {
        this.cacheMapDateJournal.set(time, journal);
        return journal;
      }
    }

    // Si aucune référence, undefined
    return undefined;
  }

  /**
   * Obtenir une compétence par sa date.
   */
  getCompetence(idCompetence: string): model.Competence | undefined {
    // Tentative par le cache
    if (this.cacheMapCompetence.has(idCompetence)) {
      return this.cacheMapCompetence.get(idCompetence);
    }

    // Recherche, mise en cache et renvoie
    for (const c of this.dataRepository.getAnneeChargee().competences) {
      if (c.id === idCompetence) {
        this.cacheMapCompetence.set(idCompetence, c);
        return c;
      }
    }

    // Sinon
    return undefined;
  }

  /**
   * Calcul le libellé de la compétence à partir de son ID.
   * Si idCompetenceRacine est précisé, le libellé commence à cette compétence
   */
  getLibelleCompletCompetence(idCompetence: string, idCompetenceRacine?: string): string {

    // Recherche dans le cache
    const clefCache = idCompetence + idCompetenceRacine;
    const valeurCache = this.cacheMapLibelleCompletCompetence.get(clefCache);
    if (valeurCache) {
      return valeurCache;
    }

    // Si une année est chargée
    let libelle = '';
    const competences = this.dataRepository.getAnneeChargee().competences;

    // Calcul
    let idCompetenceEnfant = idCompetence;
    for (let i = competences.length - 1; i !== -1; i--) {
      if (competences[i].id === idCompetenceRacine) {
        break;
      } else if (competences[i].id === idCompetenceEnfant) {
        libelle = competences[i].text + ' > ' + libelle;
        idCompetenceEnfant = competences[i].parent;
      }
    }
    libelle = libelle.substr(0, libelle.length - 3);

    // Mise en cache
    this.cacheMapLibelleCompletCompetence.set(idCompetence + idCompetenceRacine, libelle);

    // Renvoi
    return libelle;
  }

  getAncetresCompetence(idCompetence: string): model.Competence[] {
    const resultat: model.Competence[] = [];
    const competences = this.dataRepository.getAnneeChargee().competences;
    let idCompetenceEnfant = idCompetence;
    for (let i = competences.length - 1; i !== -1; i--) {
      if (competences[i].id === idCompetenceEnfant) {
        resultat.push(competences[i]);
        idCompetenceEnfant = competences[i].parent;
      }
    }
    return resultat;
  }

  /** Recherche des compétences "enfants" d'une compétence */
  getListeCompetencesEnfant(idCompetence: string): model.Competence[] {

    // Utilisation du cache
    const valeurCache = this.cacheMapListeCompetencesEnfant.get(idCompetence);
    if (valeurCache) {
      return valeurCache;
    }

    // Si l'année est là, recherche, cache et renvoie
    const liste = [];
    for (const competence of this.dataRepository.getAnneeChargee().competences) {
      if (competence.parent === idCompetence) {
        liste.push(competence);
      }
    }
    this.cacheMapListeCompetencesEnfant.set(idCompetence, liste);
    return liste;
  }

  getEleve(id: string): model.Eleve | undefined {
    for (const e of this.dataRepository.getAnneeChargee().eleves) {
      if (e.id === id) {
        return e;
      }
    }
    return undefined;
  }

  /** Donne la liste complète des élèves */
  getListeEleve(): model.Eleve[] {
    return this.dataRepository.getAnneeChargee().eleves;
  }

  /** Donne la liste des periodes */
  getListePeriode(): model.Periode[] {
    return this.dataRepository.getAnneeChargee().periodes;
  }

  /** Donne la liste des note */
  getListeNote(): model.Note[] {
    return this.dataRepository.getAnneeChargee().notes;
  }

  getPeriode(index: number): model.Periode | undefined {
    const periodes = this.dataRepository.getAnneeChargee().periodes;
    if (index < 0 || index >= periodes.length) {
      return undefined;
    } else {
      return periodes[index];
    }
  }

  getPeriodeById(id: number): model.Periode | undefined {
    const periodes = this.dataRepository.getAnneeChargee().periodes;
    for (const p of periodes) {
      if (p.id === id) {
        return p;
      }
    }
    return undefined;
  }

  getPeriodeSuivante(periode: model.Periode): model.Periode | undefined {
    const periodes = this.getListePeriode();
    const indexPeriode = periodes.findIndex((p) => p === periode);
    if (0 <= indexPeriode && indexPeriode < periodes.length - 1) {
      return periodes[indexPeriode + 1];
    } else {
      return undefined;
    }
  }

  /** Donne la liste des élèves présents dans la classe */
  getListeEleveActif(): model.Eleve[] {
    return this.getListeEleve().filter((eleve) => eleve.statut === model.Eleve.CODE_STATUT_DANS_LA_CLASSE);
  }

  /** Donne la liste complète des compétences */
  getListeCompetence(): model.Competence[] {
    return this.dataRepository.getAnneeChargee().competences;
  }

  /** Donne la map des libellés de note */
  getMapLibelleNote(): any {
    return this.dataRepository.getAnneeChargee().mapLibelleNotes;
  }

  /** Donne la map des status d'élève */
  getMapLibelleStatutEleveMap(): Map<string, string> {
    return this.dataRepository.getAnneeChargee().mapLibelleStatutEleveMap;
  }

  /** Retourne une Map <idCompetence Competence> de toutes les compétences existantes */
  getMapCompetences(): Map<string, model.Competence> {
    const annee = this.dataRepository.getAnneeChargee();
    if (this.cacheMapCompetence.size === annee.competences.length) {
      return this.cacheMapCompetence;
    }

    const laMap: Map<string, model.Competence> = new Map<string, model.Competence>();
    for (const competence of annee.competences) {
      laMap.set(competence.id, competence);
    }
    return laMap;
  }

  getCompetenceParTexte(recherche: string | undefined, idCompetenceRacine?: string): model.Competence[] {
    const resultats: model.Competence[] = [];
    if (recherche) {
      const mots = recherche.toUpperCase().split(' ');
      const listeDesParents: string[] = [];
      if (idCompetenceRacine) {
        listeDesParents.push(idCompetenceRacine);
      }
      for (const c of this.getListeCompetence()) {
        if (idCompetenceRacine) {
          if (listeDesParents.indexOf(c.parent) === -1) {
            continue;
          } else {
            listeDesParents.push(c.id);
          }
        }
        if (this.compareLibelleCompetencePourRecherche(c.text.toLocaleUpperCase(), mots)) {
          resultats.push(c);
        }
      }
    }
    return resultats;
  }

  /**
   * Compare une expression recherchée avec un libellé de compétence.
   * @param libelle Le libellé de la compétence (en majuscule)
   * @param mots Les mots de l'expression recherchée (en majuscule)
   */
  compareLibelleCompetencePourRecherche(libelle: string, mots: string[]): boolean {
    let valide = true;
    if (libelle) {
      for (const mot of mots) {
        if (mot.startsWith('-')) {
          valide = valide && libelle.indexOf(mot.substr(1, mot.length - 1)) === -1;
        } else {
          valide = valide && libelle.indexOf(mot) !== -1;
        }
      }
    }
    return valide;
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Utils } from './utils';
import { DataRepository } from './data.repository';
import { LectureService } from './lecture.service';
import * as model from '../model/model';

@Injectable()
export class JournalService {

  constructor(private dataRepository: DataRepository, private lectureService: LectureService, private snackBar: MatSnackBar) { }

  /** Duplication du journal pour l'ajouter avec la date cible. */
  dupliquerJournal(journal: model.Journal, dateCible: Date): void {
    // Recherche du journal
    const journalCible = this.lectureService.getJournal(dateCible);

    // Si journal déjà existant à cette date, notification
    if (journalCible) {
      const message = 'Un journal existe déjà pour la date sélectionnée !';
      this.snackBar.open(message, undefined, { duration: 5000, extraClasses: ['avertissement'] });
      return;
    }

    // Duplication du journal
    const nouveauJournal = this.ajouterJournal(dateCible);
    if (nouveauJournal) {
      nouveauJournal.date = dateCible;
      nouveauJournal.remarque = 'Duplication du journal du ' + Utils.formatDate(journal.date, true) + '<br/>' + journal.remarque;
      nouveauJournal.temps = [];
      if (journal.temps) {
        for (const t of journal.temps) {
          nouveauJournal.temps.push(this.dupliqueTemps(t));
        }
      }
    }
  }

  /** Duplication du temps et ajout au journal de la date cible */
  dupliquerTemps(temps: model.Temps, dateCible: Date): void {
    // Recherche du journal
    const journalCible = this.lectureService.getJournal(dateCible);

    // Si journal non existant à cette date, notification
    if (!journalCible) {
      const message = 'Aucun journal n\'existe pour la date sélectionnée';
      this.snackBar.open(message, undefined, { duration: 5000, extraClasses: ['avertissement'] });
      return;
    }

    // Ajout du temps dupliqué
    if (!journalCible.temps) {
      journalCible.temps = [];
    }
    journalCible.temps.push(this.dupliqueTemps(temps));
  }

  /** Pour ajouter un journal */
  ajouterJournal(date: Date): model.Journal {

    // Cas d'un journal déjà existant
    let journal = this.lectureService.getJournal(date);
    if (journal) {
      return journal;
    }

    // Création d'un journal
    journal = new model.Journal();
    journal.date = date;
    journal.temps = [];

    // Ajout à l'année et renvoi
    this.dataRepository.getAnneeChargee().journal.push(journal);
    return journal;
  }

  /** Fonction de manipulation de données */
  private dupliqueTemps(t: model.Temps): model.Temps {
    const nouveauTemps = new model.Temps();
    nouveauTemps.commentaire = t.commentaire;
    nouveauTemps.competences = t.competences.slice();
    nouveauTemps.debut = t.debut;
    nouveauTemps.fin = t.fin;
    nouveauTemps.eleves = t.eleves.slice();
    nouveauTemps.nom = t.nom;
    nouveauTemps.type = t.type;
    return nouveauTemps;
  }
}

import { Component, Input } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { JournalService } from '../service/journal.service';
import * as model from '../model/model';

@Component({
  selector: 'dialog-duplication', templateUrl: './dialog-duplication.component.html', styleUrls: ['./dialog-duplication.component.css']
})
export class DialogDuplicationComponent {

  @Input()
  journal: model.Journal;

  @Input()
  temps: model.Temps | undefined;

  dateCible: Date;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private journalService: JournalService, private dialogRef: MatDialogRef<DialogDuplicationComponent>, private snackBar: MatSnackBar) { }

  annuler() {
    this.dialogRef.close();
  }

  /** Duplication */
  dupliquer() {

    // Validation du formulaire
    if (!this.dateCible) {
      const message = 'Aucune date cible sélectionnée !';
      this.snackBar.open(message, undefined, { duration: 5000, extraClasses: ['avertissement'] });
      return;
    }

    // Si duplication de journal
    if (!this.temps) {
      this.journalService.dupliquerJournal(this.journal, this.dateCible);
    }

    // Si duplication du temps
    else {
      this.journalService.dupliquerTemps(this.temps, this.dateCible);
    }

    this.dialogRef.close();
  }

  paliatifBugDatepickerDansDialog() {
    const elements = document.getElementsByClassName('cdk-overlay-pane');
    const element = elements[elements.length - 1];
    (element as HTMLElement).style.bottom = '0px';
  }
}

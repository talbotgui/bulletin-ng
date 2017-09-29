import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

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
  constructor(private journalService: JournalService, private dialogRef: MdDialogRef<DialogDuplicationComponent>) { }

  annuler() {
    this.dialogRef.close();
  }

  /** Duplication */
  dupliquer() {

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
}

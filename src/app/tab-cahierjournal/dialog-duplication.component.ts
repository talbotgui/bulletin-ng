import { Component, Input } from '@angular/core';

import { DataService } from '../service/data.service';
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
  constructor(private dataService: DataService) { }

  /** Duplication */
  dupliquer() {

    // Si duplication de journal 
    if (!this.temps) {
      this.dataService.dupliquerJournal(this.journal, this.dateCible);
    }

    // Si duplication du temps
    else {
      this.dataService.dupliquerTemps(this.temps, this.dateCible);

    }
  }
}

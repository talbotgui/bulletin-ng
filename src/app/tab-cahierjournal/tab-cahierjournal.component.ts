import { Component, OnInit } from '@angular/core';
import { IDayCalendarConfig } from 'ng2-date-picker';

import { DataService } from '../service/data.service';
import * as model from '../model/model';

@Component({ selector: 'tab-cahierjournal', templateUrl: './tab-cahierjournal.component.html', styleUrls: ['./tab-cahierjournal.component.css'] })
export class TabCahierJournalComponent implements OnInit {

  dateJournal: Date;
  journal: model.Journal;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
  }


  onChangementDateJournal() {
    this.journal = this.dataService.getJournal(this.dateJournal);
  }
}

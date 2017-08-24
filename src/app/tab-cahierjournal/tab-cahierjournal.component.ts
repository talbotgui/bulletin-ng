import { Component, OnInit } from '@angular/core';
import { IDayCalendarConfig } from 'ng2-date-picker';

import { DataService } from '../service/data.service';
import * as model from '../model/model';

@Component({ selector: 'tab-cahierjournal', templateUrl: './tab-cahierjournal.component.html', styleUrls: ['./tab-cahierjournal.component.css'] })
export class TabCahierJournalComponent implements OnInit {

  datePickerConfig: IDayCalendarConfig = {
    locale: 'fr',
    dayBtnFormatter: (m) => {
      if (this.dataService.isJournalExistantPourCetteDate(m.toDate())) {
        return '#' + m.toDate().getDate();
      } else {
        return m.toDate().getDate();
      }
    }
  } as IDayCalendarConfig;

  dateJournal: Date;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
  }


  onChangementDateJournal() {
    console.info("coucou");
  }
}

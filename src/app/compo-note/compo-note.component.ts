import {Component, OnInit, Input} from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Rx';

import {DataService} from '../service/data.service';
import * as model from '../model/model';

@Component({selector: 'compo-note', templateUrl: './compo-note.component.html', styleUrls: ['./compo-note.component.css']})
export class ComposantNoteComponent implements OnInit {

  // Note fournie en entrée
  @Input() note: model.Note;

  // Libellés des notes
  libellesNote: any;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.libellesNote = this.dataService.getMapLibelleNote();
  }
}

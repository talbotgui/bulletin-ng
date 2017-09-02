import { Component, OnInit, Input } from '@angular/core';

import { LectureService } from '../service/lecture.service';
import * as model from '../model/model';

@Component({ selector: 'compo-note', templateUrl: './compo-note.component.html', styleUrls: ['./compo-note.component.css'] })
export class ComposantNoteComponent implements OnInit {

  // Mode d'affichage
  @Input() lectureSeule: boolean;

  // Note fournie en entrée
  @Input() note: model.Note;

  // Libellés des notes
  libellesNote: any;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.libellesNote = this.lectureService.getMapLibelleNote();
  }
}

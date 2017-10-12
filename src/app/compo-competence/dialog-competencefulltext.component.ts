import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { LectureService } from '../service/lecture.service';
import * as model from '../model/model';

@Component({
  selector: 'dialog-competencefulltext',
  templateUrl: './dialog-competencefulltext.component.html',
  styleUrls: ['./dialog-competencefulltext.component.css']
})
export class DialogCompetenceFullTextComponent {

  @Input() idCompetenceRacine: string;

  @Output() onSelectionRealisee = new EventEmitter<string>();
  idCompetenceSelectionnee: string;

  tempFiltreLibelleCompetence: string;
  competencesTrouvees: model.Competence[];

  get filtreLibelleCompetence() {
    return this.tempFiltreLibelleCompetence;
  }

  set filtreLibelleCompetence(value: string) {
    this.tempFiltreLibelleCompetence = value;
    this.competencesTrouvees = this.lectureService.getCompetenceParTexte(value, this.idCompetenceRacine);
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private dialogRef: MatDialogRef<DialogCompetenceFullTextComponent>) { }

  selectionner() {
    if (this.idCompetenceSelectionnee) {
      this.onSelectionRealisee.emit(this.idCompetenceSelectionnee);
    }
    this.dialogRef.close();
  }

}

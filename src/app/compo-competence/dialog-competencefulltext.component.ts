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

  filtreLibelleCompetence: string;
  competencesTrouvees: model.Competence[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private dialogRef: MatDialogRef<DialogCompetenceFullTextComponent>) { }

  // Affichage du libellé complet de la compétence
  afficherLibelleComplet(competence: model.Competence) {
    (competence as any).libelleComplet = this.lectureService.getLibelleCompletCompetence(competence.id);
  }

  // Recherche des compétences correspondantes
  rechercher() {
    this.competencesTrouvees = this.lectureService.getCompetenceParTexte(this.filtreLibelleCompetence, this.idCompetenceRacine);
  }

  selectionner() {
    if (this.idCompetenceSelectionnee) {
      this.onSelectionRealisee.emit(this.idCompetenceSelectionnee);
    }
    this.dialogRef.close();
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { NoteService } from '../service/note.service';
import { LectureService } from '../service/lecture.service';
import * as model from '../model/model';

@Component({
  selector: 'dialog-selectionprojet', templateUrl: './dialog-selectionProjet.component.html', styleUrls: ['./dialog-selectionProjet.component.css']
})
export class DialogSelectionProjet implements OnInit {

  // Pour le retour du projet selectionné
  @Output() onSelectionEmitter = new EventEmitter<model.Projet>(true);

  // Liste des projets
  projets: model.Projet[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private dialogRef: MatDialogRef<DialogSelectionProjet>) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.projets = this.lectureService.getListeProjets();
  }

  onSelectionProjet(projet: model.Projet): void {
    this.onSelectionEmitter.emit(projet);
    this.fermer();
  }

  fermer() {
    this.dialogRef.close();
  }
}

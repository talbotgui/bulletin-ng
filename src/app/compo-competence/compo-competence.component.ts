import { Component, Input } from '@angular/core';

import { DataService } from '../service/data.service';
import * as model from '../model/model';

@Component({ selector: 'compo-competence', templateUrl: './compo-competence.component.html', styleUrls: ['./compo-competence.component.css'] })
export class ComposantCompetenceeComponent {

  // Mode d'affichage
  @Input() lectureSeule: boolean;

  // Note avec sa competence
  @Input() note: model.Note;

  // Libellé complet de la compétence sélectionnée
  get libelleCompletCompetenceSelectionnee(): string {
    if (this.note) {
      return this.dataService.getLibelleCompletCompetence(this.note.idItem);
    } else {
      return '';
    }
  }

  // Liste des enfants
  get listeCompetenceEnfant(): model.Competence[] {
    if (this.note) {
      return this.dataService.getListeCompetencesEnfant(this.note.idItem);
    } else {
      return [];
    }
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) { }

  // Pour remonter d'un niveau
  selectionneParent() {
    this.note.idItem = this.dataService.getCompetence(this.note.idItem).parent;
  }
}

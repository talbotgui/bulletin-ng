import { Component, Input } from '@angular/core';

import { DataService } from '../service/data.service';
import * as model from '../model/model';

@Component({ selector: 'compo-competence', templateUrl: './compo-competence.component.html', styleUrls: ['./compo-competence.component.css'] })
export class ComposantCompetenceeComponent {

  // Mode d'affichage
  @Input() lectureSeule: boolean;

  // Note avec sa competence
  @Input() note: model.Note;

  @Input() temp: model.Temps;

  @Input() tempIndexCompetence: number;

  // Identifiant de la compétence racine de la sélection
  @Input() idCompetenceRacine: string;

  // Libellé complet de la compétence sélectionnée
  get libelleCompletCompetenceSelectionnee(): string {
    if (this.note) {
      return this.dataService.getLibelleCompletCompetence(this.note.idItem, this.idCompetenceRacine);
    } else if (this.temp) {
      return this.dataService.getLibelleCompletCompetence(this.temp.competences[this.tempIndexCompetence], this.idCompetenceRacine);
    } else {
      return '';
    }
  }

  // Liste des enfants
  get listeCompetenceEnfant(): model.Competence[] {
    if (this.note) {
      return this.dataService.getListeCompetencesEnfant(this.note.idItem);
    } else if (this.temp) {
      return this.dataService.getListeCompetencesEnfant(this.temp.competences[this.tempIndexCompetence]);
    } else {
      return [];
    }
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) { }

  // Pour remonter d'un niveau
  selectionneParent() {
    if (this.note && this.note.idItem !== this.idCompetenceRacine) {
      const competence = this.dataService.getCompetence(this.note.idItem);
      if (competence && competence.parent) {
        this.note.idItem = competence.parent;
      }
    } else if (this.temp && this.temp.competences[this.tempIndexCompetence] !== this.idCompetenceRacine) {
      const competence = this.dataService.getCompetence(this.temp.competences[this.tempIndexCompetence]);
      if (competence && competence.parent) {
        this.temp.competences[this.tempIndexCompetence] = competence.parent;
      }
    }
  }
}

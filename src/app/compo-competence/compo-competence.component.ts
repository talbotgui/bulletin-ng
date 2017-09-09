import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LectureService } from '../service/lecture.service';
import { DialogCompetenceFullTextComponent } from './dialog-competencefulltext.component';
import * as model from '../model/model';

@Component({ selector: 'compo-competence', templateUrl: './compo-competence.component.html', styleUrls: ['./compo-competence.component.css'] })
export class ComposantCompetenceeComponent {

  // Mode d'affichage
  @Input() lectureSeule: boolean;

  // Note avec sa competence
  @Input() note: model.Note;

  @Input() temp: model.Temps;

  // Index de la compétence dans le temps (un model.Temps référence plusieurs compétences)
  @Input() tempIndexCompetence: number;

  // Identifiant de la compétence racine de la sélection
  @Input() idCompetenceRacine: string;

  // Profondeur maximale de la compétence sélectionnable (3 pour un domaine)
  @Input() profondeurMaximaleAutorisee: number = 99;

  // Libellé complet de la compétence sélectionnée
  get libelleCompletCompetenceSelectionnee(): string {
    if (this.note && this.note.idItem) {
      return this.lectureService.getLibelleCompletCompetence(this.note.idItem, this.idCompetenceRacine);
    } else if (this.temp) {
      return this.lectureService.getLibelleCompletCompetence(this.temp.competences[this.tempIndexCompetence], this.idCompetenceRacine);
    } else {
      return '';
    }
  }

  // Liste des enfants
  get listeCompetenceEnfant(): model.Competence[] {
    // Extraction de l'id de la compétence en fonction de l'usage du composant
    let idCompetence;
    if (this.note && this.note.idItem) {
      idCompetence = this.note.idItem;
    } else if (this.temp) {
      idCompetence = this.temp.competences[this.tempIndexCompetence];
    } else {
      return [];
    }

    // Vérification de la profondeur maximale
    if (this.profondeurMaximaleAutorisee !== 99) {
      const profondeurActuelle = this.lectureService.getAncetresCompetence(idCompetence).length;
      if (profondeurActuelle === this.profondeurMaximaleAutorisee) {
        return [];
      }
    }

    // Renvoi de la liste des enfants
    return this.lectureService.getListeCompetencesEnfant(idCompetence);
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(public dialog: MdDialog, private lectureService: LectureService) { }

  // Pour remonter d'un niveau
  selectionnerParent() {
    if (this.note && this.note.idItem && this.note.idItem !== this.idCompetenceRacine) {
      const competence = this.lectureService.getCompetence(this.note.idItem);
      if (competence && competence.parent) {
        this.note.idItem = competence.parent;
      }
    } else if (this.temp && this.temp.competences[this.tempIndexCompetence] !== this.idCompetenceRacine) {
      const competence = this.lectureService.getCompetence(this.temp.competences[this.tempIndexCompetence]);
      if (competence && competence.parent) {
        this.temp.competences[this.tempIndexCompetence] = competence.parent;
      }
    }
  }

  // Pour afficher la popup de sélection/recherche fullText
  afficherPopupFiltre() {
    const popup = this.dialog.open(DialogCompetenceFullTextComponent, { height: '550px', width: '800px' });
    popup.componentInstance.idCompetenceRacine = this.idCompetenceRacine;
    popup.componentInstance.onSelectionRealisee.subscribe((idCompetence: string) => {
      if (this.note) {
        this.note.idItem = idCompetence;
      } else if (this.temp) {
        this.temp.competences[this.tempIndexCompetence] = idCompetence;
      }
    });
  }
}

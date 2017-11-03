import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

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

  // Projet avec ses competences
  @Input() projet: model.Projet;

  // Index de la compétence dans le projet
  @Input() projetIndexCompetence: number;

  // Libellé complet de la compétence sélectionnée
  get libelleCompletCompetenceSelectionnee(): string {
    let idCompetence;
    if (this.note && this.note.idItem) {
      idCompetence = this.note.idItem;
    } else if (this.temp) {
      idCompetence = this.temp.competences[this.tempIndexCompetence];
    } else if (this.projet) {
      idCompetence = this.projet.idCompetences[this.projetIndexCompetence];
      console.info("libelleCompletCompetenceSelectionnee:idCompetence=" + idCompetence);
    } else {
      return '';
    }
    return this.lectureService.getLibelleCompletCompetence(idCompetence, this.idCompetenceRacine);
  }

  // Liste des enfants
  get listeCompetenceEnfant(): model.Competence[] {
    // Extraction de l'id de la compétence en fonction de l'usage du composant
    let idCompetence;
    if (this.note && this.note.idItem) {
      idCompetence = this.note.idItem;
    } else if (this.temp) {
      idCompetence = this.temp.competences[this.tempIndexCompetence];
    } else if (this.projet) {
      idCompetence = this.projet.idCompetences[this.projetIndexCompetence];
    } else {
      return [];
    }
    console.info("listeCompetenceEnfant:idCompetence=" + idCompetence);
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
  constructor(private dialog: MatDialog, private lectureService: LectureService) { }

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
    } else if (this.projet && this.projet.idCompetences[this.projetIndexCompetence] !== this.idCompetenceRacine) {
      const competence = this.lectureService.getCompetence(this.projet.idCompetences[this.projetIndexCompetence]);
      if (competence && competence.parent) {
        this.projet.idCompetences[this.projetIndexCompetence] = competence.parent;
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

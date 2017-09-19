import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { EditionService } from '../service/edition.service';
import { LectureService } from '../service/lecture.service';
import { NoteService } from '../service/note.service';
import * as model from '../model/model';

import { DialogLigneTableauDeBordComponent } from './dialog-ligneTableauDeBord.component';

@Component({
  selector: 'tab-tableauDeBord', templateUrl: './tab-tableauDeBord.component.html',
  styleUrls: ['./tab-tableauDeBord.component.css']
})
export class TabTableauDeBordComponent {

  // Liste des filtres
  get eleves(): model.Eleve[] {
    return this.lectureService.getListeEleveActif();
  }
  get periodes(): model.Periode[] {
    return this.lectureService.getListePeriode();
  }

  // Valeur des filtres
  eleveSelectionne: model.Eleve;
  periodeSelectionnee: model.Periode;

  // Contenu du tableau de bord
  lignes: model.LigneTableauDeBord[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private noteService: NoteService, private editionService: EditionService, private dialog: MdDialog) { }

  // A la sélection d'un filtre
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
    this.rechargeLesLignes();
  }
  onSelectPeriode(periode: model.Periode) {
    this.periodeSelectionnee = periode;
    this.rechargeLesLignes();
  }

  // Pour recharger les lignes
  rechargeLesLignes() {
    if (this.eleveSelectionne && this.periodeSelectionnee) {
      this.lignes = this.noteService.calculerListeLigneTableauDeBord(this.eleveSelectionne, this.periodeSelectionnee);

    } else {
      this.lignes = [];
    }
  }

  // Ouverture de la popup d'édition à la sélection d'une ligne
  onSelectLigne(laLigne: model.LigneTableauDeBord) {
    const dialog = this.dialog.open(DialogLigneTableauDeBordComponent).componentInstance;
    dialog.ligne = laLigne;
  }

  // Pour créer une ligne
  creeNouvelleLigne() {
    const mapCompetences = this.lectureService.getMapCompetences();
    const dialog = this.dialog.open(DialogLigneTableauDeBordComponent).componentInstance;
    dialog.initialisePourUneSelectionDeDomaine(mapCompetences, this.eleveSelectionne.id, this.periodeSelectionnee);
  }
}

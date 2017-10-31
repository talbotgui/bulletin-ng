import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { NoteService } from '../service/note.service';
import { LectureService } from '../service/lecture.service';
import * as model from '../model/model';

@Component({
  selector: 'dialog-ligneTableauDeBord', templateUrl: './dialog-ligneTableauDeBord.component.html', styleUrls: ['./dialog-ligneTableauDeBord.component.css']
})
export class DialogLigneTableauDeBordComponent implements OnInit {

  @Input()
  ligne: model.LigneTableauDeBord;

  // Note utilisée pour sélectionner le domaine
  premiereNote: model.Note | undefined;

  get statutActivationSaisieConstat() {
    const nbSousLignesEvaluees = this.ligne.sousLignes.filter((sousLigne) => !!sousLigne.constatation).length;
    if (nbSousLignesEvaluees > 0) {
      return 'false';
    } else {
      return 'disabled';
    }
  }

  get statutActivationSaisieAide() {
    const nbSousLignesPreparees = this.ligne.sousLignes.filter((sousLigne) => !!sousLigne.aide).length;
    if (nbSousLignesPreparees > 0) {
      return 'false';
    } else {
      return 'disabled';
    }
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private noteService: NoteService, private lectureService: LectureService, private dialogRef: MatDialogRef<DialogLigneTableauDeBordComponent>) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    // Rien à faire
  }

  ajouterLigneProgrammeTravaille(): void {
    this.noteService.ajouteNoteDepuisTdb(this.ligne, false);
  }
  ajouterLigneProgrammeEvalue(): void {
    this.noteService.ajouteNoteDepuisTdb(this.ligne, true);
  }
  supprimerSousLigneProgrammeTravaille(sousLigne: model.SousLigneTableauDeBord): void {
    this.noteService.supprimeNoteDepuisTdb(this.ligne, sousLigne, false);
  }
  supprimerSousLigneProgrammeEvalue(sousLigne: model.SousLigneTableauDeBord): void {
    this.noteService.supprimeNoteDepuisTdb(this.ligne, sousLigne, true);
  }
  reporteSousLigneDansPeriodePreparee(sousLigne: model.SousLigneTableauDeBord): void {
    this.noteService.creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(this.ligne, sousLigne);
  }

  // méthode à appeler quand la popupup doit s'initialiser sur une ligne vide de note
  initialisePourUneSelectionDeDomaine(mapCompetences: Map<string, model.Competence>, idEleve: string, periodeEvaluee: model.Periode) {
    this.ligne = new model.LigneTableauDeBord(undefined, undefined, [], [], mapCompetences, idEleve, periodeEvaluee);
    this.premiereNote = new model.Note('', this.ligne.idEleve, '#');
  }
  // Validation du domaine sélectionner
  validerDomaine() {
    if (this.premiereNote && this.premiereNote.idItem) {
      const competenceSelectionnee = this.lectureService.getCompetence(this.premiereNote.idItem);
      if (competenceSelectionnee) {
        this.ligne.idDomaine = this.premiereNote.idItem;
        this.ligne.nomDomaine = competenceSelectionnee.text;
        this.premiereNote = undefined;
      }
    }
  }

  fermer() {
    this.dialogRef.close();
  }
}

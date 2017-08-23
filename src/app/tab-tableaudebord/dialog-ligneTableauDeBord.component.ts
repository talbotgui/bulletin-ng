import { Component, OnInit, Input } from '@angular/core';

import { SauvegardeService } from '../service/sauvegarde.service';
import { DataService } from '../service/data.service';
import * as model from '../model/model';

@Component({
  selector: 'dialog-ligneTableauDeBord', templateUrl: './dialog-ligneTableauDeBord.component.html', styleUrls: ['./dialog-ligneTableauDeBord.component.css']
})
export class DialogLigneTableauDeBordComponent implements OnInit {

  @Input()
  ligne: model.LigneTableauDeBord;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService, private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    // Rien à faire pour le moment
  }

  ajouterLigneProgrammeTravaille() {
    this.dataService.ajouteNoteDepuisTdb(this.ligne, false);
  }
  ajouterLigneProgrammeEvalue() {
    this.dataService.ajouteNoteDepuisTdb(this.ligne, true);
  }

}

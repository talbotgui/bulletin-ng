import {Component, OnInit} from '@angular/core';

import {EleveService} from '../service/eleve.service';
import * as model from '../model/model';

@Component({selector: 'tab-eleve', templateUrl: './tab-eleve.component.html', styleUrls: ['./tab-eleve.component.css']})
export class TabEleveComponent implements OnInit {

  // Liste des élèves à afficher
  eleves: model.Eleve[];

  // Elève en cours d'édition
  eleveSelectionne: model.Eleve;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private eleveService: EleveService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.eleves = this.eleveService.getListeEleve();
  }

  // A la sélection d'un élève
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
  }
}

import {Component, OnInit} from '@angular/core';
import {MdChipsModule} from '@angular/material';

import {DataService} from '../service/data.service';
import * as model from '../model/model';

@Component({selector: 'tab-eleve', templateUrl: './tab-eleve.component.html', styleUrls: ['./tab-eleve.component.css']})
export class TabEleveComponent implements OnInit {

  // Liste des élèves à afficher
  eleves: model.Eleve[];

  // Elève en cours d'édition
  eleveSelectionne: model.Eleve;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.eleves = this.dataService.getListeEleve();
  }

  // A la sélection d'un élève
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
  }
}

import {Component, OnInit} from '@angular/core';

import {DataService} from '../service/data.service';
import * as model from '../model/model';

@Component({selector: 'tab-eleve', templateUrl: './tab-eleve.component.html', styleUrls: ['./tab-eleve.component.css']})
export class TabEleveComponent implements OnInit {

  // Liste des élèves à afficher
  eleves: model.Eleve[];

  // Elève en cours d'édition
  eleveSelectionne: model.Eleve;

  // Map des status d'élève
  Object = Object;
  mapStatutEleve: Map<string, string>;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.eleves = this.dataService.getListeEleve();
    this.mapStatutEleve = this.dataService.getMapLibelleStatutEleveMap();
  }

  // A la sélection d'un élève
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
  }
}

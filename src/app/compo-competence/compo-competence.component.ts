import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../service/data.service';
import * as model from '../model/model';

@Component({ selector: 'compo-competence', templateUrl: './compo-competence.component.html', styleUrls: ['./compo-competence.component.css'] })
export class ComposantCompetenceeComponent implements OnInit {

  // id de compétence fourni en entrée
  @Input() idCompetence: string;

  // Compétence sélectionnée pour le moment
  competence: model.Competence;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    console.info("coucou : " + this.idCompetence);
    this.competence = new model.Competence();
    this.competence.text = this.idCompetence;
  }
}

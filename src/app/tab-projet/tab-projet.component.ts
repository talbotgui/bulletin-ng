import { Component, OnInit } from '@angular/core';

import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';
import * as model from '../model/model';

@Component({ selector: 'tab-projet', templateUrl: './tab-projet.component.html', styleUrls: ['./tab-projet.component.css'] })
export class TabProjetComponent implements OnInit {

  projet: model.Projet;
  projets: model.Projet[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.projets = this.lectureService.getListeProjets();
  }

  onSelectProjet(p: model.Projet): void {
    this.projet = p;
  }
  retirerCompetence(i: number): void {
    if (this.projet) {
      this.projet.idCompetences.splice(i, 1);
    }
  }
  ajouterCompetence(): void {
    if (this.projet) {
      this.projet.idCompetences.push('#');
    }
  }
  creerProjet(): void {
    this.projet = new model.Projet();
    this.projets.push(this.projet);
  }
}

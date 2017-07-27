import {Component, OnInit} from '@angular/core';

import * as model from '../model/model';
import {EleveService} from '../service/eleve.service';

export class Noeud {constructor(public id: string, public idParent: string, public name: string, public children: Noeud[]) {} }

@Component({selector: 'tab-competence', templateUrl: './tab-competence.component.html', styleUrls: ['./tab-competence.component.css']})
export class TabCompetenceComponent implements OnInit {

  // Noeuds à afficher
  noeuds = [];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private eleveService: EleveService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {

    // Récupère la liste des compétences
    const competences: model.Competence[] = this.eleveService.getListeCompetence();

    // Initialise une Map des TreeData pour retrouver les parents et y insérer les enfants
    const mapNoeuds: Map<string, Noeud> = new Map<string, Noeud>();

    // Pour chaque compétence, 
    for (let competence of competences) {

      // création du noeud et ajout dans la map
      const noeud: Noeud = new Noeud(competence.id, competence.parent, competence.text, null);
      mapNoeuds.set(competence.id, noeud);

      // Si c'est un noeud ROOT, on l'ajoute
      if (competence.parent === '#') {
        this.noeuds.push(noeud);
      }

      // Sinon on insert le noeud dans la liste des enfants de son parent
      else {
        const parent: Noeud = mapNoeuds.get(competence.parent);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(noeud);
        } else {
          console.error('Le parent n\'est pas déclaré avant l\'enfant dans le fichier de données');
        }

      }
    }
  }
}

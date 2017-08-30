import { Component, OnInit, ViewChild } from '@angular/core';

import { TreeComponent } from 'angular-tree-component';

import * as model from '../model/model';
import { DataService } from '../service/data.service';

export class Noeud { constructor(public id: string, public idParent: string, public name: string, public children: Noeud[]) { } }

@Component({ selector: 'tab-competence', templateUrl: './tab-competence.component.html', styleUrls: ['./tab-competence.component.css'] })
export class TabCompetenceComponent implements OnInit {

  // Filtre de recherche dans l'arbre
  filtre: string;

  // Noeuds à afficher
  noeuds: Noeud[] = [];

  // Instance de l'abre
  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {

    // Récupère la liste des compétences
    const competences: model.Competence[] = this.dataService.getListeCompetence();

    // Initialise une Map des TreeData pour retrouver les parents et y insérer les enfants
    const mapNoeuds: Map<string, Noeud> = new Map<string, Noeud>();

    // Pour chaque compétence,
    for (const competence of competences) {

      // création du noeud et ajout dans la map
      const noeud: Noeud = new Noeud(competence.id, competence.parent, competence.text, []);
      mapNoeuds.set(competence.id, noeud);

      // Si c'est un noeud ROOT, on l'ajoute
      if (competence.parent === '#') {
        this.noeuds.push(noeud);
      }

      // Sinon on insert le noeud dans la liste des enfants de son parent
      else {
        const parent: Noeud | undefined = mapNoeuds.get(competence.parent);
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

  recherche() {
    this.tree.treeModel.filterNodes(this.filtre, true);
  }
}

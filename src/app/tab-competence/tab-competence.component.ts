import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { TreeComponent } from 'angular-tree-component';

import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';

export class Noeud {
  data: any;
  constructor(public id: string, public idParent: string, public name: string, public children: Noeud[]) { }
}

@Component({ selector: 'tab-competence', templateUrl: './tab-competence.component.html', styleUrls: ['./tab-competence.component.css'] })
export class TabCompetenceComponent implements OnInit {

  // Compétence sélectionnnée
  libelleCompletCompetenceSelectionnee: string;

  // Noeuds à afficher
  noeuds: Noeud[] = [];

  // Filtre de recherche dans l'arbre
  private tmpfiltre: string;
  private motsDuFiltre: string[];

  set filtre(valeur: string) {
    this.tmpfiltre = valeur;
    if (valeur) {
      this.motsDuFiltre = valeur.toUpperCase().split(' ');
    }
  }
  get filtre() {
    return this.tmpfiltre;
  }

  // Instance de l'abre
  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private snackBar: MdSnackBar) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {

    // Récupère la liste des compétences
    const competences: model.Competence[] = this.lectureService.getListeCompetence();

    // Initialise une Map des TreeData pour retrouver les parents et y insérer les enfants
    const mapNoeuds: Map<string, Noeud> = new Map<string, Noeud>();

    // Pour chaque compétence,
    let presenceErreur: boolean = false;
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
          const message = 'ERREUR : la compétence \'' + competence.parent + '\' n\'est pas déclaré son enfant \'' + competence.id + '\'';
          console.error(message);
          presenceErreur = true;
        }
      }
    }

    // Si des erreurs de données sont présentes, affichage du snackBar
    if (presenceErreur) {
      this.snackBar.open('ERREUR dans les données. Taper F12 pour plus de détais', undefined, { duration: 30000 });
    }
  }

  recherche() {
    if (this.motsDuFiltre && this.motsDuFiltre[0].length > 3) {
      this.tree.treeModel.filterNodes(
        (node: Noeud) => {
          let resultat = true;
          if (this.motsDuFiltre && this.motsDuFiltre[0].length > 3 && node.data.name) {
            resultat = this.lectureService.compareLibelleCompetencePourRecherche(node.data.name.toUpperCase(), this.motsDuFiltre);
          }
          return resultat;
        }
      );
    }
  }

  onActivationDunNoeud(idCompetence: string): void {
    this.libelleCompletCompetenceSelectionnee = this.lectureService.getLibelleCompletCompetence(idCompetence);
  }
}

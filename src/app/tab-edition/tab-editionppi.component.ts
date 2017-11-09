import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utils } from '../service/utils';
import { LectureService } from '../service/lecture.service';
import { DataRepository } from '../service/data.repository';
import { NoteService } from '../service/note.service';
import { EditionService } from '../service/edition.service';
import * as model from '../model/model';

import { TabAbstractEditionComponent } from './tab-abstractedition.component';

@Component({ selector: 'tab-editionppi', templateUrl: './tab-editionppi.component.html', styleUrls: ['./tab-editionppi.component.css'] })
export class TabEditionPpiComponent extends TabAbstractEditionComponent {

  // Paramètres venant de la route
  idPeriode: number;
  idEleve: string;

  // Données à afficher
  lignes: model.LigneTableauDeBord[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private routeur: Router, route: ActivatedRoute, editionService: EditionService, private noteService: NoteService,
    private lectureService: LectureService, private dataRepository: DataRepository) {
    super(route, editionService);
  }

  // CSS à utiliser à l'impression (entete à 200px et titre à 600px pour impression en paysage dans chrome)
  getCssImpression() {
    return `.edition { font-size: 12px; }
    div.barre  { height:180px; }
    div.entete  { float:left; width:200px; }
    div.titre  { float:left; width:600px; text-align: center; }
    div.annee  { float:right; width:200px; text-align: right; padding-top:30px; }
    .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }
    .edition td,.edition th { border: solid 1px black!important; }`;
  }

  // Initialisation de l'édition
  initialiseEdition(params: { [key: string]: any }): void {

    // lecture des paramètres
    this.idEleve = params['idEleve'];
    this.idPeriode = parseInt(params['idPeriode'], 10);

    this.lignes = [];
    if (this.idEleve && this.idPeriode) {

      // Recherche des objets de référene
      const eleve = this.lectureService.getEleve(this.idEleve);
      const periode = this.lectureService.getPeriodeById(this.idPeriode);
      if (eleve && periode) {

        // Recalcul des lignes (pour qu'elles soient propres même après une édition directe depuis la popup du TDB)
        this.lignes = this.noteService.calculerListeLigneTableauDeBord(eleve, periode);

        // Ne pas imprimer les lignes qui n'ont pas de notes dans la période évaluée
        this.lignes = this.lignes.filter((ligne) => {

          ligne.sousLignes = ligne.sousLignes.filter((sousLigne) => !!sousLigne.constatation);

          // On affiche la ligne si il lui reste des sousLigne
          return ligne.sousLignes.length > 0;
        });

        // Préparation des données d'entête
        this.titre = 'PPI de ' + eleve.nom.toUpperCase() + ' ' + eleve.prenom;
        this.nomPeriode = periode.nom;
        const annee = this.dataRepository.getAnneeChargee();
        this.anneeScolaire = annee.anneeScolaire;
        this.entete = annee.enteteEdition;
      }
    }
  }

  retour() {
    this.routeur.navigateByUrl('/tab-tableaudebord-route/' + this.idEleve + '/' + this.idPeriode);
  }
}

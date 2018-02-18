import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utils } from '../service/utils';
import { LectureService } from '../service/lecture.service';
import { DataRepository } from '../service/data.repository';
import { NoteService } from '../service/note.service';
import { EditionService } from '../service/edition.service';
import * as model from '../model/model';

import { TabAbstractEditionComponent } from './tab-abstractedition.component';

@Component({ selector: 'tab-editionbilan', templateUrl: './tab-editionbilan.component.html', styleUrls: ['./tab-editionbilan.component.css'] })
export class TabEditionBilanComponent extends TabAbstractEditionComponent implements AfterViewInit {

  // Paramètres venant de la route
  idPeriode: number;
  idEleve: string;

  // Données à afficher
  eleve: model.Eleve;
  enseignant: string;
  periode: model.Periode;
  libellesNote: any;
  nbLibellesNote: number;
  lignes: model.LigneTableauDeBord[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private routeur: Router, route: ActivatedRoute, editionService: EditionService, private noteService: NoteService,
    private lectureService: LectureService, private dataRepository: DataRepository) {
    super(route, editionService);
  }

  // CSS à utiliser à l'impression
  // Modifier les hauteurs de 123px à 11px
  // Passer de calc(50% - 105px) à calc(50% - 126px)
  getCssImpression() {
    return `.edition { font-size: 12px; }
    .entete { width: 100%; height: 126px; margin-top: 5px }
    .entete > div { float: left; }
    .logoEN { margin-left: 10%; }
    .enteteEN { width: 30%; margin: 0px 10px; border: 1px solid; padding: 5px; height: 111px; }
    .designation { border: 1px solid; padding: 5px; height: 111px ; width: calc(50% - 126px); }
    .anneeScolaire { font-weight: bold; font-size: 1.2em; text-align: center; }
    .titre { clear: both; width: 80%; margin: 10px 10% 10px 10%; text-align: center; border: 1px solid; }
    .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }
    .edition td,.edition th { border: solid 1px black!important; }
    .edition table, tr, td, th { position: relative; padding: 3px; min-width: 10px; }
    th.text-vertical span { transform-origin: 0 50%; transform: rotate(-90deg);  white-space: nowrap;  display: block; position: absolute; bottom: 0; left: 50%;}`;
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

        // Alimentation des données à afficher
        this.eleve = eleve;
        this.periode = periode;

        // Recalcul des lignes (pour qu'elles soient propres) mais avec uniquement des lignes contenant des évaluations
        this.lignes = this.noteService.calculerListeLigneTableauDeBord(eleve, periode).filter((ligne) => {
          return ligne.sousLignes.filter((sousLigne) => !!sousLigne.constatation).length > 0;
        });

        // Préparation des données d'entête
        this.titre = 'Bilan de compétence - ' + eleve.nom.toUpperCase() + ' ' + eleve.prenom;
        this.nomPeriode = periode.nom;
        const annee = this.dataRepository.getAnneeChargee();
        this.anneeScolaire = annee.anneeScolaire;
        this.entete = annee.enteteEdition;
        this.enseignant = annee.enseignant;
        this.libellesNote = this.lectureService.getMapLibelleNote();
        this.nbLibellesNote = annee.mapLibelleNotesMap.size;
      }
    }
  }

  ngAfterViewInit(): void {
    // Recherche de la taille du libellé de note le plus long
    let nbCaracteresMaxDansLibelleNote = 1;
    this.dataRepository.getAnneeChargee().mapLibelleNotesMap.forEach((entree) => {
      if (nbCaracteresMaxDansLibelleNote < entree.length) {
        nbCaracteresMaxDansLibelleNote = entree.length;
      }
    });

    // Initialisation de la hauteur des THs
    const ths = document.getElementsByTagName('th');
    const hauteur = 5.2 * nbCaracteresMaxDansLibelleNote;
    ths[ths.length - 1].style.height = hauteur + 'px';
  }

  retour() {
    this.routeur.navigateByUrl('/tab-tableaudebord-route/' + this.idEleve + '/' + this.idPeriode);
  }
}

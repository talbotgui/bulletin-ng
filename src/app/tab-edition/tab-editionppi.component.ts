import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Utils } from '../service/utils';
import { LectureService } from '../service/lecture.service';
import { DataRepository } from '../service/data.repository';
import { NoteService } from '../service/note.service';
import { EditionService } from '../service/edition.service';
import * as model from '../model/model';

@Component({ selector: 'tab-editionppi', templateUrl: './tab-editionppi.component.html', styleUrls: ['./tab-editionppi.component.css'] })
export class TabEditionPpiComponent implements OnInit {

  // Paramètres venant de la route
  idPeriode: number;
  idEleve: string;

  // Données à afficher
  lignes: model.LigneTableauDeBord[];
  titreCourt: string;
  titre: string;
  anneeScolaire: string;
  nomPeriode: string;
  entete: string;

  // CSS à utiliser à l'impression (entete à 200px et titre à 600px pour impression en paysage dans chrome)
  private readonly CSS_IMPRESSION = `div.barre  { height:180px; }
  div.entete  { float:left; width:200px; }
  div.titre  { float:left; width:600px; text-align: center; }
  div.annee  { float:right; width:200px; text-align: right; padding-top:30px; }
  .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; font-size: 14px; }
  .edition td,.edition th { border: solid 1px black!important; }`;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private noteService: NoteService, private editionService: EditionService,
    private lectureService: LectureService, private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.route.params.subscribe((params) => {

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

          // Préparation des données d'entête
          this.titreCourt = 'PPI de ' + eleve.nom.toUpperCase() + ' ' + eleve.prenom;
          this.titre = this.titreCourt + ' pour la période ' + Utils.formatDate(periode.debut) + '-' + Utils.formatDate(periode.fin);
          this.nomPeriode = periode.nom;
          const annee = this.dataRepository.getAnneeChargee();
          this.anneeScolaire = annee.anneeScolaire;
          this.entete = annee.enteteEdition;
        }
      }
    });
  }

  imprimerLaPage(): void {
    const divs = document.getElementsByClassName('edition');
    if (divs && divs.length > 0) {
      this.editionService.creePageEtOuvrePopup(divs[0].outerHTML, this.CSS_IMPRESSION, this.titre);
    }
  }
}

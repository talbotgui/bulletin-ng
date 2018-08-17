import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utils } from '../service/utils';
import { LectureService } from '../service/lecture.service';
import { DataRepository } from '../service/data.repository';
import { NoteService } from '../service/note.service';
import { EditionService } from '../service/edition.service';
import * as model from '../model/model';

import { TabAbstractEditionComponent } from './tab-abstractedition.component';

@Component({ selector: 'tab-editionlisteeleve', templateUrl: './tab-editionlisteeleve.component.html', styleUrls: ['./tab-editionlisteeleve.component.css'] })
export class TabEditionListeEleveComponent extends TabAbstractEditionComponent {

  // Données à afficher
  listeEleves: model.Eleve[];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private routeur: Router, route: ActivatedRoute, editionService: EditionService,
    private lectureService: LectureService, private dataRepository: DataRepository) {
    super(route, editionService);
  }

  // CSS à utiliser à l'impression (entete à 200px et titre à 600px pour impression en paysage dans chrome)
  getCssImpression() {
    return `.edition { font-size: 12px; }
    .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }
    .edition td,.edition  th { border: solid 1px black!important; }
    .edition span.libelle { font-weight: bold; }
    div.entete  { float:left; width:200px; }
    div.titre  { float:left; width:600px; text-align: center; }
    div.annee  { float:right; width:200px; text-align: right; padding-top:30px; }
    div.breakafter { page-break-after: always; }`;
  }

  // Initialisation de l'édition
  initialiseEdition(params: { [key: string]: any }): void {

    // Recherche des objets à afficher
    this.listeEleves = this.lectureService.getListeEleve()
      .sort((a, b) => (a.nom + a.prenom).localeCompare(b.nom + b.prenom));

    // Préparation des données d'entête
    this.titre = 'Liste des élèves en date du ' + this.formatDate(new Date());
    const annee = this.dataRepository.getAnneeChargee();
    this.anneeScolaire = annee.anneeScolaire;
    this.entete = annee.enteteEdition;
  }

  formatDate(valeur: Date): string {
    return Utils.formatDate(valeur);
  }
  nettoieString(valeur: string): string {
    return Utils.nettoieString(valeur);
  }

  retour() {
    this.routeur.navigateByUrl('/tab-eleve-route/');
  }
}

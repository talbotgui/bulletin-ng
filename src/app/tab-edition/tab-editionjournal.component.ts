import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Utils } from '../service/utils';
import { LectureService } from '../service/lecture.service';
import { DataRepository } from '../service/data.repository';
import { NoteService } from '../service/note.service';
import { EditionService } from '../service/edition.service';
import * as model from '../model/model';

@Component({ selector: 'tab-editionjournal', templateUrl: './tab-editionjournal.component.html', styleUrls: ['./tab-editionjournal.component.css'] })
export class TabEditionJournalComponent implements OnInit {

  // Paramètres venant de la route
  dateJournal: Date;

  // Données à afficher
  journal: model.Journal;
  titre: string;
  anneeScolaire: string;
  nomPeriode: string;
  entete: string;

  // CSS à utiliser à l'impression (entete à 200px et titre à 600px pour impression en paysage dans chrome)
  private readonly CSS_IMPRESSION = `.edition { font-size: 12px; }
  div.barre  { height:180px; }
  div.entete  { float:left; width:200px; }
  div.titre  { float:left; width:600px; text-align: center; }
  div.annee  { float:right; width:200px; text-align: right; padding-top:30px; }
  .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }
  .edition td,.edition  th { border: solid 1px black!important; }
  td.commentaire ol { -webkit-margin-before: 0px!important; -webkit-margin-after: 0px!important; -webkit-padding-start: 20px!important }
  td.commentaire ul { -webkit-margin-before: 0px!important; -webkit-margin-after: 0px!important; -webkit-padding-start: 20px!important }
  td.commentaire { font-size: 14px; line-height: 14px; text-align: left; max-width: 50%; word-break: break-word; }
  td.eleves { font-size: 12px; line-height: 12px; }
  td.cadre { font-size: 12px; line-height: 12px; }
  div.remarques { border: solid 1px darkgrey; margin-bottom: 20px; }
  td.competences { font-size: 12px; max-width: 500px; }
  td.cahierJournalZoneEcriture { min-width: 300px; }
  td span { margin: 0px 15px; }`;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private editionService: EditionService,
    private lectureService: LectureService, private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      // lecture des paramètres
      this.dateJournal = new Date();
      this.dateJournal.setTime(parseInt(params['timeJournal'], 10));

      if (this.dateJournal) {

        // Recherche des objets de référene
        const journal = this.lectureService.getJournal(this.dateJournal);
        if (journal) {
          this.journal = journal;

          // Préparation des données d'entête
          this.titre = 'Journal du ' + Utils.formatDate(this.dateJournal, true);
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

  getPrenomEleve(idEleve: string): string {
    const eleve = this.lectureService.getEleve(idEleve);
    if (eleve) {
      return eleve.prenom;
    } else {
      return '';
    }
  }
  getLibelleCompetence(idCompetence: string): string {
    return this.lectureService.getLibelleCompletCompetence(idCompetence);
  }
}

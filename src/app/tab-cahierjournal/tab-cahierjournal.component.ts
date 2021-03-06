import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { DialogDuplicationComponent } from './dialog-duplication.component';
import { DialogSelectionProjet } from '../tab-projet/dialog-selectionProjet.component';

import { LectureService } from '../service/lecture.service';
import { JournalService } from '../service/journal.service';
import { EditionService } from '../service/edition.service';
import * as model from '../model/model';

@Component({ selector: 'tab-cahierjournal', templateUrl: './tab-cahierjournal.component.html', styleUrls: ['./tab-cahierjournal.component.css'] })
export class TabCahierJournalComponent implements OnInit {

  // La configuration de l'éditeur (@see https://docs.ckeditor.com/#!/api/CKEDITOR.config)
  configCkEditor = {
    defaultLanguage: 'fr', height: '100px',
    toolbarGroups: [{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }, { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] }]
  };
  configCkEditorTemps = {
    extraPlugins: 'divarea', height: '100px',
    defaultLanguage: 'fr',
    toolbarGroups: [{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }, { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] }]
  };

  // Liste des heures pour la sélection de l'heure de début et de fin des temps
  tempsDisponibles: string[] = [];

  // Liste des types de temps
  typesDeTemps: string[] = [];

  // Liste des élèves
  get eleves(): model.Eleve[] {
    return this.lectureService.getListeEleveActif();
  }

  // Filtre de date
  dateJournal: Date;
  get timeJournal() {
    return this.dateJournal.getTime();
  }

  // journal en cours d'édition
  journal?: model.Journal;

  // Flag utilisé pour éviter la modification d'un journal du passé
  forceEditionJournalDuPasse: boolean = false;
  get journalEditable(): boolean {
    return !this.journalDuPasse || this.forceEditionJournalDuPasse;
  }
  get journalDuPasse(): boolean {
    if (this.journal) {
      return this.journal.date < new Date();
    } else {
      return false;
    }
  }
  forcerEditionDunJournalDuPasse() {
    this.forceEditionJournalDuPasse = true;
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private lectureService: LectureService,
    private journalService: JournalService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {

    // Date par défaut : aujourd'hui
    this.dateJournal = new Date();
    this.dateJournal.setHours(0, 0, 0, 0);
    this.onChangementDateJournal();

    // Initialisation des DropDown
    for (let i = 9; i < 18; i++) {
      this.tempsDisponibles.push(i + 'h00');
      this.tempsDisponibles.push(i + 'h15');
      this.tempsDisponibles.push(i + 'h30');
      this.tempsDisponibles.push(i + 'h45');
    }
    this.typesDeTemps = this.lectureService.getlisteTypeDeTemps();

    this.route.params.subscribe((params: { [key: string]: any }) => {
      // lecture des paramètres
      const timeJournal = params['timeJournal'];

      // Si des paramètres sont présents, initialisation des filtres
      if (timeJournal) {
        this.dateJournal = new Date();
        this.dateJournal.setTime(parseInt(timeJournal, 10));
        this.onChangementDateJournal();
      }
    });
  }

  onChangementDateJournal() {
    this.journal = this.lectureService.getJournal(this.dateJournal);
    this.forceEditionJournalDuPasse = false;
  }

  creerJournal() {
    this.journal = this.journalService.ajouterJournal(this.dateJournal);
  }

  ajouterOuSupprimerEleve(temps: model.Temps, idEleve: string) {
    if (!this.journalEditable) {
      return;
    }
    const index = temps.eleves.indexOf(idEleve);
    if (index !== -1) {
      temps.eleves.splice(index, 1);
    } else {
      temps.eleves.push(idEleve);
    }
  }

  ajouterTemps() {
    if (this.journal) {
      if (!this.journal.temps) {
        this.journal.temps = [];
      }
      this.journal.temps.push(new model.Temps());
    }
  }

  retirerTemp(index: number) {
    if (this.journal) {
      this.journal.temps.splice(index, 1);
    }
  }

  ajouterCompetence(temps: model.Temps) {
    temps.competences.push('#');
  }

  ajouterCompetenceDepuisProjet(temps: model.Temps) {
    const dialog = this.dialog.open(DialogSelectionProjet).componentInstance;
    dialog.onSelectionEmitter.subscribe((projet: model.Projet) => {
      if (projet && projet.idCompetences) {

        let nbAjoutees = 0;
        projet.idCompetences.forEach((idCompetence: string) => {
          if (temps.competences.indexOf(idCompetence) === -1) {
            temps.competences.push(idCompetence);
            nbAjoutees++;
          }
        });

        const message = nbAjoutees + ' compétences ajoutées depuis les ' + projet.idCompetences.length + ' compétences du projet \'' + projet.nom + '\'';
        this.snackBar.open(message, undefined, { duration: 3000 });
      }
    });
  }

  retirerCompetence(temps: model.Temps, index: number) {
    temps.competences.splice(index, 1);
  }

  deplacerTemps(index: number, delta: number) {
    if (this.journal) {
      const index2 = index + delta;
      const temp = this.journal.temps[index2];
      this.journal.temps[index2] = this.journal.temps[index];
      this.journal.temps[index] = temp;
    }
  }

  demandeDuplicationJournal(): void {
    if (this.journal) {
      const dialog = this.dialog.open(DialogDuplicationComponent, { height: '200px', width: '400px' }).componentInstance;
      dialog.journal = this.journal;
    }
  }

  demandeDuplicationTemps(temps: model.Temps): void {
    if (this.journal) {
      const dialog = this.dialog.open(DialogDuplicationComponent, { height: '200px', width: '400px' }).componentInstance;
      dialog.journal = this.journal;
      dialog.temps = temps;
    }
  }

  changeDate(delta: number) {
    const nouvelleDate = new Date();
    nouvelleDate.setTime(this.dateJournal.getTime() + (delta * 1000 * 3600 * 24));
    nouvelleDate.setHours(0, 0, 0, 0);
    this.dateJournal = nouvelleDate;
    this.onChangementDateJournal();
  }
}

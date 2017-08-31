import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';
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
  eleves: model.Eleve[] = [];

  // Filtre de date
  dateJournal: Date;

  // journal en cours d'édition
  journal?: model.Journal;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService, private editionService: EditionService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    for (let i = 9; i < 18; i++) {
      this.tempsDisponibles.push(i + 'h00');
      this.tempsDisponibles.push(i + 'h15');
      this.tempsDisponibles.push(i + 'h30');
      this.tempsDisponibles.push(i + 'h45');
    }
    this.typesDeTemps = this.dataService.getlisteTypeDeTemps();
    this.eleves = this.dataService.getListeEleveActif();
  }

  onChangementDateJournal() {
    this.journal = this.dataService.getJournal(this.dateJournal);
  }
  creerJournal() {
    this.journal = this.dataService.ajouterJournal(this.dateJournal);
  }
  ajouterOuSupprimerEleve(temps: model.Temps, idEleve: string) {
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

  impression(): void {
    if (this.journal) {
      this.editionService.editionJournal(this.journal);
    }
  }
}

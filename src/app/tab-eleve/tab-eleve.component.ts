import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';
import * as model from '../model/model';

@Component({ selector: 'tab-eleve', templateUrl: './tab-eleve.component.html', styleUrls: ['./tab-eleve.component.css'] })
export class TabEleveComponent implements OnInit {

  // La configuration de l'éditeur (@see https://docs.ckeditor.com/#!/api/CKEDITOR.config)
  configCkEditor = {
    defaultLanguage: 'fr', width: '900px',
    toolbarGroups: [{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }, { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] }]
  };

  // Liste des élèves à afficher
  get eleves(): model.Eleve[] {
    return this.lectureService.getListeEleve();
  }

  // Elève en cours d'édition
  eleveSelectionne: model.Eleve;

  // Map des status d'élève
  Object = Object;
  mapStatutEleve: Map<string, string>;

  /** Bidouille très moche pour remplacer le DatePicker de material qui ne fonctionne pas avec l'i18n et dans un form */
  get dateNaissanceEleveSelectionne(): string | undefined {
    if (this.eleveSelectionne && this.eleveSelectionne.dateNaissance) {
      return this.formatDate(this.eleveSelectionne.dateNaissance);
    } else {
      return undefined;
    }
  }

  /** Bidouille très moche pour remplacer le DatePicker de material qui ne fonctionne pas avec l'i18n et dans un form */
  set dateNaissanceEleveSelectionne(value: string | undefined) {
    if (this.eleveSelectionne && value && value.length === 10) {
      const str = value.split('/');
      this.eleveSelectionne.dateNaissance = new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
    }
  }

  /** Bidouille très moche pour remplacer le DatePicker de material qui ne fonctionne pas avec l'i18n et dans un form */
  get dateAdmissionEleveSelectionne(): string | undefined {
    if (this.eleveSelectionne && this.eleveSelectionne.dateAdmission) {
      return this.formatDate(this.eleveSelectionne.dateAdmission);
    } else {
      return undefined;
    }
  }

  /** Bidouille très moche pour remplacer le DatePicker de material qui ne fonctionne pas avec l'i18n et dans un form */
  set dateAdmissionEleveSelectionne(value: string | undefined) {
    if (this.eleveSelectionne && value && value.length === 10) {
      const str = value.split('/');
      this.eleveSelectionne.dateAdmission = new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
    }
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private lectureService: LectureService, private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.mapStatutEleve = this.lectureService.getMapLibelleStatutEleveMap();

    this.route.params.subscribe((params: { [key: string]: any }) => {
      // lecture des paramètres
      const idEleve = params['idEleve'];

      // Si des paramètres sont présents, initialisation des filtres
      if (idEleve) {
        const eleve = this.lectureService.getEleve(idEleve);
        if (eleve) {
          this.eleveSelectionne = eleve;
        }
      }
    });
  }

  // A la sélection d'un élève
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
  }

  creerEleve(): void {
    this.dataRepository.getAnneeChargee().eleves.push(new model.Eleve(model.ModelUtil.getUID(), 'Nouvel', 'Eleve'));
  }

  ajouterCursus(): void {
    let anneeSuivante = this.eleveSelectionne.dateNaissance.getFullYear();
    if (!this.eleveSelectionne.cursus) {
      this.eleveSelectionne.cursus = [];
    } else if (this.eleveSelectionne.cursus.length > 0) {
      anneeSuivante = this.eleveSelectionne.cursus[this.eleveSelectionne.cursus.length - 1].annee + 1;
    }
    const nouveauCursus = new model.Cursus();
    nouveauCursus.annee = anneeSuivante;
    this.eleveSelectionne.cursus.push(nouveauCursus);
  }

  retirerCursus(cursus: model.Cursus): void {
    const index = this.eleveSelectionne.cursus.indexOf(cursus);
    if (0 <= index && index < this.eleveSelectionne.cursus.length) {
      this.eleveSelectionne.cursus.splice(index, 1);
    }
  }

  private formatDate(date?: Date): string {
    if (date) {
      const j = this.formatNumber(date.getDate());
      const m = this.formatNumber(date.getMonth() + 1);
      const y = date.getFullYear();
      return j + '/' + m + '/' + y;
    } else {
      return '';
    }
  }
  private formatNumber(n: number): string {
    if (n < 10) {
      return '0' + n;
    } else {
      return '' + n;
    }
  }
}

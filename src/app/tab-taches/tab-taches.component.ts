import { Component } from '@angular/core';

import { LectureService } from '../service/lecture.service';
import { TacheService } from '../service/tache.service';
import * as model from '../model/model';

@Component({ selector: 'tab-taches', templateUrl: './tab-taches.component.html', styleUrls: ['./tab-taches.component.css'] })
export class TabTachesComponent {

  nouvelleTache: model.Tache | undefined;

  get taches(): model.Tache[] {
    return this.lectureService.getListeTaches();
  }

  constructor(private lectureService: LectureService, private tacheService: TacheService) { }

  annulerCreerTache(): void {
    this.nouvelleTache = undefined;
  }

  creerTache(): void {
    this.nouvelleTache = new model.Tache('', []);
  }

  dupliquer(tache: model.Tache): void {
    this.nouvelleTache = this.tacheService.dupliquerTache(tache);
  }

  supprimer(tache: model.Tache): void {
    this.tacheService.supprimerTache(tache);
  }

  ajouterLaNouvelleTache(): void {
    if (this.nouvelleTache) {
      this.tacheService.ajouterTache(this.nouvelleTache);
      this.annulerCreerTache();
    }
  }

  editer(tache: model.Tache): void {
    this.nouvelleTache = tache;
  }

  ajouterEcheance(): void {
    if (this.nouvelleTache) {
      this.nouvelleTache.echeances.push(new model.Echeance('', new Date()));
    }
  }

  calculeAvancement(tache: model.Tache): string {
    if (tache.echeances) {
      const nbEcheancesTerminees = tache.echeances.filter((el: model.Echeance) => el.termine).length;
      return nbEcheancesTerminees + '/' + tache.echeances.length;
    } else {
      return '';
    }
  }
  calculeProchaineEcheance(tache: model.Tache): Date | undefined {
    if (tache.echeances) {
      const listeTrieeFiltree = tache.echeances.filter((el: model.Echeance) => !el.termine)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      if (listeTrieeFiltree.length > 0) {
        return listeTrieeFiltree[listeTrieeFiltree.length - 1].date;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

}

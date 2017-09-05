import { Component } from '@angular/core';

import { LectureService } from '../service/lecture.service';
import { TacheService } from '../service/tache.service';
import * as model from '../model/model';

@Component({ selector: 'tab-taches', templateUrl: './tab-taches.component.html', styleUrls: ['./tab-taches.component.css'] })
export class TabTachesComponent {

  nouvelleTache: model.Tache | undefined;

  get taches(): model.Tache[] {
    return this.lectureService.getListeTaches().sort((a: model.Tache, b: model.Tache) => a.compareTo(b));
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

  supprimerTache(tache: model.Tache): void {
    this.tacheService.supprimerTache(tache);
  }

  changeEcheance(echeance: model.Echeance, valeur: boolean, event: any): void {
    echeance.termine = valeur;
    const carte = event.target.parentNode.parentNode.parentNode;
    carte.className = carte.className + ' flash';
    setTimeout(() => carte.className = carte.className.replace('flash', ''), 500);
  }

  supprimerEcheance(tache: model.Tache, echeance: model.Echeance): void {
    if (!!tache && !!echeance) {
      const index = tache.echeances.indexOf(echeance);
      if (0 <= index && index < tache.echeances.length) {
        tache.echeances.splice(index, 1);
      }
    }
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
}

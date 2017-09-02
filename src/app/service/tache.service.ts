import { Injectable } from '@angular/core';

import { DataRepository } from './data.repository';
import { LectureService } from './lecture.service';
import * as model from '../model/model';

@Injectable()
export class TacheService {

  constructor(private dataRepository: DataRepository, private lectureService: LectureService) { }

  supprimerTache(tache: model.Tache): void {
    const taches = this.lectureService.getListeTaches();
    const i = taches.indexOf(tache);
    if (i !== -1) {
      taches.splice(i, 1);
    }
  }

  ajouterTache(tache: model.Tache): void {
    this.lectureService.getListeTaches().push(tache);
  }

  /** Duplication d'une tâche sans l'ajouter !! */
  dupliquerTache(tache: model.Tache): model.Tache {
    const echeances: model.Echeance[] = [];
    for (const eche of tache.echeances) {
      echeances.push(new model.Echeance(eche.nom, eche.date));
    }
    return new model.Tache('Copie de ' + tache.titre, echeances);
  }
}

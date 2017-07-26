import {Injectable} from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class EleveService {

  /** Données chargées et en cours d'édition */
  private anneeChargee: model.Annee;

  /** Initialisation des données chargées et en cours d'édition. */
  setAnneeChargee(annee: model.Annee): void {
    this.anneeChargee = annee;
  }

  /** Donne la liste complète des élèves */
  getListeEleve(): model.Eleve[] {
    if (this.anneeChargee) {
      return this.anneeChargee.eleves;
    } else {
      return [];
    }
  }
}

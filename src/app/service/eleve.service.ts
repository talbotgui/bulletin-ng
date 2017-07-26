import {Injectable} from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class EleveService {

  private anneeChargee: model.Annee;

  setAnneeChargee(annee: model.Annee): void {
    this.anneeChargee = annee;
  }

  getListeEleve(): model.Eleve[] {
    if (this.anneeChargee) {
      return this.anneeChargee.eleves;
    } else {
      return [];
    }
  }
}

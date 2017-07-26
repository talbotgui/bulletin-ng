import {Injectable} from '@angular/core';

import * as model from '../model/model';

@Injectable()
export class EleveService {

  getListeEleve(): model.Eleve[] {
    let eleves: model.Eleve[] = new Array<model.Eleve>();
    eleves.push(new model.Eleve('1', 'TBT', 'G'));
    eleves.push(new model.Eleve('2', 'TBT', 'M'));
    return eleves;
  }
}

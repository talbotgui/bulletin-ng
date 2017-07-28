import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import {DialogChargementComponent} from './dialog-chargement.component';
import {DataService} from '../service/data.service';

@Component({selector: 'div-sauvegarde', templateUrl: './div-sauvegarde.component.html'})
export class DivSauvegardeComponent {

  constructor(public dialog: MdDialog, private dataService: DataService) {}

  // A la demande de chargement d'un fichier
  ouvreDialogChargement() {
    this.dialog.open(DialogChargementComponent, {height: '180px', width: '350px'});
  }

  get anneeChargee() {
    return this.dataService.isAnneeChargee();
  }
}

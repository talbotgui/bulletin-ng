import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import {DialogChargementComponent} from './dialog-chargement.component';

@Component({selector: 'div-sauvegarde', templateUrl: './div-sauvegarde.component.html'})
export class DivSauvegardeComponent {

  constructor(public dialog: MdDialog) {}

  // A la demande de chargement d'un fichier
  ouvreDialogChargement() {
    this.dialog.open(DialogChargementComponent, {height: '180px', width: '350px'});
  }

}

import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import {DialogChargementComponent} from './dialog-chargement.component';
import {DataService} from '../service/data.service';
import {SauvegardeService} from '../service/sauvegarde.service';

@Component({selector: 'div-sauvegarde', templateUrl: './div-sauvegarde.component.html'})
export class DivSauvegardeComponent {

  constructor(public dialog: MdDialog, private dataService: DataService, private sauvegardeService: SauvegardeService) {}

  // A la demande de chargement d'un fichier
  ouvreDialogChargement() {
    this.dialog.open(DialogChargementComponent, {height: '180px', width: '350px'});
  }

  // A la demande de sauvegarde
  ouvreDialogSauvegarde() {
    this.sauvegardeService.sauvegardeAnneeDansFichier();
  }

  // Condition d'affichage des boutons
  get anneeChargee() {
    return this.dataService.isAnneeChargee();
  }
}

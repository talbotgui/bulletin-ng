import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DialogChargementComponent } from './dialog-chargement.component';
import { DialogSauvegardeComponent } from './dialog-sauvegarde.component';
import { DataService } from '../service/data.service';
import { SauvegardeService } from '../service/sauvegarde.service';

@Component({ selector: 'div-sauvegarde', templateUrl: './div-sauvegarde.component.html' })
export class DivSauvegardeComponent {

  constructor(
    public dialog: MdDialog, private dataService: DataService,
    private sauvegardeService: SauvegardeService
  ) { }

  // A la demande de chargement d'un fichier
  ouvreDialogChargement() {
    this.dialog.open(DialogChargementComponent, { height: '245px', width: '350px' });
  }

  // A la demande de sauvegarde
  ouvreDialogSauvegarde() {
    this.dialog.open(DialogSauvegardeComponent, { height: '145px', width: '350px' });
  }

  // Condition d'affichage des boutons
  get anneeChargee() {
    return this.dataService.isAnneeChargee();
  }
}

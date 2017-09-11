import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DialogChargementComponent } from './dialog-chargement.component';
import { DialogSauvegardeComponent } from './dialog-sauvegarde.component';
import { DataRepository } from '../service/data.repository';
import { SauvegardeService } from '../service/sauvegarde.service';

@Component({ selector: 'div-sauvegarde', templateUrl: './div-sauvegarde.component.html' })
export class DivSauvegardeComponent {

  get messageSauvegarde() {
    let mess = this.sauvegardeService.getDateDerniereSauvegardeDeLaSession();
    if (!mess) {
      mess = { message: '', date: undefined };
    }
    return mess;
  }

  constructor(public dialog: MdDialog, private dataRepository: DataRepository, private sauvegardeService: SauvegardeService) { }

  // A la demande de chargement d'un fichier
  ouvreDialogChargement() {
    this.dialog.open(DialogChargementComponent, { height: '380px', width: '400px' });
  }

  // A la demande de sauvegarde
  ouvreDialogSauvegarde() {
    this.dialog.open(DialogSauvegardeComponent, { height: '220px', width: '350px' });
  }

  // Condition d'affichage des boutons
  get anneeChargee() {
    return this.dataRepository.isAnneeChargee();
  }
}

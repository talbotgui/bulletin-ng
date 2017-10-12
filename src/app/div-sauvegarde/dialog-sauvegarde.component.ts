import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SauvegardeService } from '../service/sauvegarde.service';

@Component({ selector: 'dialog-sauvegarde', templateUrl: './dialog-sauvegarde.component.html' })
export class DialogSauvegardeComponent {

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService, private dialogRef: MatDialogRef<DialogSauvegardeComponent>) { }

  // A la demande de sauvegarde sur le serveur
  onSauvegardeServeur() {
    this.sauvegardeService.sauvegardeAnneeSurServeur();
    this.dialogRef.close();
  }
  // A la demande de sauvegarde par téléchargement d'un fichier local
  onSauvegardeLocale() {
    this.sauvegardeService.sauvegardeAnneeParTelechargement();
    this.dialogRef.close();
  }
}

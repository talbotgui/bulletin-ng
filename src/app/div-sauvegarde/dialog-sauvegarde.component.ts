import { Component } from '@angular/core';
import {saveAs} from 'file-saver';
import { SauvegardeService } from '../service/sauvegarde.service';

@Component({ selector: 'dialog-sauvegarde', templateUrl: './dialog-sauvegarde.component.html' })
export class DialogSauvegardeComponent {

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService) { }

  // A la demande de sauvegarde sur le serveur
  onSauvegardeServeur() {
    this.sauvegardeService.sauvegardeAnneeDansFichier();
  }
  // A la demande de sauvegarde par téléchargement d'un fichier local
  onSauvegardeLocale() {
    // Création du blob et du nom de fichier
    const resultat = this.sauvegardeService.sauvegardeAnneeDansUnBlob();

    // Appel à saveAs pour déclencher le téléchargement dans le navigateur
    saveAs(resultat.blob, resultat.nomFichier);
  }
}

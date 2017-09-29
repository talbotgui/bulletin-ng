import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialogRef } from '@angular/material';

import { SauvegardeService } from '../service/sauvegarde.service';

@Component({ selector: 'dialog-chargement', templateUrl: './dialog-chargement.component.html', styleUrls: ['./dialog-chargement.component.css'] })
export class DialogChargementComponent implements OnInit {

  // Liste des fichier disponibles
  fichiers: string[];

  // Fichier sélectionné
  fichierSelectionne: string;

  // Données chargées depuis le chargement local
  jsonChargeDepuisFichierLocal: string;
  nomFichierLocal: string;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService, private snackBar: MdSnackBar, private dialogRef: MdDialogRef<DialogChargementComponent>) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.sauvegardeService.getlisteSauvegardesDuServeur().subscribe(
      (val) => {
        this.fichiers = val.fichiers
          .filter((element) => element.toUpperCase().endsWith('JSON'))
          .sort((a, b) => b.localeCompare(a));
      }
    );
  }

  onSelectFichierLocal(event: any) {
    const input = event.target;

    // Lecture des données sur les navigateurs HTML5
    const fr = new FileReader();
    fr.onloadend = (e: any) => {
      this.jsonChargeDepuisFichierLocal = e.target['result'];
    };
    fr.readAsText(input.files[0]);
    this.nomFichierLocal = event.srcElement.value.substring(event.srcElement.value.lastIndexOf('/') + event.srcElement.value.lastIndexOf('\\') + 2);
  }

  // A la demande d'annulation
  onDemandeAnnulation() {
    this.dialogRef.close();
  }

  // A la demande de chargement
  onDemandeChargement() {
    // Si les deux ont été demandé
    if (!!this.fichierSelectionne && !!this.jsonChargeDepuisFichierLocal) {
      const message = 'Impossible de sélectionner les deux sources de données !!';
      this.snackBar.open(message, undefined, { duration: 3000, extraClasses: ['avertissement'] });
    }
    // Si c'est un chargement local
    else if (this.jsonChargeDepuisFichierLocal) {
      this.sauvegardeService.chargeAnneeDepuisText(this.nomFichierLocal, this.jsonChargeDepuisFichierLocal);
      this.dialogRef.close();
    }
    // Si c'est un chargement depuis le serveur
    else {
      this.sauvegardeService.chargeAnneeDuFichier(this.fichierSelectionne);
      this.dialogRef.close();
    }
  }
}

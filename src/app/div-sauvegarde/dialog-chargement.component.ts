import {Component, OnInit} from '@angular/core';

import {SauvegardeService} from '../service/sauvegarde.service';

@Component({selector: 'dialog-chargement', templateUrl: './dialog-chargement.component.html'})
export class DialogChargementComponent implements OnInit {

  // Liste des fichier disponibles
  fichiers: String[];

  // Fichier sélectionné
  fichierSelectionne: String;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.sauvegardeService.getlisteSauvegardesDuServeur().subscribe((val) => {
      this.fichiers = val.fichiers;
    });
  }

  // A la sélection d'un fichier
  onSelectFichier() {
    this.sauvegardeService.chargeAnneeDuFichier(this.fichierSelectionne);
  }
}

import {Component, OnInit} from '@angular/core';

import {SauvegardeService} from '../service/sauvegarde.service';

@Component({
  selector: 'dialog-chargement', templateUrl: './dialog-chargement.component.html', styleUrls: ['./dialog-chargement.component.css']
})
export class DialogChargementComponent implements OnInit {

  // Liste des fichier disponibles
  fichiers: string[];

  // Fichier sélectionné
  fichierSelectionne: string;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.sauvegardeService.getlisteSauvegardesDuServeur().subscribe((val) => {
      this.fichiers = val.fichiers
        .filter(element => element.toUpperCase().endsWith('JSON'))
        .sort((a, b) => b.localeCompare(a))
        .slice(2, val.fichiers.length);
    });
  }

  // A la sélection d'un fichier
  onSelectFichier() {
    this.sauvegardeService.chargeAnneeDuFichier(this.fichierSelectionne);
  }
}

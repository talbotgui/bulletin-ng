import { Component, OnInit } from '@angular/core';

import { SauvegardeService } from '../service/sauvegarde.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'dialog-chargement', templateUrl: './dialog-chargement.component.html', styleUrls: ['./dialog-chargement.component.css']
})
export class DialogChargementComponent implements OnInit {

  // Liste des fichier disponibles
  fichiers: string[];

  // Fichier sélectionné
  fichierSelectionne: string;

  // Données chargées depuis le chargement local
  private jsonChargeDepuisFichierLocal = null;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService, private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.sauvegardeService.getlisteSauvegardesDuServeur().subscribe((val) => {
      this.fichiers = val.fichiers
        .filter((element) => element.toUpperCase().endsWith('JSON'))
        .sort((a, b) => b.localeCompare(a));
    });
  }

  onSelectFichierLocal(event: any) {
    const input = event.target;

    // Lecture des données sur les navigateurs HTML5
    const fr = new FileReader();
    fr.onloadend = (e) => {
      this.jsonChargeDepuisFichierLocal = e.target['result'];
    };
    fr.readAsText(input.files[0]);
  }

  // A la validation du formulaire
  onDemandeChargement() {
    // Si c'est un chargement local
    if (this.jsonChargeDepuisFichierLocal) {
      this.sauvegardeService.chargeAnneeDepuisText(this.jsonChargeDepuisFichierLocal);
    } else {
      this.sauvegardeService.chargeAnneeDuFichier(this.fichierSelectionne);
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { SauvegardeService } from '../service/sauvegarde.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'dialog-chargement', templateUrl: './dialog-chargement.component.html', styleUrls: ['./dialog-chargement.component.css']
})
export class DialogChargementComponent implements OnInit {

  // Nom du dernier fichier sauvegardé sur ce browser
  get nomDernierFichierSauvegarde(): string {
    const nomDernierFichier = this.sauvegardeService.getNomDernierFichierSauvegardeDansBrowser();
    if (nomDernierFichier) {
      return nomDernierFichier;
    } else {
      return '';
    }
  }
  // Liste des fichier disponibles
  fichiers: string[];

  // Fichier sélectionné
  fichierSelectionne: string;

  // Données chargées depuis le chargement local
  jsonChargeDepuisFichierLocal: string;
  nomFichierLocal: string;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService, private dataService: DataService) { }

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

  // A la validation du formulaire
  onDemandeChargement() {
    // Si c'est un chargement local
    if (this.jsonChargeDepuisFichierLocal) {
      this.sauvegardeService.chargeAnneeDepuisText(this.nomFichierLocal, this.jsonChargeDepuisFichierLocal);
    } else {
      this.sauvegardeService.chargeAnneeDuFichier(this.fichierSelectionne);
    }
  }
}

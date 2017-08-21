import { Component, OnInit } from '@angular/core';

import { SauvegardeService } from './service/sauvegarde.service';
import { DataService } from './service/data.service';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {

  constructor(private sauvegardeService: SauvegardeService, private dataService: DataService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    // Si le parametre 'offline' est présent, informe le service de ne pas accéder au réseau
    if (window.location.toString().indexOf('offline') > -1) {
      this.sauvegardeService.travailleHorsReseau();
    }
  }

  // Condition d'affichage des onglets
  get anneeChargee() {
    return this.dataService.isAnneeChargee();
  }

}

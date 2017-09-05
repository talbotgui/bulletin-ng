import { Component, OnInit } from '@angular/core';

import { SauvegardeService } from './service/sauvegarde.service';
import { DataRepository } from './service/data.repository';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {

  constructor(private sauvegardeService: SauvegardeService, private dataRepository: DataRepository) { }

  // Appel au Repository à l'initialisation du composant
  ngOnInit(): void {
    // Si le parametre 'offline' est présent, informe le Repository de ne pas accéder au réseau
    if (window.location.toString().indexOf('offline') > -1) {
      this.sauvegardeService.travailleHorsReseau();
    }

    // En cas de demande de raffraissement avec une année chargée
    window.onbeforeunload = () => {
      let resultat;
      if (this.dataRepository.isAnneeChargee() && window.location.toString().indexOf('sansAlerte') > -1) {
        resultat = 'Etes-vous certains de vouloir quitter cette page ? Avez-vous bien sauvegarder votre travail ?';
      }
      return resultat;
    };
  }

  get anneeChargee() {
    return this.dataRepository.isAnneeChargee();
  }
  get anneChargeeOuSansDonnees() {
    return this.anneeChargee || window.location.href.indexOf('aide') !== -1 || window.location.href.indexOf('accueil') !== -1;
  }
}

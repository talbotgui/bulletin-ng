import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EditionService } from '../service/edition.service';

export abstract class TabAbstractEditionComponent implements OnInit {

  // Données communes à afficher dans toutes les éditions
  titre: string;
  anneeScolaire: string;
  nomPeriode: string;
  entete: string;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private editionService: EditionService) { }

  abstract getCssImpression(): string;
  abstract initialiseEdition(params: { [key: string]: any }): void;

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: any }) => {
      this.initialiseEdition(params);
    });
  }

  imprimerLaPage(): void {
    const divs = document.getElementsByClassName('edition');
    if (divs && divs.length > 0) {
      this.editionService.creePageEtOuvrePopup(divs[0].outerHTML, this.getCssImpression(), this.titre);
    }
  }

}

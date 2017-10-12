import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DataRepository } from '../service/data.repository';

@Component({ selector: 'div-selecteurstyle', templateUrl: './div-selecteurstyle.component.html' })
export class DivSelecteurStyleComponent implements OnInit {

  constructor(private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    // Pour initialiser le theme au démarrage de l'application
    this.dataRepository.setThemeSelectionne(this.dataRepository.getThemeSelectionne());
  }

  set themeSelectionne(value: string) {
    this.dataRepository.setThemeSelectionne(value);
  }
  get themeSelectionne() {
    return this.dataRepository.getThemeSelectionne();
  }
}

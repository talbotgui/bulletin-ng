import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DataRepository } from '../service/data.repository';

@Component({ selector: 'div-selecteurstyle', templateUrl: './div-selecteurstyle.component.html' })
export class DivSelecteurStyleComponent {

  constructor(private dataRepository: DataRepository) {
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

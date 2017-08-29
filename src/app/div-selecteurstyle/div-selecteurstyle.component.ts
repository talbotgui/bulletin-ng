import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DataService } from '../service/data.service';

@Component({ selector: 'div-selecteurstyle', templateUrl: './div-selecteurstyle.component.html' })
export class DivSelecteurStyleComponent {

  constructor(private dataService: DataService) {
    // Pour initialiser le theme au démarrage de l'application
    this.dataService.setThemeSelectionne(this.dataService.getThemeSelectionne());
  }

  set themeSelectionne(value: string) {
    this.dataService.setThemeSelectionne(value);
  }
  get themeSelectionne() {
    return this.dataService.getThemeSelectionne();
  }
}

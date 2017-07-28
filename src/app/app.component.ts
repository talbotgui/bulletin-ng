import {Component} from '@angular/core';

import {DataService} from './service/data.service';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {

  constructor(private dataService: DataService) {}

  // Condition d'affichage des onglets
  get anneeChargee() {
    return this.dataService.isAnneeChargee();
  }

}

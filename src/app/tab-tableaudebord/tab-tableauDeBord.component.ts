import {Component, OnInit} from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Rx';

import {DataService} from '../service/data.service';
import * as model from '../model/model';

@Component({
  selector: 'tab-tableauDeBord', templateUrl: './tab-tableauDeBord.component.html',
  styleUrls: ['./tab-tableauDeBord.component.css']
})
export class TabTableauDeBordComponent implements OnInit {

  // Liste des filtres
  eleves: model.Eleve[];
  periodes: model.Periode[];

  // Valeur des filtres
  eleveSelectionne: model.Eleve;
  periodeSelectionnee: model.Periode;

  // Contenu du tableau de bord
  colonnes = ['nomDomaine'];
  dataSource: MyDataSource;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataService: DataService) {}

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.eleves = this.dataService.getListeEleveActif();
    this.periodes = this.dataService.getListePeriode();
  }

  // A la sélection d'un filtre
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
    this.rechargeLesLignes();
  }
  onSelectPeriode(periode: model.Periode) {
    this.periodeSelectionnee = periode;
    this.rechargeLesLignes();
  }
  rechargeLesLignes() {
    if (this.eleveSelectionne && this.periodeSelectionnee) {
      this.dataSource = new MyDataSource(this.dataService.getListeLigneTableauDeBord(this.eleveSelectionne, this.periodeSelectionnee));

    } else {
      this.dataSource = new MyDataSource([]);
    }
  }

}
export class MyDataSource extends DataSource<any> {
  constructor(private lignes: model.LigneTableauDeBord[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any> {
    return Observable.of(this.lignes);
  }

  disconnect() {}
}

# Bulletin



# Quelques astuces Angular à retenir :

Dans une interpolation, pour naviguer sans risque : unObjet?.unAttributPotentiellementUndefined
'?.' est le Safe Navigation Operator.

Two way binding :
* [ngModel]="monAttribut" si la valeur change dans le JS, le DOM est mis à jour
* (ngModel)="monAttribut" si le DOM change, la valeur du JS est mise à jour

Exemple de binding :
<div [style.background-color]="getStyle()">

Événement : 
* déclencher du code : (click)="auClick()"
* récupérer l'event : (click)="auClick($event)"

Dirty checking :
* @Component {..., changeDetection: ChangeDetectionStrategy.Default, ...} => tout changement est pris en compte dans le composant
* @Component {..., changeDetection: ChangeDetectionStrategy.OnPush,  ...} => seul les @Input sont raffraichis

Pipes :
* date, currency, decimal, uppercase, lowercase, slice (slice:start:end), i18nSelect, i18nPlural, percent, json, async
* exemple : {{dateNaissance | date:"dd/MM/yy"}}
* exemple : <li *ngFor="let i of collection | slice:1:3">{{i}}</li> 
* exemple : {{monAttribut | async"}} pour se lier à un Observable et être notifié
* exemple : {{note.valeur | i18nSelect: libellesNote}} avec libellesNote une Map<string, string>

# Documentation Angular CLI :
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve`.

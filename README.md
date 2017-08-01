# Bulletin



# Quelques astuces Angular à retenir :

Au besoin, pour réinstaller Angular/cli : npm install -g @angular/cli --no-optional

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
* exemple : {{note.valeur | i18nSelect: libellesNote}} avec libellesNote un Objet {'clef1':'valeur1','clef2':'valeur2'} et non une Map<string, string>

Constante :
* à déclarer dans providers: [..., {provide: 'maConstante', useValue:'azertyuiop'}, ...]
* à utiliser dans constructor(..., @Inject('maConstante') public maConstante, ...)

Interfaces implémentables dans un composant : OnInit, AfterContentInit

Exemple de directive : pour logger le clic sur tous un ensemble de boutons
* <button [track]="unBouton">coucou</button>
* @Directive({selector: '[track]'}) export class TrackDirective {
  @Input() track;
  @HostListener('click')
  onClick(){ console.log(this.track); }
}

Pour faire des checkbox dans un *ngFor :
<div *ngFor="let aze of azes">
  <input [id]="aze", name="monChamp" ngModel [value]="aze" type="radio"></input>
  <label [attr.for]="aze">{{aze}}</label>
</div>

Ajouter remplacer ngModel par [ngModel]="azes[0]" pour définir une valeur par défaut
  
Créer une variable locale à la page HTML (sans lien avec un attribut du composant) : #toto="NgForm" ou #toto="NgModel"

Validation de formulaire :
* il faut un form avec les attributs novalidate et #toto="ngForm"
* l'attribut 'required' sur les champs obligatoires
* une div avec le message d'erreur (pristine = inchangé) : <div [hidden]="inputNom.valid || inputNom.pristine" class="alert alert-danger">Le nom est obligatoire</div>

Pour la validation des radios, c'est l'input qui est invalide et le label est à coté. Astuce CSS : .ng-invalid + label:after { content:'sélectionne en un'; }

Faire une boucle *ngFor et avoir l'index : *ngFor="let aze of azes; let i=index"

Afficher/masquer un élément :
* *ngIf supprime l'élément du DOM
* [hidden] change la valeur de l'attribut display (none/block)

Dans les tests, si l'erreur "Uncaught NetworkError: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'ng:///DynamicTestModule/ComposantNoteComponent.ngfactory.js'. thrown" survient, c'est un problème de données/objets non fournits en entrée d'un composant.
Par exemple : un composant appel un mock dans le onInit mais le mock a été 'reset' et ne renvoie rien.

# Documentation Angular CLI :
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve`.

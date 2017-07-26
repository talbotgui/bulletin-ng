// Les modules Angular importés
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Tous les composants applicatifs de l'application
import {AppComponent} from './app.component';
import {TabCompetenceComponent} from './tab-competence/tab-competence.component';
import {TabEleveComponent} from './tab-eleve/tab-eleve.component';

// Les composants injectables

// Le composant contenant les routes
import {AppRoutingModule} from './app-routing.module';

// Déclaration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [AppComponent, TabCompetenceComponent, TabEleveComponent],

  // Les composants injectables
  providers: [],

  // Les modules importés
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpModule,

    // Déclaration des routes
    AppRoutingModule
  ]
})
export class AppModule {}

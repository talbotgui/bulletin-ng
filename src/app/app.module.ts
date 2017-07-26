// Les modules Angular importés
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule, MdSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import de hammer (cf. documentation)
import 'hammerjs';

// Tous les composants applicatifs de l'application
import {AppComponent} from './app.component';
import {TabCompetenceComponent} from './tab-competence/tab-competence.component';
import {TabEleveComponent} from './tab-eleve/tab-eleve.component';
import {SauvegardeComponent} from './sauvegarde/sauvegarde.component';

// Les composants injectables
import {EleveService} from './service/eleve.service';
import {SauvegardeService} from './service/sauvegarde.service';

// Le composant contenant les routes
import {AppRoutingModule} from './app-routing.module';

// D�claration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [AppComponent, TabCompetenceComponent, TabEleveComponent, SauvegardeComponent],

  // Les composants injectables
  providers: [EleveService, SauvegardeService],

  // Les modules import�s
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpClientModule,

    // Le module des composants WEB riches
    MaterialModule, BrowserAnimationsModule, MdSelectModule,

    // D�claration des routes
    AppRoutingModule
  ]
})
export class AppModule {}

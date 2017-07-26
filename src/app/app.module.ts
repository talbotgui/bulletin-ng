// Les modules Angular import�s
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Tous les composants applicatifs de l'application
import {AppComponent} from './app.component';
import {TabCompetenceComponent} from './tab-competence/tab-competence.component';
import {TabEleveComponent} from './tab-eleve/tab-eleve.component';

// Les composants injectables
import {EleveService} from './service/eleve.service';

// Le composant contenant les routes
import {AppRoutingModule} from './app-routing.module';

// D�claration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [AppComponent, TabCompetenceComponent, TabEleveComponent],

  // Les composants injectables
  providers: [EleveService],

  // Les modules import�s
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpModule,

    // D�claration des routes
    AppRoutingModule
  ]
})
export class AppModule {}

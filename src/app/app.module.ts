// Les modules Angular importés
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TreeModule } from 'angular-tree-component';
import { MapValuesPipe, AttributesToMapPipe } from './pipes.component';

// Import de hammer (cf. documentation)
import 'hammerjs';

// Tous les composants applicatifs de l'application
import { AppComponent } from './app.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { DivSauvegardeComponent } from './div-sauvegarde/div-sauvegarde.component';
import { DialogChargementComponent } from './div-sauvegarde/dialog-chargement.component';
import { DialogSauvegardeComponent } from './div-sauvegarde/dialog-sauvegarde.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { ComposantNoteComponent } from './compo-note/compo-note.component';
import { ComposantCompetenceeComponent } from './compo-competence/compo-competence.component';
import { DialogLigneTableauDeBordComponent } from './tab-tableaudebord/dialog-ligneTableauDeBord.component';

// Les composants injectables
import { DataService } from './service/data.service';
import { SauvegardeService } from './service/sauvegarde.service';

// Le composant contenant les routes
import { AppRoutingModule } from './app-routing.module';

// D�claration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [AppComponent, TabCompetenceComponent, TabEleveComponent, DivSauvegardeComponent,
    DialogChargementComponent, DialogSauvegardeComponent, TabTableauDeBordComponent, ComposantNoteComponent,
    MapValuesPipe, AttributesToMapPipe, DialogLigneTableauDeBordComponent, ComposantCompetenceeComponent,
    TabCahierJournalComponent
  ],

  // Tous les composants à afficher dans un Dialog
  entryComponents: [DialogChargementComponent, DialogSauvegardeComponent, DialogLigneTableauDeBordComponent],

  providers: [
    // Paramétrage global
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    // Les composants injectables
    DataService, SauvegardeService
  ],

  // Les modules import�s
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpClientModule,

    // Le module des composants WEB riches
    MaterialModule, BrowserAnimationsModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, TreeModule, CdkTableModule,

    // Déclaration des routes
    AppRoutingModule
  ]
})
export class AppModule { }

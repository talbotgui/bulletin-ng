// Les modules Angular importés
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, MD_PLACEHOLDER_GLOBAL_OPTIONS, DateAdapter } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CKEditorModule } from 'ng2-ckeditor';
import { TreeModule } from 'angular-tree-component';
import { MapValuesPipe, AttributesToMapPipe } from './pipes.component';

// Import de hammer (cf. documentation)
import 'hammerjs';

// Tous les composants applicatifs de l'application
import { AppComponent } from './app.component';
import { ComposantCompetenceeComponent } from './compo-competence/compo-competence.component';
import { ComposantNoteComponent } from './compo-note/compo-note.component';
import { DialogChargementComponent } from './div-sauvegarde/dialog-chargement.component';
import { DialogLigneTableauDeBordComponent } from './tab-tableaudebord/dialog-ligneTableauDeBord.component';
import { DialogSauvegardeComponent } from './div-sauvegarde/dialog-sauvegarde.component';
import { DivSauvegardeComponent } from './div-sauvegarde/div-sauvegarde.component';
import { DivSelecteurStyleComponent } from './div-selecteurstyle/div-selecteurstyle.component';
import { TabAideComponent } from './tab-aide/tab-aide.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { TabTachesComponent } from './tab-taches/tab-taches.component';

// Les composants injectables
import { MyDateAdapter } from './dateformat.component';
import { DataService } from './service/data.service';
import { EditionService } from './service/edition.service';
import { SauvegardeService } from './service/sauvegarde.service';

// Le composant contenant les routes
import { AppRoutingModule } from './app-routing.module';

// Déclaration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [AppComponent, TabCompetenceComponent, TabEleveComponent, DivSauvegardeComponent,
    DialogChargementComponent, DialogSauvegardeComponent, TabTableauDeBordComponent, ComposantNoteComponent,
    MapValuesPipe, AttributesToMapPipe, DialogLigneTableauDeBordComponent, ComposantCompetenceeComponent,
    TabCahierJournalComponent, DivSelecteurStyleComponent, TabAideComponent, TabTachesComponent
  ],

  // Tous les composants à afficher dans un Dialog
  entryComponents: [DialogChargementComponent, DialogSauvegardeComponent, DialogLigneTableauDeBordComponent],

  providers: [
    // Paramétrage global
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DateAdapter, useClass: MyDateAdapter },
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } },

    // Les composants injectables
    DataService, SauvegardeService, EditionService
  ],

  // Les modules importés
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpClientModule,

    // Le module des composants WEB riches
    MaterialModule, BrowserAnimationsModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, TreeModule, CKEditorModule,

    // Déclaration des routes
    AppRoutingModule
  ]
})
export class AppModule { }

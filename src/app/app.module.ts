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

// Tous les composants applicatifs de l'application
import { AppComponent } from './app.component';
import { ComposantCompetenceeComponent } from './compo-competence/compo-competence.component';
import { ComposantNoteComponent } from './compo-note/compo-note.component';
import { ComposantMessageSauvegardeComponent } from './div-sauvegarde/compo-messagesauvegarde.component';
import { DialogChargementComponent } from './div-sauvegarde/dialog-chargement.component';
import { DialogCompetenceFullTextComponent } from './compo-competence/dialog-competencefulltext.component';
import { DialogDuplicationComponent } from './tab-cahierjournal/dialog-duplication.component';
import { DialogLigneTableauDeBordComponent } from './tab-tableaudebord/dialog-ligneTableauDeBord.component';
import { DialogSauvegardeComponent } from './div-sauvegarde/dialog-sauvegarde.component';
import { DivSauvegardeComponent } from './div-sauvegarde/div-sauvegarde.component';
import { DivSelecteurStyleComponent } from './div-selecteurstyle/div-selecteurstyle.component';
import { TabAccueilComponent } from './tab-accueil/tab-accueil.component';
import { TabAideComponent } from './tab-aide/tab-aide.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEditionPpiComponent } from './tab-edition/tab-editionppi.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { TabTachesComponent } from './tab-taches/tab-taches.component';

// Les composants injectables
import { DataRepository } from './service/data.repository';
import { EditionService } from './service/edition.service';
import { JournalService } from './service/journal.service';
import { LectureService } from './service/lecture.service';
import { NoteService } from './service/note.service';
import { SauvegardeService } from './service/sauvegarde.service';
import { TacheService } from './service/tache.service';
import { MyDateAdapter } from './dateformat.component';

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
    TabCahierJournalComponent, DivSelecteurStyleComponent, TabAideComponent, TabTachesComponent, DialogDuplicationComponent,
    TabAccueilComponent, DialogCompetenceFullTextComponent, ComposantMessageSauvegardeComponent, TabEditionPpiComponent
  ],

  // Tous les composants à afficher dans un Dialog
  entryComponents: [DialogChargementComponent, DialogSauvegardeComponent, DialogLigneTableauDeBordComponent,
    DialogDuplicationComponent, DialogCompetenceFullTextComponent],

  providers: [
    // Paramétrage global
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DateAdapter, useClass: MyDateAdapter },
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } },

    // Les composants injectables
    DataRepository, EditionService, JournalService, LectureService, NoteService, SauvegardeService, TacheService

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

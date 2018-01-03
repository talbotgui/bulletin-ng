import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tous les composants applicatifs de l'application
import { TabAccueilComponent } from './tab-accueil/tab-accueil.component';
import { TabAideComponent } from './tab-aide/tab-aide.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEditionBilanComponent } from './tab-edition/tab-editionbilan.component';
import { TabEditionEleveComponent } from './tab-edition/tab-editioneleve.component';
import { TabEditionJournalComponent } from './tab-edition/tab-editionjournal.component';
import { TabEditionPpiComponent } from './tab-edition/tab-editionppi.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { TabNouvelleAnneeComponent } from './tab-nouvelleannee/tab-nouvelleannee.component';
import { TabProjetComponent } from './tab-projet/tab-projet.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { TabTachesComponent } from './tab-taches/tab-taches.component';

const routes: Routes = [
  // pour rediriger par défaut sur le dashboard
  { path: '', redirectTo: '/tab-accueil-route', pathMatch: 'full' },
  { path: 'tab-accueil-route', component: TabAccueilComponent },
  { path: 'tab-competence-route', component: TabCompetenceComponent },
  { path: 'tab-editioneleve-route/:idEleve', component: TabEditionEleveComponent },
  { path: 'tab-editionjournal-route/:timeJournal', component: TabEditionJournalComponent },
  { path: 'tab-editionppi-route/:idEleve/:idPeriode', component: TabEditionPpiComponent },
  { path: 'tab-editionbilan-route/:idEleve/:idPeriode', component: TabEditionBilanComponent },
  { path: 'tab-eleve-route/:idEleve', component: TabEleveComponent },
  { path: 'tab-eleve-route', component: TabEleveComponent },
  { path: 'tab-tableaudebord-route/:idEleve/:idPeriode', component: TabTableauDeBordComponent },
  { path: 'tab-tableaudebord-route', component: TabTableauDeBordComponent },
  { path: 'tab-journal-route/:timeJournal', component: TabCahierJournalComponent },
  { path: 'tab-journal-route', component: TabCahierJournalComponent },
  { path: 'tab-nouvelleAnnee-route', component: TabNouvelleAnneeComponent },
  { path: 'tab-projet-route', component: TabProjetComponent },
  { path: 'tab-taches-route', component: TabTachesComponent },
  { path: 'tab-aide-route', component: TabAideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

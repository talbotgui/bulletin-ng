import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tous les composants applicatifs de l'application
import { TabAccueilComponent } from './tab-accueil/tab-accueil.component';
import { TabAideComponent } from './tab-aide/tab-aide.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { TabTachesComponent } from './tab-taches/tab-taches.component';

const routes: Routes = [
  // pour rediriger par défaut sur le dashboard
  { path: '', redirectTo: '/tab-accueil-route', pathMatch: 'full' },
  { path: 'tab-accueil-route', component: TabAccueilComponent },
  { path: 'tab-competence-route', component: TabCompetenceComponent },
  { path: 'tab-eleve-route', component: TabEleveComponent },
  { path: 'tab-tableaudebord-route', component: TabTableauDeBordComponent },
  { path: 'tab-journal-route', component: TabCahierJournalComponent },
  { path: 'tab-taches-route', component: TabTachesComponent },
  { path: 'tab-aide-route', component: TabAideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

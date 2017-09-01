import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tous les composants applicatifs de l'application
import { TabAideComponent } from './tab-aide/tab-aide.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { TabTachesComponent } from './tab-taches/tab-taches.component';

const routes: Routes = [
  // pour rediriger par défaut sur le dashboard
  { path: '', redirectTo: '/tab-eleve-route', pathMatch: 'full' },
  { path: 'tab-competence-route', component: TabCompetenceComponent },
  { path: 'tab-eleve-route', component: TabEleveComponent },
  { path: 'tab-tableaudebord-route', component: TabTableauDeBordComponent },
  { path: 'tab-journal-route', component: TabCahierJournalComponent },
  { path: 'tab-aide-route', component: TabAideComponent },
  { path: 'tab-taches-route', component: TabTachesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

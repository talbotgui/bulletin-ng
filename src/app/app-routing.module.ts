import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Tous les composants applicatifs de l'application

import {TabCompetenceComponent} from './tab-competence/tab-competence.component';
import {TabEleveComponent} from './tab-eleve/tab-eleve.component';
import {TabTableauDeBordComponent} from './tab-tableaudebord/tab-tableauDeBord.component';

const routes: Routes = [
  // pour rediriger par défaut sur le dashboard
  {path: '', redirectTo: '/tab-eleve-route', pathMatch: 'full'},
  {path: 'tab-competence-route', component: TabCompetenceComponent},
  {path: 'tab-eleve-route', component: TabEleveComponent},
  {path: 'tab-tableaudebord-route', component: TabTableauDeBordComponent}
  //  {path: 'tab-eval-route', component: TabCompetenceComponent},
  //  {path: 'tab-bull-route', component: TabCompetenceComponent},
  //  {path: 'tab-ppi-route', component: TabCompetenceComponent},
  //  {path: '/tab-jour-route', component: TabCompetenceComponent},
  //  {path: 'tab-histo-route', component: TabCompetenceComponent},
  //  {path: 'tab-rentree-route', component: TabCompetenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

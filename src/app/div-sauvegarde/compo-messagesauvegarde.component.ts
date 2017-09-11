import { Component } from '@angular/core';

import { SauvegardeService } from '../service/sauvegarde.service';

@Component({
  selector: 'compo-messagesauvegarde',
  templateUrl: './compo-messagesauvegarde.component.html',
  styleUrls: ['./compo-messagesauvegarde.component.css']
})
export class ComposantMessageSauvegardeComponent {

  // Nom des derniers fichiers sauvegardés sur ce browser
  get nomsDerniersFichiersSauvegardes(): { nomFichierEnLocal: string | null, nomFichierSurServeur: string | null } {
    return this.sauvegardeService.getNomsDerniersFichiersSauvegardesDansBrowser();
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService) { }
}

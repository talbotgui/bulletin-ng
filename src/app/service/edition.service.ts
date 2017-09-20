import { Injectable } from '@angular/core';

import { Utils } from './utils';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';

@Injectable()
export class EditionService {

    private static popupOuverte: Window;

    constructor(private dataRepository: DataRepository, private lectureService: LectureService) { }

    creePageEtOuvrePopup(contenu: string, styleCss: string, titre: string): void {
        const page = `
        <!DOCTYPE html>
        <html moznomarginboxes mozdisallowselectionprint>
         <head>
          <meta charset=\'UTF-8\' />
          <title>` + titre + `</title>
          <style type=\'text/css\' media=\'print\'> @page { margin-top: 0px; margin-bottom: 0px; } </style>
          <style>` + styleCss + `</style>
         </head>
         <body>` + contenu + `
         </body>
        </html>`;
        this.ouvrePopup(page, titre);
    }

    private ouvrePopup(contenu: string, titre: string): void {

        // Si la popup est déjà ouverte, on la ferme
        if (EditionService.popupOuverte) {
            EditionService.popupOuverte.close();
        }

        // Ouverture d'une popup
        EditionService.popupOuverte = window.open(window.location.href, titre);
        if (!EditionService.popupOuverte) {
            alert('Merci d\'accepter les popups pour cette page puis de relancer l\'édition');
        }

        // Remplissage de la popup
        EditionService.popupOuverte.document.write(contenu);
        EditionService.popupOuverte.document.close();
    }
}

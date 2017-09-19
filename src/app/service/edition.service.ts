import { Injectable } from '@angular/core';

import { Utils } from './utils';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';

@Injectable()
export class EditionService {

    private static popupOuverte: Window;

    constructor(private dataRepository: DataRepository, private lectureService: LectureService) { }

    editionJournal(journal: model.Journal): void {

        const titre: string = 'Cahier journal du ' + Utils.formatDate(journal.date, true);

        let contenu = '<!DOCTYPE html>';
        // suppression des header/footer sur FF
        contenu += '<html moznomarginboxes mozdisallowselectionprint>';
        contenu += ' <head>';
        contenu += '  <meta charset=\'UTF-8\' />';
        contenu += '  <title>' + titre + '</title>';
        // suppression des header/footer sur Chrome
        contenu += '  <style type=\'text/css\' media=\'print\'> @page { size: landscape; margin-top: 0px; margin-bottom: 0px; } </style>';
        contenu += '  <style type=\'text/css\'>';
        contenu += '   .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }';
        contenu += '   .edition td,.edition  th { border: solid 1px black!important; }';
        contenu += '   .editionJournal h1 { padding-top: 15px; }';
        contenu += '   td.commentaire ol { -webkit-margin-before: 0px!important; -webkit-margin-after: 0px!important; -webkit-padding-start: 20px!important }';
        contenu += '   td.commentaire ul { -webkit-margin-before: 0px!important; -webkit-margin-after: 0px!important; -webkit-padding-start: 20px!important }';
        contenu += '   td.commentaire { font-size: 14px; line-height: 14px; text-align: left; max-width: 50%; word-break: break-word; }';
        contenu += '   td.eleves { font-size: 12px; line-height: 12px; }';
        contenu += '   td.cadre { font-size: 12px; line-height: 12px; }';
        contenu += '   div.remarques { border: solid 1px darkgrey; margin-bottom: 20px; }';
        contenu += '   td.competences { font-size: 12px; max-width: 500px; }';
        contenu += '   td.cahierJournalZoneEcriture { min-width: 300px; }';
        contenu += '   td span { margin: 0px 15px; }';
        contenu += '  </style>';
        contenu += ' </head>';
        contenu += ' <body>';
        contenu += '  <div id=\'all\' class=\'edition editionJournal\'>';
        contenu += '   <div><h1>' + titre + '</h1></div>';
        contenu += '   <div class="remarques"><u>Remarques :</u> ' + journal.remarque + '</div>';
        contenu += '   <table class=\'tablesorter-blue\'>';
        contenu += '    <thead>';
        contenu += '    <tr><th>Cadre</th><th>Eleves</th><th>Compétences</th><th>Commentaire</th><th>Notes manuscrites</th></tr>';
        contenu += '    </thead>';
        contenu += '    <tbody>';
        for (const temp of journal.temps) {
            if (!temp.nom && !temp.debut && !temp.fin && !temp.type) {
                continue;
            }
            contenu += ' <tr>';
            contenu += '  <td class="cadre">' + temp.nom + '<br/><br/><i>' + temp.type + '</i><br/><br/>De ' + temp.debut + '<br/>A ' + temp.fin + '<br/></td>';
            contenu += '  <td class="eleves">';
            for (const idEleve of temp.eleves) {
                const eleve = this.lectureService.getEleve(idEleve);
                if (eleve) {
                    contenu += '<span class=\'nowrap\'>' + eleve.prenom + '</span><br/>';
                }
            }
            contenu += '  </td>';
            contenu += '  <td class="competences">';
            let i = 0;
            for (const comp of temp.competences) {
                if (i !== 0) {
                    contenu += '<br/><br/>';
                }
                contenu += this.lectureService.getLibelleCompletCompetence(comp);
                i++;
            }
            contenu += '  </td>';
            contenu += '  <td class="commentaire">' + temp.commentaire + '</td>';
            contenu += '  <td class=\'cahierJournalZoneEcriture\'></td>';
            contenu += ' </tr>';
        }
        contenu += '    </tbody>';
        contenu += '   </table>';
        contenu += '  </div>';
        contenu += ' </body>';
        contenu += '</html>';

        // Ouverture
        this.ouvrePopup(contenu, titre);
    }

    creePageEtOuvrePopup(contenu: string, styleCss: string, titre: string): void {
        let page = '<!DOCTYPE html><html moznomarginboxes mozdisallowselectionprint><head><meta charset=\'UTF-8\' /><title>' + titre + '</title>';
        page = page + '<style type=\'text/css\' media=\'print\'> @page { margin-top: 0px; margin-bottom: 0px; } </style><style>' + styleCss + '</style></head>';
        page = page + '<body>' + contenu + '</body></html>';
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

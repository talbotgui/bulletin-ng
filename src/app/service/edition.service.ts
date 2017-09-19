import { Injectable } from '@angular/core';

import { Utils } from './utils';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';

@Injectable()
export class EditionService {

    private static popupOuverte: Window;

    constructor(private dataRepository: DataRepository, private lectureService: LectureService) { }

    editionEleve(eleve: model.Eleve): void {

        const titre: string = 'FicheEleve de ' + eleve.nom.toUpperCase() + ' ' + eleve.prenom;

        let contenu = '<!DOCTYPE html>';
        // suppression des header/footer sur FF
        contenu += '<html moznomarginboxes mozdisallowselectionprint>';
        contenu += ' <head>';
        contenu += '  <meta charset=\'UTF-8\' />';
        contenu += '  <title>' + titre + '</title>';
        // suppression des header/footer sur Chrome
        contenu += '  <style type=\'text/css\' media=\'print\'> @page { margin-top: 0px; margin-bottom: 0px; } </style>';
        contenu += '  <style type=\'text/css\'>';
        contenu += '   .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }';
        contenu += '   .edition td,.edition  th { border: solid 1px black!important; }';
        contenu += '   .editionEleve span { font-weight: bold; }';
        contenu += '   .editionEleve-identite { width: 50%; height: 250px; font-size: 30px; }';
        contenu += '   .editionEleve-dates { width: 50%; }';
        contenu += '   .editionEleve-pere, .editionEleve-mere, .editionEleve-fratrie, .editionEleve-accueil { width: 25%; }';
        contenu += '   .editionEleve-datesPPA, .editionEleve-datesPAP, .editionEleve-datesESS { width: 33%; }';
        contenu += '   .editionEleve-cursus th { background: none!important; }';
        contenu += '   .editionEleve-bilan { border: solid 1px black; font-family: Lucida Grande,Lucida Sans,Arial,sans-serif; font-size: 13.2px; }';
        contenu += '   </style>';
        contenu += ' </head>';
        contenu += ' <body>';
        contenu += '  <div id=\'all\' class=\'edition editionEleve\'>';
        contenu += '   <table>';
        contenu += '    <tr>';
        contenu += '     <td rowspan=\'2\' class=\'editionEleve-identite\'>' + eleve.nom.toUpperCase() + ' ' + eleve.prenom + '</td>';
        contenu += '     <td class=\'editionEleve-dates\'>';
        contenu += '      <span>Date de naissance : </span>' + Utils.formatDate(eleve.dateNaissance) + '<br/>';
        contenu += '      <span>Date d\'admission : </span>' + Utils.formatDate(eleve.dateAdmission);
        contenu += '     </td>';
        contenu += '    </tr>';
        contenu += '    <tr>';
        contenu += '     <td class=\'editionEleve-contacts\'>';
        contenu += '      <span>Adresses :</span><br/>' + Utils.nettoieString(eleve.adresses) + '<br/><br/>';
        contenu += '      <span>Téléphones : </span><br/>' + Utils.nettoieString(eleve.telephones);
        contenu += '     </td>';
        contenu += '    </tr>';
        contenu += '   </table>';
        contenu += '   <br/>';
        contenu += '   <table>';
        contenu += '    <tr>';
        contenu += '     <td class=\'editionEleve-pere\'><span>Père :</span><br/>' + Utils.nettoieString(eleve.pere) + '</td>';
        contenu += '     <td class=\'editionEleve-mere\'><span>Mère :</span><br/>' + Utils.nettoieString(eleve.mere) + '</td>';
        contenu += '     <td class=\'editionEleve-fratrie\'><span>Fratrie :</span><br/>' + Utils.nettoieString(eleve.fratrie) + '</td>';
        contenu += '     <td class=\'editionEleve-accueil\'><span>Informations complémentaires :</span><br/>' + Utils.nettoieString(eleve.accueil) + '</td>';
        contenu += '    </tr>';
        contenu += '   </table>';
        contenu += '   <br/>';
        contenu += '   <table>';
        contenu += '    <tr>';
        contenu += '     <td class=\'editionEleve-datesPPA\'><span>Dates PPA :</span><br/>' + Utils.nettoieString(eleve.datesPPA) + '</td>';
        contenu += '     <td class=\'editionEleve-datesPAP\'><span>Dates PAP(PPS) :</span><br/>' + Utils.nettoieString(eleve.datesPAP) + '</td>';
        contenu += '     <td class=\'editionEleve-datesESS\'><span>Dates ESS :</span><br/>' + Utils.nettoieString(eleve.datesESS) + '</td>';
        contenu += '    </tr>';
        contenu += '   </table>';
        contenu += '   <br/>';
        contenu += '   <div class=\'editionEleve-cursus\'>';
        contenu += '    <table class=\'tablesorter-blue\'>';
        contenu += '     <thead><tr><th>Année scolaire</th><th>Niveau</th><th>Etablissement</th><th>Accompagnement</th></tr></thead>';
        contenu += '     <tbody>';
        for (const c of eleve.cursus) {
            contenu += '<tr id=\'' + c.annee + '\'>';
            contenu += '<td>' + c.annee + '-' + (c.annee + 1) + '</td>';
            contenu += '<td>' + Utils.nettoieString(c.niveau) + '</td>';
            contenu += '<td>' + Utils.nettoieString(c.etablissement) + '</td>';
            contenu += '<td>' + Utils.nettoieString(c.accompagnement) + '</td>';
            contenu += '</tr>';
        }
        contenu += '     </tbody>';
        contenu += '    </table>';
        contenu += '   </div>';
        contenu += '   <br/>';
        contenu += '   <div class=\'breakafter\'></div>';
        contenu += '   <div class=\'editionEleve-bilan\'>' + eleve.bilans + '</div>';
        contenu += '  </div>';
        contenu += ' </body>';
        contenu += '</html>';

        // Ouverture
        this.ouvrePopup(contenu, titre);
    }

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

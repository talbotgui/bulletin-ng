import { Injectable } from '@angular/core';

import * as model from '../model/model';
import { DataService } from '../service/data.service';

@Injectable()
export class EditionService {
    private static popupOuverte: Window;

    private readonly REGEX_CR: RegExp = new RegExp('\\n', 'g');

    constructor(private dataService: DataService) { }

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
        contenu += '      <span>Date de naissance : </span>' + this.formatDate(eleve.dateNaissance) + '<br/>';
        contenu += '      <span>Date d\'admission : </span>' + this.formatDate(eleve.dateAdmission);
        contenu += '     </td>';
        contenu += '    </tr>';
        contenu += '    <tr>';
        contenu += '     <td class=\'editionEleve-contacts\'>';
        contenu += '      <span>Adresses :</span><br/>' + this.nettoieString(eleve.adresses) + '<br/><br/>';
        contenu += '      <span>Téléphones : </span><br/>' + this.nettoieString(eleve.telephones);
        contenu += '     </td>';
        contenu += '    </tr>';
        contenu += '   </table>';
        contenu += '   <br/>';
        contenu += '   <table>';
        contenu += '    <tr>';
        contenu += '     <td class=\'editionEleve-pere\'><span>Père :</span><br/>' + this.nettoieString(eleve.pere) + '</td>';
        contenu += '     <td class=\'editionEleve-mere\'><span>Mère :</span><br/>' + this.nettoieString(eleve.mere) + '</td>';
        contenu += '     <td class=\'editionEleve-fratrie\'><span>Fratrie :</span><br/>' + this.nettoieString(eleve.fratrie) + '</td>';
        contenu += '     <td class=\'editionEleve-accueil\'><span>Informations complémentaires :</span><br/>' + this.nettoieString(eleve.accueil) + '</td>';
        contenu += '    </tr>';
        contenu += '   </table>';
        contenu += '   <br/>';
        contenu += '   <table>';
        contenu += '    <tr>';
        contenu += '     <td class=\'editionEleve-datesPPA\'><span>Dates PPA :</span><br/>' + this.nettoieString(eleve.datesPPA) + '</td>';
        contenu += '     <td class=\'editionEleve-datesPAP\'><span>Dates PAP(PPS) :</span><br/>' + this.nettoieString(eleve.datesPAP) + '</td>';
        contenu += '     <td class=\'editionEleve-datesESS\'><span>Dates ESS :</span><br/>' + this.nettoieString(eleve.datesESS) + '</td>';
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
            contenu += '<td>' + c.niveau + '</td>';
            contenu += '<td>' + c.etablissement + '</td>';
            contenu += '<td>' + c.accompagnement + '</td>';
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

        const titre: string = 'Cahier journal du ' + this.formatDate(journal.date);

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
        contenu += '   .editionJournal tbody td:nth-child(4) { text-align: left; max-width: 50%; word-break: break-all; }';
        contenu += '   .cahierJournalZoneEcriture { min-height: 250px; min-width: 400px; }';
        contenu += '   td span { margin: 0px 15px; }';
        contenu += '  </style>';
        contenu += ' </head>';
        contenu += ' <body>';
        contenu += '  <div id=\'all\' class=\'edition editionJournal\'>';
        contenu += '   <div><h1>' + titre + '</h1></div>';
        contenu += '   <div>Remarques : ' + journal.remarque + '</div>';
        contenu += '   <table class=\'tablesorter-blue\'>';
        contenu += '    <thead>';
        contenu += '    <tr><th>Cadre</th><th>Eleves</th><th>Compétences</th><th>Commentaire</th><th>Notes manuscrites</th></tr>';
        contenu += '    </thead>';
        contenu += '    <tbody>';
        for (const temp of journal.temps) {
            contenu += ' <tr>';
            contenu += '  <td>' + temp.nom + '<br/><i>' + temp.type + '</i><br/><br/>De ' + temp.debut + '<br/>A ' + temp.fin + '<br/></td>';
            contenu += '  <td>';
            for (const idEleve of temp.eleves) {
                const eleve = this.dataService.getEleve(idEleve);
                if (eleve) {
                    contenu += '<span class=\'nowrap\'>' + eleve.prenom + '</span><br/>';
                }
            }
            contenu += '  </td>';
            contenu += '  <td>';
            let i = 0;
            for (const comp of temp.competences) {
                if (i !== 0) {
                    contenu += '<br/><br/>';
                }
                contenu += this.dataService.getLibelleCompletCompetence(comp);
                i++;
            }
            contenu += '  </td>';
            contenu += '  <td>' + temp.commentaire + '</td>';
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

    private entete(): string {
        return 'entete';
    }
    private piedDePage(): string {
        return 'piedDePage';
    }
    private formatDate(d?: Date): string {
        if (d) {
            const date = new Date(d);
            const j = this.formatNumber(date.getDate());
            const m = this.formatNumber(date.getMonth() + 1);
            const y = date.getFullYear();
            return j + '/' + m + '/' + y;
        } else {
            return '';
        }
    }
    private formatNumber(n: number): string {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
    private nettoieString(chaine: string): string {
        if (chaine) {
            return chaine.replace(this.REGEX_CR, '<br/>');
        } else {
            return '';
        }
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

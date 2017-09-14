import * as model from '../model/model';

export class Utils {

    public static readonly REGEX_CR: RegExp = new RegExp('\\n', 'g');

    public static formatDate(date?: Date, formatLong: boolean = false): string {
        if (date) {
            const mapJours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
            const jour = mapJours[date.getDay()];
            const j = Utils.formatNumber(date.getDate());
            const m = Utils.formatNumber(date.getMonth() + 1);
            const y = date.getFullYear();
            if (formatLong) {
                return jour + ' ' + j + '/' + m + '/' + y;
            } else {
                return j + '/' + m + '/' + y;
            }
        } else {
            return '';
        }
    }

    public static formatNumber(n: number): string {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }

    public static nettoieString(chaine: string): string {
        if (chaine) {
            return chaine.replace(Utils.REGEX_CR, '<br/>');
        } else {
            return '';
        }
    }

    public static prepareLigne(annee: model.Annee): model.LigneTableauDeBord {
        const idDomaine: string = annee.competences[3].id;
        const nomDomaine: string = annee.competences[3].text;
        const constatations: model.Note[] = [];
        const idEleve: string = annee.eleves[1].id;
        constatations.push(new model.Note('valeur', idEleve, annee.competences[4].id, new Date(), undefined, 'constat'));
        const aides: model.Note[] = [];
        aides.push(new model.Note('valeur', idEleve, annee.competences[4].id, new Date(), 'aide', undefined));
        annee.notes.push(constatations[0]);
        annee.notes.push(aides[0]);
        const mapCompetences = new Map<string, model.Competence>();
        for (const competence of annee.competences) {
            mapCompetences.set(competence.id, competence);
        }
        const periodeEvaluee: model.Periode = annee.periodes[0];
        return new model.LigneTableauDeBord(idDomaine, nomDomaine, constatations, aides, mapCompetences, idEleve, periodeEvaluee);
    }

    private constructor() { }
}

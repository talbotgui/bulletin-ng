import * as model from '../model/model';

export class UtilsTest {

    public static prepareLignePourTest(annee: model.Annee): model.LigneTableauDeBord {
        const idDomaine: string = annee.competences[3].id;
        const nomDomaine: string = annee.competences[3].text;
        const constatations: model.Note[] = [];
        const idEleve: string = annee.eleves[1].id;
        constatations.push(new model.Note('valeur', idEleve, annee.competences[4].id, new Date(), undefined, 'constat'));
        const propositions: model.Note[] = [];
        propositions.push(new model.Note('valeur', idEleve, annee.competences[4].id, new Date(), 'proposition', undefined));
        annee.notes.push(constatations[0]);
        annee.notes.push(propositions[0]);
        const mapCompetences = new Map<string, model.Competence>();
        for (const competence of annee.competences) {
            mapCompetences.set(competence.id, competence);
        }
        const periodeEvaluee: model.Periode = annee.periodes[0];
        return new model.LigneTableauDeBord(idDomaine, nomDomaine, constatations, propositions, mapCompetences, idEleve, periodeEvaluee);
    }

    private constructor() { }
}

import { BulletinPage } from './app.po';
import * as selectors from './selectors';
import * as path from 'path';

/**
 * Pour que chaque test soit autonome, chaque test contient un scénario qui redémarre de l'ouverture de la page.
 * Les étapes de préparation du test sont dans la partie Arrange (de Arrange/Act/Assert) si et seulement si ces étapes ont été testées dans un autre test.
 *
 * Pour démarrer le test en DEBUG avec VSCode, il faut lancer "ng serve" depuis un terminal puis depuis la vue DEBUG de lancer le bon test
 *
 * Pour n'exécuter qu'un seul test depuis la ligne de commande : "npm run debug-e2e" après avoir modifier le script à lancer dans package.json
 */
describe('Onglet des tâches', () => {
  let page: BulletinPage;

  beforeEach(() => {
    // Accès à l'application
    page = new BulletinPage();
    page.navigateToRoot();
    // Chargement des données du fichier de test
    page.click(selectors.DivSauvegarder.BUTTON_CHARGER);
    const cheminFichierTest = path.resolve('./e2e/testData/', 'donnees08AvecBeaucoupDeNotes.json');
    page.type(selectors.DivSauvegarderDialogChargement.INPUTFILE_LOCAL, cheminFichierTest);
    page.click(selectors.DivSauvegarderDialogChargement.BUTTON_CHARGER);
    // Validation que les données sont bien chargées
    page.patiente(500);
    expect(page.isVisible(selectors.DivSauvegarderDialogChargement.BUTTON_CHARGER)).toBeFalsy();
  });

  it('Accès à l\'onglet Taches', () => {
    //
    //
    page.click(selectors.APP.MENU_TACHES);
    //
    expect(page.isVisible(selectors.TabTaches.BUTTON_AJOUTER)).toBeTruthy();
    expect(page.compterElements(selectors.TabTaches.CARTES_ENCOURS)).toBe(0);
  });

  // Pas plus à cause du timeout
  it('Ajout d\'une tache', () => {
    //
    const titre = 'Titre';
    const echeance1 = 'Echeance 1';
    const date1 = '12/09/2017';
    const date1Affichee = '12/09';
    const echeance2 = 'Echeance 2';
    const date2 = '13/09/2017';
    const date2Affichee = '13/09';
    page.click(selectors.APP.MENU_TACHES);
    const s = selectors.TabTaches;
    //
    creerTache(page, titre, echeance1, date1, echeance2, date2);
    //
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(1);
    expect(page.getText(s.CARTE1_SSTITRE_SPAN1)).toBe('0/2 |');
    expect(page.getText(s.CARTE1_SSTITRE_SPAN2)).toBe(date1Affichee);
    expect(page.getText(s.CARTE1_TITRE)).toBe(titre);
    expect(page.getText(s.CARTE1_ECHEANCE1)).toBe(echeance1 + ' pour le ' + date1Affichee);
    expect(page.isVisible(s.CARTE1_ECHEANCE1_CHECKBOXOFF)).toBeTruthy();
    expect(page.getText(s.CARTE1_ECHEANCE2)).toBe(echeance2 + ' pour le ' + date2Affichee);
    expect(page.isVisible(s.CARTE1_ECHEANCE2_CHECKBOXOFF)).toBeTruthy();
  });

  it('Manipulation des échéances', () => {
    //
    const titre = 'Titre';
    const echeance1 = 'Echeance 1';
    const date1 = '12/09/2017';
    const date1Affichee = '12/09';
    const echeance2 = 'Echeance 2';
    const date2 = '13/09/2017';
    const date2Affichee = '13/09';
    page.click(selectors.APP.MENU_TACHES);
    creerTache(page, titre, echeance1, date1, echeance2, date2);
    const s = selectors.TabTaches;

    // échance 1 terminée
    page.click(s.CARTE1_ECHEANCE1_CHECKBOXOFF);
    expect(page.isVisible(s.CARTE1_ECHEANCE1_CHECKBOXON)).toBeTruthy();
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(1);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(0);
    expect(page.getText(s.CARTE1_SSTITRE_SPAN1)).toBe('1/2 |');
    expect(page.getText(s.CARTE1_SSTITRE_SPAN2)).toBe(date2Affichee);

    // échéance 2 terminée
    page.click(s.CARTE1_ECHEANCE2_CHECKBOXOFF);
    expect(page.isVisible(s.CARTE1_ECHEANCE2_CHECKBOXON)).toBeTruthy();
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(0);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(1);
    expect(page.getText(s.CARTE1_SSTITRE_SPAN1)).toBe('2/2 |');
    expect(page.getText(s.CARTE1_SSTITRE_SPAN2)).toBe('');

    // échéance 1 non terminée
    page.click(s.CARTE1_ECHEANCE1_CHECKBOXON);
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(1);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(0);
    expect(page.isVisible(s.CARTE1_ECHEANCE1_CHECKBOXOFF)).toBeTruthy();
    expect(page.getText(s.CARTE1_SSTITRE_SPAN1)).toBe('1/2 |');
    expect(page.getText(s.CARTE1_SSTITRE_SPAN2)).toBe(date1Affichee);

    // échéance 2 non terminée
    page.click(s.CARTE1_ECHEANCE2_CHECKBOXON);
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(1);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(0);
    expect(page.isVisible(s.CARTE1_ECHEANCE2_CHECKBOXOFF)).toBeTruthy();
    expect(page.getText(s.CARTE1_SSTITRE_SPAN1)).toBe('0/2 |');
    expect(page.getText(s.CARTE1_SSTITRE_SPAN2)).toBe(date1Affichee);
  });

  it('Tri des tâches', () => {
    //
    page.click(selectors.APP.MENU_TACHES);
    const titreA = 'TitreA';
    const titreB = 'TitreB';
    const titreC = 'TitreC';
    creerTache(page, titreA, 'Echeance A.1', '12/09/2017', 'Echeance A.2', '20/09/2017');
    creerTache(page, titreB, 'Echeance B.1', '13/09/2017', 'Echeance B.2', '21/09/2017');
    creerTache(page, titreC, 'Echeance C.1', '14/09/2017', 'Echeance C.2', '22/09/2017');
    const s = selectors.TabTaches;

    // Ordre sans echeance terminée => A-B-C
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(3);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(0);
    expect(page.getText(s.CARTE1_TITRE)).toBe(titreA);
    expect(page.getText(s.CARTE2_TITRE)).toBe(titreB);
    expect(page.getText(s.CARTE3_TITRE)).toBe(titreC);

    // La carte A (place 1) terminée va à la fin => B-C-A
    page.click(s.CARTE1_ECHEANCE2_CHECKBOXOFF);
    page.click(s.CARTE1_ECHEANCE1_CHECKBOXOFF);
    page.imprimeEcran('C');
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(2);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(1);
    expect(page.getText(s.CARTE1_TITRE)).toBe(titreB);
    expect(page.getText(s.CARTE2_TITRE)).toBe(titreC);
    expect(page.getText(s.CARTE3_TITRE)).toBe(titreA);

    // Echance 1 de la carte B (place 1) terminée => C-B-A
    page.click(s.CARTE1_ECHEANCE1_CHECKBOXOFF);
    page.imprimeEcran('D');
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(2);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(1);
    expect(page.getText(s.CARTE1_TITRE)).toBe(titreC);
    expect(page.getText(s.CARTE2_TITRE)).toBe(titreB);
    expect(page.getText(s.CARTE3_TITRE)).toBe(titreA);

    // Suppression carte C => B-A
    page.click(s.CARTE1_SUPPRIME);
    page.imprimeEcran('E');
    expect(page.compterElements(s.CARTES_ENCOURS)).toBe(1);
    expect(page.compterElements(s.CARTES_TERMINEES)).toBe(1);
    expect(page.getText(s.CARTE1_TITRE)).toBe(titreB);
    expect(page.getText(s.CARTE2_TITRE)).toBe(titreA);
  });
});

/** fonction mutualisant la création d'une tâche */
function creerTache(page: BulletinPage, titre: string, echeance1: string, date1: string, echeance2: string, date2: string): void {

  const s = selectors.TabTaches;
  page.click(s.BUTTON_AJOUTER);
  page.type(s.FORM_AJOUTER_TITRE, titre);
  page.click(s.FORM_AJOUTER_PLUS);
  page.type(s.FORM_AJOUTER_ECHEANCE1, echeance1);
  page.executeScript('document.getElementsByClassName("inputDatePicker")[0].style.display="block"');
  page.type(s.FORM_AJOUTER_ECHEANCE1_DATE, date1);
  page.executeScript('document.getElementsByClassName("inputDatePicker")[0].style.display=""');
  page.click(s.FORM_AJOUTER_PLUS);
  page.type(s.FORM_AJOUTER_ECHEANCE2, echeance2);
  page.executeScript('document.getElementsByClassName("inputDatePicker")[1].style.display="block"');
  page.type(s.FORM_AJOUTER_ECHEANCE2_DATE, date2);
  page.executeScript('document.getElementsByClassName("inputDatePicker")[1].style.display=""');
  page.click(s.FORM_AJOUTER_BUTTON_AJOUTER);
}

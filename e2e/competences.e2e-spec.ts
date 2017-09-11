import { BulletinPage } from './app.po';
import * as selectors from './selectors';
import * as path from 'path';

/**
 * Pour que chaque test soit autonome, chaque test contient un scénario qui redémarre de l'ouverture de la page.
 * Les étapes de préparation du test sont dans la partie Arrange (de Arrange/Act/Assert) si et seulement si ces étapes ont été testées dans un autre test.
 * 
 * Pour démarrer le test en DEBUG avec VSCode, il faut lancer "ng serve" depuis un terminal puis ouvrir le script xx.e2e-spec.ts et taper F5
 */
describe('Onglet des compétences', () => {
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

  it('Accès à l\'onglet Compétences', () => {
    //
    //
    page.click(selectors.APP.MENU_COMPETENCES);
    //
    expect(page.isVisible(selectors.TabCompetences.INPUT_FILTRE)).toBeTruthy();
    expect(page.isVisible(selectors.TabCompetences.TREE_ROOT)).toBeTruthy();
    expect(page.compterElements(selectors.TabCompetences.TREE_NODES)).toBe(2);
  });

  // Pas plus à cause du timeout
  it('Présence de toutes les compétences sur les premiers niveaux', () => {
    //
    page.click(selectors.APP.MENU_COMPETENCES);
    //
    page.clickAll(selectors.TabCompetences.TREE_NODE_COLLAPSED);
    page.clickAll(selectors.TabCompetences.TREE_NODE_COLLAPSED);
    page.clickAll(selectors.TabCompetences.TREE_NODE_COLLAPSED);
    //
    expect(page.compterElements(selectors.TabCompetences.TREE_NODES)).toBe(307);
    expect(page.compterElements(selectors.TabCompetences.TREE_NODE_EXPANDED)).toBe(64);
    expect(page.compterElements(selectors.TabCompetences.TREE_NODE_COLLAPSED)).toBe(243);
  });

  it('Test du filtre', () => {
    //
    page.click(selectors.APP.MENU_COMPETENCES);
    //
    page.type(selectors.TabCompetences.INPUT_FILTRE, 'Français');
    page.click(selectors.APP.MENU_COMPETENCES);
    //
    expect(page.compterElements(selectors.TabCompetences.TREE_NODE_COLLAPSED)).toBe(9);
    expect(page.compterElements(selectors.TabCompetences.TREE_NODE_EXPANDED)).toBe(37);
  });
});

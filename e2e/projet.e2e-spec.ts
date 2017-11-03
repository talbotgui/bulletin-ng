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
describe('Onglet des élèves', () => {
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

  it('Accès à l\'onglet des projets', () => {
    //
    //
    page.click(selectors.APP.MENU_PROJET);
    //
    expect(page.isVisible(selectors.TabProjet.BUTTON_AJOUT_PROJET)).toBeTruthy();
    expect(page.isVisible(selectors.TabProjet.CHIP_PROJETS[0])).toBeFalsy();
    expect(page.isVisible(selectors.TabProjet.CHIP_PROJETS[1])).toBeFalsy();
  });

  it('Ajout d\'un projet', () => {
    //
    page.click(selectors.APP.MENU_PROJET);
    const nomProjet = 'monProjet';
    //
    page.click(selectors.TabProjet.BUTTON_AJOUT_PROJET);
    page.type(selectors.TabProjet.INPUT_NOM_PROJET, nomProjet);
    //
    expect(page.getText(selectors.TabProjet.CHIP_PROJETS[0])).toBe(nomProjet);
  });

  it('Ajout d\'un projet et de compétences', () => {
    //
    page.click(selectors.APP.MENU_PROJET);
    const nomProjet = 'monProjet';
    page.click(selectors.TabProjet.BUTTON_AJOUT_PROJET);
    page.type(selectors.TabProjet.INPUT_NOM_PROJET, nomProjet);
    //
    page.click(selectors.TabProjet.BUTTON_AJOUT_COMPETENCE);
    page.select(selectors.TabProjet.COMPETENCE_PREMIER_SELECT_VISIBLE, 'compTrav', 'W', 'W1', 'W12', 'W122');
    //
    expect(page.getText(selectors.TabProjet.CHIP_PROJETS[0])).toBe(nomProjet);
  });
});

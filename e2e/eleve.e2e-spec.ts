import { BulletinPage } from './app.po';
import * as selectors from './selectors';
import * as path from 'path';

/**
 * Pour que chaque test soit autonome, chaque test contient un scénario qui redémarre de l'ouverture de la page.
 * Les étapes de préparation du test sont dans la partie Arrange (de Arrange/Act/Assert) si et seulement si ces étapes ont été testées dans un autre test.
 * 
 * Pour démarrer le test en DEBUG avec VSCode, il faut lancer "ng serve" depuis un terminal puis ouvrir le script xx.e2e-spec.ts et taper F5
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

  it('Accès à l\'onglet des élèves', () => {
    //
    //
    page.click(selectors.APP.MENU_ELEVES);
    //
    expect(page.isVisible(selectors.TabEleves.BUTTON_AJOUT_ELEVE)).toBeTruthy();
    expect(page.isVisible(selectors.TabEleves.CHIP_ELEVES[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabEleves.CHIP_ELEVES[1])).toBeTruthy();
    expect(page.isVisible(selectors.TabEleves.CHIP_ELEVES[2])).toBeTruthy();
    expect(page.isVisible(selectors.TabEleves.CHIP_ELEVES[3])).toBeTruthy();
    expect(page.isVisible(selectors.TabEleves.CHIP_ELEVES[4])).toBeFalsy();
  });
});

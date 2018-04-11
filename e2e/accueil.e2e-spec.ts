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
describe('Accueil de l\'application', () => {
  let page: BulletinPage;

  beforeEach(() => {
    page = new BulletinPage();
  });

  it('Accès à l\'accueil', () => {
    //
    //
    page.navigateToRoot();
    //
    expect(page.getText(selectors.APP.TITRE)).toEqual('Application de gestion de ma classe');
    expect(page.isVisible(selectors.DivSauvegarder.BUTTON_CHARGER)).toBeTruthy('le bouton charger est visible');
    expect(page.isVisible(selectors.DivSauvegarder.BUTTON_SAUVEGARDER)).toBeFalsy('le bouton sauvegarder n\'est pas visible');
  });

  it('Affichage de la popup de chargement', () => {
    //
    const DIV = selectors.DivSauvegarder;
    const DIALOG = selectors.DivSauvegarderDialogChargement;
    page.navigateToRoot();
    //
    page.click(DIV.BUTTON_CHARGER);
    //
    expect(page.isVisible(DIALOG.INPUTFILE_LOCAL)).toBeTruthy('l\'input est là');
    expect(page.isVisible(DIALOG.INPUTFILE_LOCAL_LABEL_NOT_DONE)).toBeTruthy('l\'input a la bonne classe');
    expect(page.isVisible(DIALOG.INPUTFILE_LOCAL_LABEL_DONE)).toBeFalsy('l\'input a la bonne classe2');
    expect(page.getText(DIALOG.BUTTON_ANNULER)).toEqual('Annuler');
    expect(page.getText(DIALOG.BUTTON_CHARGER)).toEqual('Charger');

  });

  it('Chargement de données locales', () => {
    //
    const DIV = selectors.DivSauvegarder;
    const DIALOG = selectors.DivSauvegarderDialogChargement;
    const cheminFichierTest = path.resolve('./e2e/testData/', 'donnees08AvecBeaucoupDeNotes.json');
    page.navigateToRoot();
    page.click(DIV.BUTTON_CHARGER);
    //
    page.type(DIALOG.INPUTFILE_LOCAL, cheminFichierTest);
    expect(page.isVisible(DIALOG.INPUTFILE_LOCAL_LABEL_DONE)).toBeTruthy('l\'input a la bonne classe');
    expect(page.isVisible(DIALOG.INPUTFILE_LOCAL_LABEL_NOT_DONE)).toBeFalsy('l\'input a la bonne classe2');
    page.click(DIALOG.BUTTON_CHARGER);
    page.patiente(500);
    //
    expect(page.isVisible(DIALOG.BUTTON_CHARGER)).toBeFalsy();
    expect(page.isVisible(DIV.BUTTON_CHARGER)).toBeFalsy('le bouton charger n\'est pas visible');
    expect(page.isVisible(DIV.BUTTON_SAUVEGARDER)).toBeTruthy('le bouton sauvegarder est visible');
  });
});

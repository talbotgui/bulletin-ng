import { BulletinPage } from './app.po';
import * as selectors from './selectors';
/**
 * Pour que chaque test soit autonome, chaque test contient un scénario qui redémarre de l'ouverture de la page.
 * Les étapes de préparation du test sont dans la partie Arrange (de Arrange/Act/Assert) si et seulement si ces étapes ont été testées dans un autre test. 
 */
describe('bulletin App', () => {
  let page: BulletinPage;

  beforeEach(() => {
    page = new BulletinPage();
  });

  it('Accès à l\'accueil', () => {

    //

    //
    page.navigateToRoot();

    //
    expect(page.getText(selectors.APP.TITLE)).toEqual('Application de gestion de ma classe');
    expect(page.getText(selectors.DivSauvegarder.BUTTON)).toEqual('Charger');
  });

  it('Affichage de la popup de chargement', () => {

    //
    page.navigateToRoot();

    //
    page.click(selectors.DivSauvegarder.BUTTON);
    page.click(selectors.DivSauvegarder.DIALOG_CHARGEMENT_SELECT);

    //
    expect(page.isVisible(selectors.DivSauvegarder.DIALOG_CHARGEMENT_TITRE)).toBeTruthy();
    expect(page.getText(selectors.DivSauvegarder.DIALOG_CHARGEMENT_TITRE)).toEqual('Chargement d\'une sauvegarde');
    expect(page.isVisible(selectors.DivSauvegarder.DIALOG_CHARGEMENT_SELECT)).toBeTruthy();
    expect(page.isVisible(selectors.DivSauvegarder.DIALOG_CHARGEMENT_SELECT_VALEUR1)).toBeTruthy();
    expect(page.getText(selectors.DivSauvegarder.DIALOG_CHARGEMENT_BUTTON_ANNULER)).toEqual('Annuler');
    expect(page.getText(selectors.DivSauvegarder.DIALOG_CHARGEMENT_BUTTON_CHARGER)).toEqual('Charger');

  });

  it('Chargement de données et vérification dans l\'entête', () => {

    //
    page.navigateToRoot();
    page.click(selectors.DivSauvegarder.BUTTON);

    //

    //
  });
});

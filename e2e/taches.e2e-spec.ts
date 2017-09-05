import { BulletinPage } from './app.po';
import * as selectors from './selectors';
import * as path from 'path';

/**
 * Pour que chaque test soit autonome, chaque test contient un scénario qui redémarre de l'ouverture de la page.
 * Les étapes de préparation du test sont dans la partie Arrange (de Arrange/Act/Assert) si et seulement si ces étapes ont été testées dans un autre test.
 * 
 * Pour démarrer le test en DEBUG avec VSCode, il faut lancer "ng serve" depuis un terminal puis ouvrir le script xx.e2e-spec.ts et taper F5
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
    page.click(selectors.APP.MENU_TACHES);
    //
    page.click(selectors.TabTaches.BUTTON_AJOUTER);
    page.type(selectors.TabTaches.FORM_AJOUTER_TITRE, 'Titre');
    page.click(selectors.TabTaches.FORM_AJOUTER_PLUS);
    page.type(selectors.TabTaches.FORM_AJOUTER_ECHEANCE1, 'Echeance 1');
    page.executeScript('document.getElementsByClassName("inputDatePicker")[0].style.display="block"');
    page.type(selectors.TabTaches.FORM_AJOUTER_ECHEANCE1_DATE, '12/09/2017');
    page.executeScript('document.getElementsByClassName("inputDatePicker")[0].style.display=""');
    page.click(selectors.TabTaches.FORM_AJOUTER_PLUS);
    page.type(selectors.TabTaches.FORM_AJOUTER_ECHEANCE2, 'Echeance 2');
    page.executeScript('document.getElementsByClassName("inputDatePicker")[1].style.display="block"');
    page.type(selectors.TabTaches.FORM_AJOUTER_ECHEANCE2_DATE, '13/09/2017');
    page.executeScript('document.getElementsByClassName("inputDatePicker")[1].style.display=""');
    page.click(selectors.TabTaches.FORM_AJOUTER_BUTTON_AJOUTER);
    //
    expect(page.compterElements(selectors.TabTaches.CARTES_ENCOURS)).toBe(1);
  });
});

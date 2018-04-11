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
describe('Onglet des journaux', () => {
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

  it('Accès à l\'onglet du cahier journal', () => {
    //
    //
    page.click(selectors.APP.MENU_JOURNAL);
    //
    expect(page.isVisible(selectors.TabJournal.INPUT_DATE_JOURNAL)).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.BUTTON_CREER_JOURNAL)).toBeTruthy();
  });

  it('Créer un journal pour le 05/01/2020', () => {
    //
    page.click(selectors.APP.MENU_JOURNAL);
    //
    page.type(selectors.TabJournal.INPUT_DATE_JOURNAL, '05/01/2020');
    page.click(selectors.TabJournal.BUTTON_CREER_JOURNAL);
    //
    expect(page.getText(selectors.TabJournal.LIBELLE_DATE_JOURNAL)).toBe('Journal du dimanche 05/01/2020');
    expect(page.isVisible(selectors.TabJournal.BUTTON_AJOUT_TEMPS)).toBeTruthy();
  });

  it('Créer un journal pour le 06/01/2020 et ajouter un temps', () => {
    //
    page.click(selectors.APP.MENU_JOURNAL);
    page.type(selectors.TabJournal.INPUT_DATE_JOURNAL, '06/01/2020');
    page.click(selectors.TabJournal.BUTTON_CREER_JOURNAL);
    expect(page.getText(selectors.TabJournal.LIBELLE_DATE_JOURNAL)).toBe('Journal du lundi 06/01/2020');
    //
    page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
    page.type(selectors.TabJournal.TEMPS_LIBELLE[0], 'TEMPS A');
    //
    expect(page.isVisible(selectors.TabJournal.TEMPS_LIBELLE[0])).toBeTruthy();
    expect(page.getValue(selectors.TabJournal.TEMPS_LIBELLE[0])).toBe('TEMPS A');
    expect(page.isVisible(selectors.TabJournal.TEMPS_DEBUT[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_FIN[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_AJOUTER_COMPETENCE[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_SUPPRIMER[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_DUPLIQUER[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_MONTER[0])).toBeFalsy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_DESCENDRE[0])).toBeFalsy();
  });

  it('Créer un journal pour le 03/01/2020, ajouter deux temps et monter/descendre', () => {
    //
    page.click(selectors.APP.MENU_JOURNAL);
    page.type(selectors.TabJournal.INPUT_DATE_JOURNAL, '03/01/2020');
    page.click(selectors.TabJournal.BUTTON_CREER_JOURNAL);
    expect(page.getText(selectors.TabJournal.LIBELLE_DATE_JOURNAL)).toBe('Journal du mardi 03/01/2020');
    //
    page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
    page.type(selectors.TabJournal.TEMPS_LIBELLE[0], 'TEMPS A');
    page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
    page.type(selectors.TabJournal.TEMPS_LIBELLE[1], 'TEMPS B');
    page.click(selectors.TabJournal.TEMPS_DESCENDRE[0]);
    //
    expect(page.getValue(selectors.TabJournal.TEMPS_LIBELLE[0])).toBe('TEMPS B');
    expect(page.getValue(selectors.TabJournal.TEMPS_LIBELLE[1])).toBe('TEMPS A');
    expect(page.isVisible(selectors.TabJournal.TEMPS_DESCENDRE[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_MONTER[0])).toBeTruthy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_DESCENDRE[1])).toBeFalsy();
    expect(page.isVisible(selectors.TabJournal.TEMPS_MONTER[1])).toBeFalsy();
  });

  it('Créer un journal pour le 08/01/2020, ajouter deux temps et des compétences', () => {
    //
    page.click(selectors.APP.MENU_JOURNAL);
    page.type(selectors.TabJournal.INPUT_DATE_JOURNAL, '08/01/2020');
    page.click(selectors.TabJournal.BUTTON_CREER_JOURNAL);
    expect(page.getText(selectors.TabJournal.LIBELLE_DATE_JOURNAL)).toBe('Journal du mercredi 08/01/2020');
    page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
    page.type(selectors.TabJournal.TEMPS_LIBELLE[0], 'TEMPS A');
    page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
    page.type(selectors.TabJournal.TEMPS_LIBELLE[1], 'TEMPS B');
    //
    page.click(selectors.TabJournal.TEMPS_ELEVES[0][0]);
    page.click(selectors.TabJournal.TEMPS_ELEVES[1][1]);
    page.click(selectors.TabJournal.TEMPS_AJOUTER_COMPETENCE[0]);
    page.select(selectors.TabJournal.TEMPS_COMPETENCE_PREMIER_SELECT_VISIBLE, 'compTrav', 'W', 'W1', 'W12', 'W122');
    page.click(selectors.TabJournal.TEMPS_AJOUTER_COMPETENCE[0]);
    page.select(selectors.TabJournal.TEMPS_COMPETENCE_PREMIER_SELECT_VISIBLE, 'compTrav', 'W', 'W1', 'W12', 'W123');
    //
    expect(page.compterElements(selectors.TabJournal.ELEVES_SELECTIONNES)).toBe(2);
    expect(page.getText(selectors.TabJournal.TEMPS_COMPETENCE_LIBELLE_AFFICHE[0]))
      .toBe('Compétences travaillées > CYCLE 2 > Français > Lire > Comprendre un texte.');
    expect(page.getText(selectors.TabJournal.TEMPS_COMPETENCE_LIBELLE_AFFICHE[1]))
      .toBe('Compétences travaillées > CYCLE 2 > Français > Lire > Pratiquer différentes formes de lecture.');
  });

  // it('Créer un journal pour le 05/01/2020 avec 2 temps et des compétences puis le dupliquer au 06/01/2020', () => {
  //   //
  //   page.click(selectors.APP.MENU_JOURNAL);
  //   page.type(selectors.TabJournal.INPUT_DATE_JOURNAL, '05/01/2020');
  //   page.click(selectors.TabJournal.BUTTON_CREER_JOURNAL);
  //   expect(page.getText(selectors.TabJournal.LIBELLE_DATE_JOURNAL)).toBe('Journal du jeudi 05/01/2020');
  //   page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
  //   page.type(selectors.TabJournal.TEMPS_LIBELLE[0], 'TEMPS A');
  //   page.click(selectors.TabJournal.BUTTON_AJOUT_TEMPS);
  //   page.type(selectors.TabJournal.TEMPS_LIBELLE[1], 'TEMPS B');
  //   page.click(selectors.TabJournal.TEMPS_ELEVES[0][0]);
  //   page.click(selectors.TabJournal.TEMPS_ELEVES[1][1]);
  //   page.click(selectors.TabJournal.TEMPS_AJOUTER_COMPETENCE[0]);
  //   page.select(selectors.TabJournal.TEMPS_COMPETENCE_PREMIER_SELECT_VISIBLE, 'compTrav', 'W', 'W1', 'W12', 'W122');
  //   page.click(selectors.TabJournal.TEMPS_AJOUTER_COMPETENCE[0]);
  //   page.select(selectors.TabJournal.TEMPS_COMPETENCE_PREMIER_SELECT_VISIBLE, 'compTrav', 'W', 'W1', 'W12', 'W123');
  //   //
  //   page.click(selectors.TabJournal.BUTTON_DUPLIQUER_JOURNAL);
  //   page.type(selectors.TabJournal.INPUT_DIALOGDUPLICATION_DATECIBLE, '06/01/2020');
  //   page.click(selectors.TabJournal.BUTTON_DIALOGDUPLICATION_VALIDER);
  //   page.click(selectors.TabJournal.BUTTON_PASSER_JOUR_PLUS_UN);
  //   //
  //   expect(page.getText(selectors.TabJournal.LIBELLE_DATE_JOURNAL)).toBe('Journal du vendredi 06/01/2020');
  //   expect(page.isVisible(selectors.TabJournal.BUTTON_CREER_JOURNAL)).toBeFalsy();
  //   expect(page.isVisible(selectors.TabJournal.TEMPS_DESCENDRE[0])).toBeTruthy();
  //   expect(page.isVisible(selectors.TabJournal.TEMPS_MONTER[0])).toBeTruthy();
  //   expect(page.isVisible(selectors.TabJournal.TEMPS_DESCENDRE[1])).toBeFalsy();
  //   expect(page.isVisible(selectors.TabJournal.TEMPS_MONTER[1])).toBeFalsy();
  //   expect(page.compterElements(selectors.TabJournal.ELEVES_SELECTIONNES)).toBe(2);
  //   expect(page.getText(selectors.TabJournal.TEMPS_COMPETENCE_LIBELLE_AFFICHE[0]))
  //     .toBe('Compétences travaillées > CYCLE 2 > Français > Lire > Comprendre un texte.');
  //   expect(page.getText(selectors.TabJournal.TEMPS_COMPETENCE_LIBELLE_AFFICHE[1]))
  //     .toBe('Compétences travaillées > CYCLE 2 > Français > Lire > Pratiquer différentes formes de lecture.');
  //   expect(page.getValue(selectors.TabJournal.TEMPS_LIBELLE[0])).toBe('TEMPS A');
  //   expect(page.getValue(selectors.TabJournal.TEMPS_LIBELLE[1])).toBe('TEMPS B');
  // });
});

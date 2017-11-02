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
describe('Test des différentes éditions', () => {
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

  it('Edition des élèves', () => {
    //
    //
    page.click(selectors.APP.MENU_ELEVES);
    page.click(selectors.TabEleves.CHIP_ELEVES[1]);
    page.click(selectors.TabEleves.BUTTON_EDITER);
    //
    expect(page.getText(selectors.EditionEleves.TITRE)).toBe('Fiche de NOM1 PRENOM1');
    expect(page.getText(selectors.EditionEleves.IDENTITE)).toBe('NOM1 PRENOM1');
    expect(page.getText(selectors.EditionEleves.DATES)).toBe('Date de naissance : 01/01/2009\nDate d\'admission : 01/09/2015');
    expect(page.getText(selectors.EditionEleves.CONTACTS)).toBe('Adresses :\n1 rue de l\'éqlise\n\nTéléphones :\n01 01 01 01 01');
    expect(page.getText(selectors.EditionEleves.PERE)).toBe('Père :\nM. NOM1 PAPA');
    expect(page.getText(selectors.EditionEleves.MERE)).toBe('Mère :\nMme NOM1 MAMAN');
    expect(page.getText(selectors.EditionEleves.FRATRIE)).toBe('Fratrie :\nFrere1 NOM1, Soeur1 NOM1');
    expect(page.getText(selectors.EditionEleves.ACCUEIL)).toBe('Informations complémentaires :');
    expect(page.getText(selectors.EditionEleves.DATES_PPA)).toBe('Dates PPA :');
    expect(page.getText(selectors.EditionEleves.DATES_PAP)).toBe('Dates rencontres parents :');
    expect(page.getText(selectors.EditionEleves.DATES_ESS)).toBe('Dates ESS :');
    expect(page.getText(selectors.EditionEleves.DROIT)).toBe('Droit à l\'image :');
    expect(page.getText(selectors.EditionEleves.AUTORISATION)).toBe('Autorisation de baignade :');
    expect(page.getText(selectors.EditionEleves.CURSUS[0])).toBe('2012-2013');
    expect(page.getText(selectors.EditionEleves.CURSUS[1])).toBe('2013-2014');
    expect(page.getText(selectors.EditionEleves.CURSUS[2])).toBe('2014-2015');
    expect(page.getText(selectors.EditionEleves.CURSUS[3])).toBe('2015-2016');
  });

  it('Retour de l\'édition des élèves', () => {
    //
    //
    page.click(selectors.APP.MENU_ELEVES);
    page.click(selectors.TabEleves.CHIP_ELEVES[1]);
    page.click(selectors.TabEleves.BUTTON_EDITER);
    page.click(selectors.EditionEleves.BUTTON_RETOUR);
    //
    expect(page.isVisible(selectors.TabEleves.CHIP_ELEVES[1])).toBeTruthy();
  });

  // it('Retour de l\'édition du journal', () => {
  //   //
  //   //
  //   page.click(selectors.APP.MENU_JOURNAL);
  //   page.type(selectors.TabJournal.INPUT_DATE_JOURNAL, '06/10/2016');
  //   page.click(selectors.TabJournal.BUTTON_EDITION);
  //   page.click(selectors.EditionJournal.BUTTON_RETOUR);
  //   //
  //   expect(page.isVisible(selectors.TabJournal.INPUT_DATE_JOURNAL)).toBeTruthy();
  // });

  it('Retour de l\'édition du PPI', () => {
    //
    //
    page.click(selectors.APP.MENU_TDB);
    page.click(selectors.TabTdb.CHIP_ELEVES[1]);
    page.click(selectors.TabTdb.CHIP_PERIODES[1]);
    page.click(selectors.TabTdb.BUTTON_EDITER);
    page.click(selectors.EditionPpi.BUTTON_RETOUR);
    //
    expect(page.isVisible(selectors.TabTdb.CHIP_ELEVES[1])).toBeTruthy();
  });

});

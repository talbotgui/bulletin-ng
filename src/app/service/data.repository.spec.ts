import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { DataRepository } from '../service/data.repository';

describe('DataRepository', () => {

  let dataRepositoryToTest: DataRepository;

  beforeEach(() => {
    // Creation du Repository
    dataRepositoryToTest = new DataRepository();
  });

  it('Par défaut, pas de données chargées', () => {
    expect(dataRepositoryToTest.isAnneeChargee()).toBe(false);
  });

  it('Par défaut, erreur à l\'accès des données si elles ne sont pas chargées', () => {
    expect(() => { dataRepositoryToTest.getAnneeChargee(); }).toThrow(new ReferenceError(DataRepository.MESSAGE_ERREUR_REFERENCE));
  });

  it('les simples restitutions de données fonctionnent avec une année', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataRepositoryToTest.setAnneeChargee(annee);

    // Assert
    expect(dataRepositoryToTest.isAnneeChargee()).toBe(true);
    expect(dataRepositoryToTest.getAnneeChargee().competences.length).toBe(annee.competences.length);
    expect(dataRepositoryToTest.getAnneeChargee().eleves.length).toBe(annee.eleves.length);
    expect(dataRepositoryToTest.getAnneeChargee().journal.length).toBe(annee.journal.length);
    expect(dataRepositoryToTest.getAnneeChargee().taches.length).toBe(annee.taches.length);
  });

  it('setThemeSelectionne', () => {
    // Arrange
    document.cookie = '';
    const theme = 'monTheme';

    // Act
    dataRepositoryToTest.setThemeSelectionne(theme);

    // Assert
    expect(document.cookie).toBe('theme=' + theme);
  });

  it('getThemeSelectionne par l\'année chargée', () => {
    // Arrange
    document.cookie = 'theme=themeDuCookie';
    const theme = 'monTheme';
    const annee = new model.Annee();
    annee.themeSelectionne = theme;
    dataRepositoryToTest.setAnneeChargee(annee);

    // Act
    const themeResultat = dataRepositoryToTest.getThemeSelectionne();

    // Assert
    expect(themeResultat).toBe(theme);
  });

  it('getThemeSelectionne par le cookie (quand aucune année chargée)', () => {
    // Arrange
    const theme = 'themeDuCookie';
    document.cookie = 'theme=' + theme;

    // Act
    const themeResultat = dataRepositoryToTest.getThemeSelectionne();

    // Assert
    expect(themeResultat).toBe(theme);
  });
});

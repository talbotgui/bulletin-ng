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
    expect(dataRepositoryToTest.getAnneeChargee()).toBe(annee);
  });
});

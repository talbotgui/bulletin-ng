import * as model from '../model/model';
import {DataService} from '../service/data.service';

describe('DataService', () => {

  let dataServiceToTest: DataService;

  beforeEach(() => {
    // Creation du service
    dataServiceToTest = new DataService();
  });

  it('sans annee, aucune methode ne renvoie de donnee', () => {

    // Assert : validation
    expect(dataServiceToTest.isAnneeChargee()).toBe(false);
    expect(dataServiceToTest.transformeAnneeEnJson()).toBe('');
    expect(dataServiceToTest.prepareSauvegardeEtCalculNomFichier()).toBe('');
    expect(dataServiceToTest.getListeEleve()).toBe([]);
    expect(dataServiceToTest.getListePeriode()).toBe([]);
    expect(dataServiceToTest.getListeEleveActif()).toBe([]);
    expect(dataServiceToTest.getListeCompetence()).toBe([]);
    expect(dataServiceToTest.getMapLibelleNote()).toBe({});
    expect(dataServiceToTest.getMapLibelleStatutEleveMap().size()).toBe(0);
    expect(dataServiceToTest.getListeLigneTableauDeBord(null, null)).toBe([]);
  });
});
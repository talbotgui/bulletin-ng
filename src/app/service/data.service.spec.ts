import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { DataService } from '../service/data.service';

describe('DataService', () => {

  let dataServiceToTest: DataService;

  beforeEach(() => {
    // Creation du service
    dataServiceToTest = new DataService();
  });

  it('les simples restitutions de données ne renvoient pas de données sans année', () => {

    // Assert
    expect(dataServiceToTest.isAnneeChargee()).toBe(false);
    expect(dataServiceToTest.getListeEleve().length).toBe(0);
    expect(dataServiceToTest.getListeEleveActif().length).toBe(0);
    expect(dataServiceToTest.getListePeriode().length).toBe(0);
    expect(dataServiceToTest.getListeCompetence().length).toBe(0);
    expect(dataServiceToTest.getMapLibelleStatutEleveMap().size).toBe(0);
    expect(dataServiceToTest.getMapLibelleNote()).toEqual({});
  });

  it('les simples restitutions de données fonctionnent avec une année', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataServiceToTest.setAnneeChargee(annee);

    // Assert
    expect(dataServiceToTest.isAnneeChargee()).toBe(true);
    expect(dataServiceToTest.getListeEleve().length).toBe(4);
    expect(dataServiceToTest.getListeEleveActif().length).toBe(3);
    expect(dataServiceToTest.getListePeriode().length).toBe(5);
    expect(dataServiceToTest.getListeCompetence().length).toBe(1366);
    expect(dataServiceToTest.getMapLibelleStatutEleveMap().size).toBe(3);
    expect(dataServiceToTest.getMapLibelleNote()).toBe(annee.mapLibelleNotes);
  });

  it('transformeannéeEnJson ne renvoie rien sans année', () => {
    // Assert
    expect(dataServiceToTest.transformeAnneeEnJson()).toBe('{}');
  });

  it('transformeannéeEnJson renvoie l\'année en JSON avec une année', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataServiceToTest.setAnneeChargee(annee);

    // Assert (seulement la longueur de la chaine)
    expect(dataServiceToTest.transformeAnneeEnJson().length).toBe(207606);
  });

  it('prepareSauvegardeEtCalculNomFichier ne renvoie rien sans année', () => {
    // Assert
    expect(dataServiceToTest.prepareSauvegardeEtCalculNomFichier()).toBe('');
  });

  it('prepareSauvegardeEtCalculNomFichier fonctionne avec une année', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataServiceToTest.setAnneeChargee(annee);
    const dateDerniereSauvegardePrecedente = annee.dateDerniereSauvegarde;

    // Act
    const resultat = dataServiceToTest.prepareSauvegardeEtCalculNomFichier();

    // Assert
    expect(resultat.length).toBe('yyyy-mm-dd-HHhmmmsss.json'.length);
    expect(annee.dateDerniereSauvegarde).not.toBe(dateDerniereSauvegardePrecedente);
  });

  it('getListeLigneTableauDeBord ne renvoie rien sans année', () => {
    // Assert
    expect(dataServiceToTest.getListeLigneTableauDeBord(undefined, undefined).length).toBe(0);
  });

  it('getListeLigneTableauDeBord ne renvoie rien avec une année et sans paramètres', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataServiceToTest.setAnneeChargee(annee);

    // Assert
    expect(dataServiceToTest.getListeLigneTableauDeBord(undefined, undefined).length).toBe(0);
  });

  it('getListeLigneTableauDeBord renvoie des lignes avec une année et des paramètres (1ère période)', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataServiceToTest.setAnneeChargee(annee);

    // Act
    const resultat = dataServiceToTest.getListeLigneTableauDeBord(annee.eleves[1], annee.periodes[0]);

    // Assert
    expect(resultat.length).toBe(9);
    expect(resultat[0].nomDomaine).toBe('Compétences associées > CYCLE 2 (CP-CE2) > Français > Comprendre et s\'exprimer à l\'oral');
    expect(resultat[0].sousLignes.length).toBe(1);
    expect(resultat[0].sousLignes[0].constatation).not.toBeNull();
  });

  it('getListeLigneTableauDeBord renvoie des lignes avec une année et des paramètres (dernière période)', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    dataServiceToTest.setAnneeChargee(annee);

    // Act
    const resultat = dataServiceToTest.getListeLigneTableauDeBord(annee.eleves[1], annee.periodes[annee.periodes.length - 1]);

    // Assert
    expect(resultat.length).toBe(1);
    expect(resultat[0].nomDomaine).toBe('Compétences travaillées > CYCLE 2 > Questionner le monde > Imaginer, réaliser');
    expect(resultat[0].sousLignes.length).toBe(1);
    expect(resultat[0].sousLignes[0].aide).toBeUndefined();
    expect(resultat[0].sousLignes[0].constatation).not.toBeUndefined();
  });

});

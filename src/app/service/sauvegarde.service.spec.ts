import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { donnees } from './donneesDeTest/donnees08AvecBeaucoupDeNotes';
import { DataRepository } from '../service/data.repository';
import { SauvegardeService } from '../service/sauvegarde.service';

describe('SauvegardeService', () => {

  let dataRepositoryMock: DataRepository;
  let sauvegardeService: SauvegardeService;
  let http: HttpTestingController;

  beforeAll(() => {
    // Creation du mock de DataService
    dataRepositoryMock = mockito.mock(DataRepository);
  });

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {

    // Reset du localstorage
    window.localStorage.clear();

    // Reset des mock
    mockito.reset(dataRepositoryMock);

    // Creation de l'environnement de test du composant
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MdSnackBarModule, BrowserAnimationsModule],
      providers: [
        SauvegardeService,
        { provide: DataRepository, useValue: mockito.instance(dataRepositoryMock) }
      ]
    }).compileComponents();

    // Récupération des instances de composants
    sauvegardeService = TestBed.get(SauvegardeService);
    http = TestBed.get(HttpTestingController);
  });

  it('getlisteSauvegardesDuServeur', () => {
    // Arrange
    const jdd = ['a', 'b', 'c', 'd'];
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url === 'http://192.168.1.52/download/upload.php'
        && req.body === 'methode=liste'
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    let resultats;
    sauvegardeService.getlisteSauvegardesDuServeur().subscribe((val) => { resultats = val; });
    http.expectOne(requestDefinition).flush(jdd);

    // Assert : valeurs retournées et pas d'autre requete HTTP
    expect(resultats).toEqual(jdd);
    http.verify();
  });

  it('chargeAnneeDuFichier', () => {
    // Arrange
    const anneeRetournee = new model.Annee();
    const nomFichier = 'nomDeMonFichier';
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url === 'http://192.168.1.52/download/upload.php'
        && req.body === 'methode=charge&nomFichier=' + nomFichier
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.chargeAnneeDuFichier(nomFichier);
    http.expectOne(requestDefinition).flush(anneeRetournee);

    // Assert : valeurs retournées et pas d'autre requete HTTP
    mockito.verify(dataRepositoryMock.setAnneeChargee(mockito.anyOfClass(model.Annee))).once();
    http.verify();
  });

  it('sauvegardeAnneeDansFichier', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    const jsonAnnee = Jdd.getJson(Jdd.JDD_SIMPLISTE);
    const nomFichier = 'nomDeMonFichier';
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url === 'http://192.168.1.52/download/upload.php'
        && (req.body + '').indexOf('methode=sauvegarde&nomFichier=') !== -1
        && (req.body + '').indexOf('.json&contenuFichier=%7B%0A%20%20%22enseignant%22:%20%22M.%20Toto%22,%0A%20%20%22dateDerniereSauvegarde%22:%20%22') !== -1
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.sauvegardeAnneeSurServeur();
    http.expectOne(requestDefinition).flush('');

    // Assert : valeurs retournées et pas d'autre requete HTTP
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
    http.verify();
  });

  it('sauvegardeAnneeDansUnBlob', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    sauvegardeService.sauvegardeAnneeParTelechargement();

    // Assert
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
  });

  it('chargeAnneeDepuisText - fichier minimaliste', () => {
    // Arrange
    const nomDuFichier = 'fichier.json';
    const contenuDuFichier = '{}';

    // Act
    sauvegardeService.chargeAnneeDepuisText(nomDuFichier, contenuDuFichier);

    // Assert
    mockito.verify(dataRepositoryMock.setAnneeChargee(mockito.anything())).once();
  });

  it('chargeAnneeDepuisText - fichier minimal', () => {
    // Arrange
    const nomDuFichier = 'fichier.json';
    const contenuDuFichier = JSON.stringify(donnees, null, 2);

    // Act
    sauvegardeService.chargeAnneeDepuisText(nomDuFichier, contenuDuFichier);

    // Assert
    mockito.verify(dataRepositoryMock.setAnneeChargee(mockito.anything())).once();
  });
});

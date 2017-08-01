import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { DataService } from '../service/data.service';
import { SauvegardeService } from '../service/sauvegarde.service';

describe('SauvegardeService', () => {

  let dataServiceMock: DataService;
  let sauvegardeService: SauvegardeService;
  let http: HttpTestingController;

  beforeAll(() => {
    // Creation du mock de DataService
    dataServiceMock = mockito.mock(DataService);
  });

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {
    // Reset des mock
    mockito.reset(dataServiceMock);

    // Creation de l'environnement de test du composant
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MdSnackBarModule, BrowserAnimationsModule],
      providers: [
        SauvegardeService,
        { provide: DataService, useValue: mockito.instance(dataServiceMock) }
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
    mockito.verify(dataServiceMock.setAnneeChargee(mockito.anyOfClass(model.Annee))).once();
    http.verify();
  });

  it('sauvegardeAnneeDansFichier', () => {
    // Arrange
    const nomFichier = 'nomDeMonFichier';
    mockito.when(dataServiceMock.prepareSauvegardeEtCalculNomFichier()).thenReturn(nomFichier);
    const contenuDuFichier = 'blaBlaBlaBla';
    mockito.when(dataServiceMock.transformeAnneeEnJson()).thenReturn(contenuDuFichier);
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url === 'http://192.168.1.52/download/upload.php'
        && req.body === 'methode=sauvegarde&nomFichier=' + nomFichier + '&contenuFichier=' + contenuDuFichier
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.sauvegardeAnneeDansFichier();
    http.expectOne(requestDefinition).flush('');

    // Assert : valeurs retournées et pas d'autre requete HTTP
    mockito.verify(dataServiceMock.prepareSauvegardeEtCalculNomFichier()).once();
    mockito.verify(dataServiceMock.transformeAnneeEnJson()).once();
    http.verify();
  });

});

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
  let dataServiceMock2: DataService;
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
        { provide: DataService, useValue: dataServiceMock }
      ]
    }).compileComponents();

    // Récupération des instances de composants
    sauvegardeService = TestBed.get(SauvegardeService);
    http = TestBed.get(HttpTestingController);
    dataServiceMock2 = TestBed.get(DataService);
  });

  it('getlisteSauvegardesDuServeur', () => {
    // Arrange
    const jdd = ['a', 'b', 'c', 'd'];
    const requestDefinition = function (req: HttpRequest<any>) {
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
    const requestDefinition = function (req: HttpRequest<any>) {
      return req.url === 'http://192.168.1.52/download/upload.php'
        && req.body === 'methode=charge&nomFichier=' + nomFichier
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.chargeAnneeDuFichier(nomFichier);
    http.expectOne(requestDefinition).flush(anneeRetournee);

    // Assert : valeurs retournées et pas d'autre requete HTTP
    const dataService: DataService = TestBed.get(DataService);
    console.log('OUI1 =>' + (dataService === dataServiceMock));
    console.log('OUI2 =>' + (dataService === dataServiceMock2));
    console.log('OUI3 =>' + (dataServiceMock === dataServiceMock2));
    mockito.verify(dataServiceMock2.setAnneeChargee(mockito.anything())).once();
    http.verify();
  });

});

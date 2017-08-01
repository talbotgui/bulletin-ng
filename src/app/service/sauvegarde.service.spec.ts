import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import * as mockito from 'ts-mockito';

// import * as model from '../model/model';
// import { Jdd } from '../model/model-jdd';
import { DataService } from '../service/data.service';
import { SauvegardeService } from '../service/sauvegarde.service';

describe('SauvegardeService', () => {

  let dataServiceMock: DataService;

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {

    // Creation du mock de DataService
    dataServiceMock = mockito.mock(DataService);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SauvegardeService,
        { provide: DataService, useValue: dataServiceMock }
      ]
    });
  });

  it('expects a GET request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    // Make an HTTP GET request, and expect that it return an object of the form {name: 'Test Data'}.
    http.get('/data').subscribe((data) => expect(data['name']).toEqual('Test Data'));

    // At this point, the request is pending, and no response has been sent. The next step is to expect that the request happened.
    const req = httpMock.expectOne('/data');

    // If no request with that URL was made, or if multiple requests match,
    // expectOne() would throw. However this test makes only one request to
    // this URL, so it will match and return a mock request. The mock request
    // can be used to deliver a response or make assertions against the
    // request. In this case, the test asserts that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Next, fulfill the request by transmitting a response.
    req.flush({ name: 'Test Data' });

    // Finally, assert that there are no outstanding requests.
    httpMock.verify();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});

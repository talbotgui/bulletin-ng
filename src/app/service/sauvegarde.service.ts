import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {EleveService} from '../service/eleve.service';
import * as model from '../model/model';

@Injectable()
export class SauvegardeService {

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  private headersJSON = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private eleveService: EleveService) {}

  getlisteSauvegardesDuServeur(): Observable<{fichiers: String[]}> {
    const corp = 'methode=liste';
    const params = {headers: this.headers};
    return this.http.post('http://192.168.1.52/download/upload.php', corp, params);
  }


  chargeAnneeDuFichier(fichier: String): void {
    const url = 'http://192.168.1.52/download/upload.php';
    const corp = 'methode=charge&nomFichier=' + fichier;
    const params = {headers: this.headers};
    this.http.post<model.Annee>(url, corp, params).subscribe(
      dataOk => {
        this.eleveService.setAnneeChargee(dataOk);
      }
    );
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {DataService} from '../service/data.service';
import * as model from '../model/model';

@Injectable()
export class SauvegardeService {

  private readonly serveurUrl = 'http://192.168.1.52/download/upload.php';
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  private readonly headersJSON = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private dataService: DataService) {}

  /**
   * Récupère la liste des fichiers de sauvegarde disponibles sur le serveur
   */
  getlisteSauvegardesDuServeur(): Observable<{fichiers: string[]}> {
    const corp = 'methode=liste';
    const params = {headers: this.headers};
    return this.http.post(this.serveurUrl, corp, params);
  }

  /**
   * Charge le contenu d'un fichier et l'envoie au service "eleveService.setAnneeChargee"
   */
  chargeAnneeDuFichier(fichier: string): void {
    const corp = 'methode=charge&nomFichier=' + fichier;
    const params = {headers: this.headers};
    this.http.post<model.Annee>(this.serveurUrl, corp, params).subscribe(
      dataOk => {
        // Les MAP sont chargées comme des objets classiques avec des attributs. Donc reconstruction manuelle des MAP
        const mapLibelleStatutEleve: Map<string, string> = new Map<string, string>();
        for (let k in dataOk.mapLibelleStatutEleve) {
          if (dataOk.mapLibelleStatutEleve.hasOwnProperty(k)) {
            mapLibelleStatutEleve.set(k, dataOk.mapLibelleStatutEleve[k]);
          }
        }
        dataOk.mapLibelleStatutEleve = mapLibelleStatutEleve;
        const mapLibelleNotes: Map<string, string> = new Map<string, string>();
        for (let k in dataOk.mapLibelleNotes) {
          if (dataOk.mapLibelleNotes.hasOwnProperty(k)) {
            mapLibelleNotes.set(k, dataOk.mapLibelleNotes[k]);
          }
        }
        dataOk.mapLibelleNotes = mapLibelleNotes;

        // Sauvegarde de l'instance dans le service DataService
        this.dataService.setAnneeChargee(dataOk);
      }
    );
  }
}

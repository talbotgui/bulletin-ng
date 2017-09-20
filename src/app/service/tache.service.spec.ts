import { MdSnackBar } from '@angular/material';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';
import { TacheService } from '../service/tache.service';

describe('TacheService', () => {

  let dataRepositoryMock: DataRepository;
  let lectureServiceMock: LectureService;
  let tacheService: TacheService;

  beforeAll(() => {
    // Creation du mock de DataService
    dataRepositoryMock = mockito.mock(DataRepository);
    lectureServiceMock = mockito.mock(LectureService);
  });

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {

    // Reset des mock
    mockito.reset(dataRepositoryMock);
    mockito.reset(lectureServiceMock);

    // Récupération des instances de composants
    tacheService = new TacheService(mockito.instance(dataRepositoryMock), mockito.instance(lectureServiceMock));
  });

  it('Ajouter tache', () => {

    // Arrange
    const liste: model.Tache[] = [];
    const annee = new model.Annee();
    annee.taches = liste;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    tacheService.ajouterTache(new model.Tache('titre', []));

    // Assert
    expect(liste.length).toBe(1);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('Supprimer une tache', () => {

    // Arrange
    const liste: model.Tache[] = [];
    liste.push(new model.Tache('titre1', []));
    liste.push(new model.Tache('titre2', []));
    const annee = new model.Annee();
    annee.taches = liste;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    tacheService.supprimerTache(liste[0]);

    // Assert
    expect(liste.length).toBe(1);
    expect(liste[0].titre).toBe('titre2');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('Supprimer toutes les taches', () => {

    // Arrange
    const liste: model.Tache[] = [];
    liste.push(new model.Tache('titre1', []));
    liste.push(new model.Tache('titre2', []));
    const annee = new model.Annee();
    annee.taches = liste;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    tacheService.supprimerTache(liste[0]);
    tacheService.supprimerTache(liste[0]);

    // Assert
    expect(liste.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
  });

  it('Dupliquer une tache', () => {

    // Arrange
    const tache = new model.Tache('titre1', [new model.Echeance('e1', new Date()), new model.Echeance('e2', new Date()), new model.Echeance('e3', new Date())]);
    tache.echeances[0].termine = true;

    // Act
    const resultat = tacheService.dupliquerTache(tache);

    // Assert
    expect(resultat).not.toBe(tache);
    expect(resultat.titre).not.toBe(tache.titre);
    expect(resultat.titre.indexOf(tache.titre)).toBeTruthy();
    expect(resultat.echeances).not.toBe(tache.echeances);
    expect(resultat.echeances.length).toBe(tache.echeances.length);
    expect(resultat.echeances[0]).not.toBe(tache.echeances[0]);
    expect(resultat.echeances[0].nom).toBe(tache.echeances[0].nom);
    expect(resultat.echeances[0].termine).toBeFalsy();
  });
});

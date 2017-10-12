import { MatSnackBar } from '@angular/material';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';
import { JournalService } from '../service/journal.service';

describe('JournalService', () => {

  let dataRepositoryMock: DataRepository;
  let lectureServiceMock: LectureService;
  let snackBarMock: MatSnackBar;
  let journalService: JournalService;

  beforeAll(() => {
    // Creation du mock de DataService
    dataRepositoryMock = mockito.mock(DataRepository);
    lectureServiceMock = mockito.mock(LectureService);
    snackBarMock = mockito.mock(MatSnackBar);
  });

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {

    // Reset des mock
    mockito.reset(dataRepositoryMock);
    mockito.reset(lectureServiceMock);
    mockito.reset(snackBarMock);

    // Récupération des instances de composants
    journalService = new JournalService(mockito.instance(dataRepositoryMock), mockito.instance(lectureServiceMock), mockito.instance(snackBarMock));
  });

  it('Ajouter journal quand déjà existant', () => {

    // Arrange
    const journalExistant = new model.Journal();
    journalExistant.date = new Date();
    journalExistant.remarque = 'journal déjà existant';
    mockito.when(lectureServiceMock.getJournal(mockito.anything())).thenReturn(journalExistant);

    // Act
    const journalRetourne = journalService.ajouterJournal(journalExistant.date);

    // Assert
    expect(journalRetourne).toBe(journalExistant);
    mockito.verify(lectureServiceMock.getJournal(mockito.anything())).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('Ajouter journal non existant', () => {

    // Arrange
    const date = new Date();
    const annee = new model.Annee();
    annee.journal = [];
    // mockito.when(lectureServiceMock.getJournal(mockito.anything())).thenReturn(undefined);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    const journalRetourne = journalService.ajouterJournal(date);

    // Assert
    expect(journalRetourne.date).toBe(date);
    mockito.verify(lectureServiceMock.getJournal(mockito.anything())).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('Dupliquer un journal quand il en existe déjà un à la date cible', () => {

    // Arrange
    const dateCible = new Date();
    const journalExistant = new model.Journal();
    journalExistant.date = dateCible;
    journalExistant.remarque = 'journal déjà existant';
    const journalAdupliquer = new model.Journal();
    journalAdupliquer.remarque = 'journal à dupliquer';
    mockito.when(lectureServiceMock.getJournal(mockito.anything())).thenReturn(journalExistant);

    // Act
    journalService.dupliquerJournal(journalAdupliquer, dateCible);

    // Assert
    mockito.verify(lectureServiceMock.getJournal(mockito.anything())).once();
    mockito.verify(snackBarMock.open(mockito.anything(), undefined, mockito.anything())).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('Dupliquer un journal ', () => {

    // Arrange
    const dateCible = new Date();
    const annee = new model.Annee();
    annee.journal = [];
    const journalAdupliquer = new model.Journal();
    journalAdupliquer.remarque = 'journal à dupliquer';
    journalAdupliquer.temps = [];
    journalAdupliquer.temps.push(new model.Temps());
    // mockito.when(lectureServiceMock.getJournal(mockito.anything())).thenReturn(undefined);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    journalService.dupliquerJournal(journalAdupliquer, dateCible);

    // Assert
    mockito.verify(lectureServiceMock.getJournal(mockito.anything())).twice();
    mockito.verify(snackBarMock.open(mockito.anything(), undefined, mockito.anything())).never();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('Dupliquer un temps sans journal à la date cible ', () => {

    // Arrange
    const dateCible = new Date();
    const tempsAdupliquer = new model.Temps();
    tempsAdupliquer.commentaire = 'Temps à dupliquer';
    tempsAdupliquer.competences = ['a', 'b', 'c'];
    tempsAdupliquer.debut = '00h00';
    tempsAdupliquer.eleves = ['q', 's', 'd'];
    tempsAdupliquer.fin = '00h00';
    tempsAdupliquer.nom = 'UnTemps';
    tempsAdupliquer.type = 'typeDeTemps';
    // mockito.when(lectureServiceMock.getJournal(mockito.anything())).thenReturn(undefined);

    // Act
    journalService.dupliquerTemps(tempsAdupliquer, dateCible);

    // Assert
    mockito.verify(lectureServiceMock.getJournal(mockito.anything())).once();
    mockito.verify(snackBarMock.open(mockito.anything(), undefined, mockito.anything())).once();
  });

  it('Dupliquer un temps avec un journal à la date cible ', () => {

    // Arrange
    const dateCible = new Date();
    const tempsAdupliquer = new model.Temps();
    tempsAdupliquer.commentaire = 'Temps à dupliquer';
    tempsAdupliquer.competences = ['a', 'b', 'c'];
    tempsAdupliquer.debut = '00h00';
    tempsAdupliquer.eleves = ['q', 's', 'd'];
    tempsAdupliquer.fin = '00h00';
    tempsAdupliquer.nom = 'UnTemps';
    tempsAdupliquer.type = 'typeDeTemps';
    const journalCible = new model.Journal();
    mockito.when(lectureServiceMock.getJournal(mockito.anything())).thenReturn(journalCible);

    // Act
    journalService.dupliquerTemps(tempsAdupliquer, dateCible);

    // Assert
    mockito.verify(lectureServiceMock.getJournal(mockito.anything())).once();
    mockito.verify(snackBarMock.open(mockito.anything(), undefined, mockito.anything())).never();
    expect(journalCible.temps.length).toBe(1);
    expect(journalCible.temps[0].nom).toBe(tempsAdupliquer.nom);
  });
});

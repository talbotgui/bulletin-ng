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
import { LectureService } from '../service/lecture.service';
import { NoteService } from '../service/note.service';
import { Utils } from './utils';

describe('NoteService', () => {

  let dataRepositoryMock: DataRepository;
  let lectureServiceMock: LectureService;
  let noteService: NoteService;

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
    noteService = new NoteService(mockito.instance(dataRepositoryMock), mockito.instance(lectureServiceMock));
  });

  it('calculerListeLigneTableauDeBord renvoie des lignes avec une année et des paramètres (1ère période)', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    const libelleComplet = 'Compétences associées > CYCLE 2 (CP-CE2) > Français > Comprendre et s\'exprimer à l\'oral';
    const mapCompetence = new Map<string, model.Competence>();
    for (const competence of annee.competences) {
      mapCompetence.set(competence.id, competence);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getMapCompetences()).thenReturn(mapCompetence);
    mockito.when(lectureServiceMock.getPeriodeSuivante(mockito.anything())).thenReturn(annee.periodes[1]);
    mockito.when(lectureServiceMock.getListeNote()).thenReturn(annee.notes);
    mockito.when(lectureServiceMock.getLibelleCompletCompetence('j1_2')).thenReturn(libelleComplet);

    // Act
    const resultat = noteService.calculerListeLigneTableauDeBord(annee.eleves[1], annee.periodes[0]);

    // Assert
    expect(resultat.length).toBe(9);
    expect(resultat[0].nomDomaine).toBe(libelleComplet);
    expect(resultat[0].sousLignes.length).toBe(1);
    expect(resultat[0].sousLignes[0].constatation).not.toBeNull();
  });

  it('calculerListeLigneTableauDeBord renvoie des lignes avec une année et des paramètres (dernière période)', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    const libelleComplet = 'Compétences travaillées > CYCLE 2 > Questionner le monde > Imaginer, réaliser';
    const mapCompetence = new Map<string, model.Competence>();
    for (const competence of annee.competences) {
      mapCompetence.set(competence.id, competence);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getMapCompetences()).thenReturn(mapCompetence);
    mockito.when(lectureServiceMock.getPeriodeSuivante(mockito.anything())).thenReturn(undefined);
    mockito.when(lectureServiceMock.getListeNote()).thenReturn(annee.notes);
    mockito.when(lectureServiceMock.getLibelleCompletCompetence('W52')).thenReturn(libelleComplet);

    // Act
    const resultat = noteService.calculerListeLigneTableauDeBord(annee.eleves[1], annee.periodes[annee.periodes.length - 1]);

    // Assert
    expect(resultat.length).toBe(1);
    expect(resultat[0].nomDomaine).toBe(libelleComplet);
    expect(resultat[0].sousLignes.length).toBe(1);
    expect(resultat[0].sousLignes[0].aide).toBeUndefined();
    expect(resultat[0].sousLignes[0].constatation).not.toBeUndefined();
  });

  it('supprimeNoteDepuisTdb sans lignes', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const idDomaine: string = annee.competences[3].id;
    const nomDomaine: string = annee.competences[3].text;
    const constatations: model.Note[] = [];
    const aides: model.Note[] = [];
    const mapCompetences = new Map<string, model.Competence>();
    for (const competence of annee.competences) {
      mapCompetences.set(competence.id, competence);
    }
    const idEleve: string = annee.eleves[1].id;
    const periodeEvaluee: model.Periode = annee.periodes[0];
    const ligne = new model.LigneTableauDeBord(idDomaine, nomDomaine, constatations, aides, mapCompetences, idEleve, periodeEvaluee);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], false);

    // Assert
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('supprimeNoteDepuisTdb avec une ligne contenant aide et constat', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    const ligne = Utils.prepareLigne(annee);

    // Act
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], false);

    // Assert
    expect(annee.notes.length).toBe(1);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });
  it('supprimeNoteDepuisTdb avec une ligne contenant aide et constat', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    const ligne = Utils.prepareLigne(annee);

    // Act
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], false);
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], true);

    // Assert
    expect(annee.notes.length).toBe(0);
    expect(ligne.sousLignes.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
  });

});


import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { donnees } from './donneesDeTest/donnees08AvecBeaucoupDeNotes';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';
import { NoteService } from '../service/note.service';
import { UtilsTest } from './utilsTest';

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

    // Creation de l'environnement de test du composant
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, BrowserAnimationsModule],
      providers: [
        NoteService,
        { provide: DataRepository, useValue: mockito.instance(dataRepositoryMock) },
        { provide: LectureService, useValue: mockito.instance(lectureServiceMock) }
      ]
    }).compileComponents();

    // Récupération des instances de composants
    noteService = TestBed.get(NoteService);
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
    mockito.when(lectureServiceMock.getLibelleCompletCompetence(mockito.anything())).thenReturn(libelleComplet);

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
    expect(resultat[0].sousLignes[0].proposition).toBeUndefined();
    expect(resultat[0].sousLignes[0].constatation).not.toBeUndefined();
  });

  it('supprimeNoteDepuisTdb sans lignes', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const idDomaine: string = annee.competences[3].id;
    const nomDomaine: string = annee.competences[3].text;
    const constatations: model.Note[] = [];
    const propositions: model.Note[] = [];
    const mapCompetences = new Map<string, model.Competence>();
    for (const competence of annee.competences) {
      mapCompetences.set(competence.id, competence);
    }
    const idEleve: string = annee.eleves[1].id;
    const periodeEvaluee: model.Periode = annee.periodes[0];
    const ligne = new model.LigneTableauDeBord(idDomaine, nomDomaine, constatations, propositions, mapCompetences, idEleve, periodeEvaluee);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], false);

    // Assert
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('supprimeNoteDepuisTdb avec une ligne contenant proposition et constat', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    const ligne = UtilsTest.prepareLignePourTest(annee);

    // Act
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], false);

    // Assert
    expect(annee.notes.length).toBe(1);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('supprimeNoteDepuisTdb avec une ligne contenant proposition et constat', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    const ligne = UtilsTest.prepareLignePourTest(annee);

    // Act
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], false);
    noteService.supprimeNoteDepuisTdb(ligne, ligne.sousLignes[0], true);

    // Assert
    expect(annee.notes.length).toBe(0);
    expect(ligne.sousLignes.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
  });

  it('ajouteNoteDepuisTdb sur periode Evaluée n°1', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const idEleve = 'idEleve';
    const competence = annee.competences[3];
    const periodeEvaluee = annee.periodes[0];
    const ligne = new model.LigneTableauDeBord(competence.id, '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getCompetence(competence.id)).thenReturn(competence);

    // Act
    noteService.ajouteNoteDepuisTdb(ligne, true);

    // Assert
    expect(annee.notes.length).toBe(1);
    expect(ligne.sousLignes.length).toBe(1);
    expect(ligne.sousLignes[0].constatation).toBeTruthy();
    const nouvelleNote: model.Note = ligne.sousLignes[0].constatation as model.Note;
    expect(nouvelleNote.idItem).toBe(competence.id);
    expect(nouvelleNote.idEleve).toBe(idEleve);
    expect(nouvelleNote.date).toBe(periodeEvaluee.debut);
    mockito.verify(lectureServiceMock.getPeriodeSuivante(mockito.anything())).never();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
    mockito.verify(lectureServiceMock.getCompetence(competence.id)).once();
  });

  it('ajouteNoteDepuisTdb sur periode Evaluée n°5', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const idEleve = 'idEleve';
    const competence = annee.competences[3];
    const periodeEvaluee = annee.periodes[4];
    const ligne = new model.LigneTableauDeBord(competence.id, '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getCompetence(competence.id)).thenReturn(competence);

    // Act
    noteService.ajouteNoteDepuisTdb(ligne, true);

    // Assert
    expect(annee.notes.length).toBe(1);
    expect(ligne.sousLignes.length).toBe(1);
    const nouvelleNote: model.Note = ligne.sousLignes[0].constatation as model.Note;
    expect(nouvelleNote.idItem).toBe(competence.id);
    expect(nouvelleNote.idEleve).toBe(idEleve);
    expect(nouvelleNote.date).toBe(periodeEvaluee.debut);
    mockito.verify(lectureServiceMock.getPeriodeSuivante(mockito.anything())).never();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
    mockito.verify(lectureServiceMock.getCompetence(competence.id)).once();
  });

  it('ajouteNoteDepuisTdb sur periode préparée quand la période évaluée est la n°1', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const idEleve = 'idEleve';
    const competence = annee.competences[3];
    const periodeEvaluee = annee.periodes[0];
    const ligne = new model.LigneTableauDeBord(competence.id, '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getCompetence(competence.id)).thenReturn(competence);
    mockito.when(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).thenReturn(annee.periodes[1]);

    // Act
    noteService.ajouteNoteDepuisTdb(ligne, false);

    // Assert
    expect(annee.notes.length).toBe(1);
    expect(ligne.sousLignes.length).toBe(1);
    const nouvelleNote: model.Note = ligne.sousLignes[0].proposition as model.Note;
    expect(nouvelleNote.idItem).toBe(competence.id);
    expect(nouvelleNote.idEleve).toBe(idEleve);
    expect(nouvelleNote.date).toBe(annee.periodes[1].debut);
    mockito.verify(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
    mockito.verify(lectureServiceMock.getCompetence(competence.id)).once();
  });

  it('ajouteNoteDepuisTdb sur periode préparée quand la période évaluée est la n°5', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const idEleve = 'idEleve';
    const competence = annee.competences[3];
    const periodeEvaluee = annee.periodes[4];
    const ligne = new model.LigneTableauDeBord(competence.id, '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getCompetence(competence.id)).thenReturn(competence);
    mockito.when(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).thenReturn(undefined);

    // Act
    noteService.ajouteNoteDepuisTdb(ligne, false);

    // Assert
    expect(annee.notes.length).toBe(0);
    expect(ligne.sousLignes.length).toBe(0);
    mockito.verify(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
    mockito.verify(lectureServiceMock.getCompetence(competence.id)).never();
  });

  it('creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente sur la période 5', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const periodeEvaluee = annee.periodes[4];
    const ligne = new model.LigneTableauDeBord('', '', [], [], new Map<string, model.Competence>(), '', periodeEvaluee);
    const sousLigne = new model.SousLigneTableauDeBord();
    ligne.sousLignes.push(sousLigne);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).thenReturn(undefined);

    // Act
    noteService.creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(ligne, sousLigne);

    // Assert
    expect(annee.notes.length).toBe(0);
    expect(ligne.sousLignes.length).toBe(1);
    expect(ligne.sousLignes[0].proposition).toBeFalsy();
    mockito.verify(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente OK sur la période 1', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const periodeEvaluee = annee.periodes[1];
    const periodePreparee = annee.periodes[2];
    const competence = annee.competences[30];
    const idEleve = 'idEleve';
    const ligne = new model.LigneTableauDeBord('', '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    const sousLigne = new model.SousLigneTableauDeBord(competence, new model.Note('', idEleve, competence.id));
    ligne.sousLignes.push(sousLigne);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    mockito.when(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).thenReturn(periodePreparee);

    // Act
    noteService.creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(ligne, sousLigne);

    // Assert
    expect(annee.notes.length).toBe(1);
    expect(ligne.sousLignes.length).toBe(1);
    expect(ligne.sousLignes[0].proposition).toBeTruthy();
    const nouvelleNote = ligne.sousLignes[0].proposition as model.Note;
    expect(nouvelleNote.idItem).toBe(competence.id);
    expect(nouvelleNote.date).toBe(periodePreparee.debut);
    expect(nouvelleNote.idEleve).toBe(idEleve);
    mockito.verify(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente KO déjà une note dans la sous-ligne', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const periodeEvaluee = annee.periodes[1];
    const periodePreparee = annee.periodes[2];
    const competence = annee.competences[30];
    const idEleve = 'idEleve';
    const ligne = new model.LigneTableauDeBord('', '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    const sousLigne = new model.SousLigneTableauDeBord(competence, new model.Note('', idEleve, competence.id), new model.Note('', idEleve, competence.id));
    ligne.sousLignes.push(sousLigne);
    mockito.when(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).thenReturn(periodePreparee);

    // Act
    noteService.creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(ligne, sousLigne);

    // Assert
    expect(annee.notes.length).toBe(0);
    expect(ligne.sousLignes.length).toBe(1);
    mockito.verify(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente KO déjà une note dans une autre sous-ligne', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    annee.notes = [];
    const periodeEvaluee = annee.periodes[1];
    const periodePreparee = annee.periodes[2];
    const competence = annee.competences[30];
    const idEleve = 'idEleve';
    const ligne = new model.LigneTableauDeBord('', '', [], [], new Map<string, model.Competence>(), idEleve, periodeEvaluee);
    const sousLigne = new model.SousLigneTableauDeBord(competence, new model.Note('', idEleve, competence.id));
    ligne.sousLignes.push(sousLigne);
    ligne.sousLignes.push(new model.SousLigneTableauDeBord(competence, undefined, new model.Note('', idEleve, competence.id)));
    mockito.when(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).thenReturn(periodePreparee);

    // Act
    noteService.creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(ligne, sousLigne);

    // Assert
    expect(annee.notes.length).toBe(0);
    expect(ligne.sousLignes.length).toBe(2);
    expect(ligne.sousLignes[0].proposition).toBeFalsy();
    mockito.verify(lectureServiceMock.getPeriodeSuivante(periodeEvaluee)).once();
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });
});

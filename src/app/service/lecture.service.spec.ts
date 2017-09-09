import { MdSnackBar } from '@angular/material';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';

describe('LectureService', () => {

  let dataRepositoryMock: DataRepository;
  let lectureService: LectureService;

  beforeAll(() => {
    // Creation du mock de DataService
    dataRepositoryMock = mockito.mock(DataRepository);
  });

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {

    // Reset des mock
    mockito.reset(dataRepositoryMock);

    // Récupération des instances de composants
    lectureService = new LectureService(mockito.instance(dataRepositoryMock));
  });

  it('les services renvoient l\'erreur si aucune donnée n\'est chargée', () => {

    // Arrange
    const erreur = new ReferenceError(DataRepository.MESSAGE_ERREUR_REFERENCE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenThrow(erreur);

    // Act & assert
    expect(() => { lectureService.getListeTaches(); }).toThrow(erreur);
    expect(() => { lectureService.getlisteTypeDeTemps(); }).toThrow(erreur);
    expect(() => { lectureService.getJournal(new Date()); }).toThrow(erreur);
    expect(() => { lectureService.getCompetence(''); }).toThrow(erreur);
    expect(() => { lectureService.getLibelleCompletCompetence(''); }).toThrow(erreur);
    expect(() => { lectureService.getListeCompetencesEnfant(''); }).toThrow(erreur);
    expect(() => { lectureService.getEleve(''); }).toThrow(erreur);
    expect(() => { lectureService.getListeEleve(); }).toThrow(erreur);
    expect(() => { lectureService.getListePeriode(); }).toThrow(erreur);
    expect(() => { lectureService.getListeNote(); }).toThrow(erreur);
    expect(() => { lectureService.getPeriode(0); }).toThrow(erreur);
    expect(() => { lectureService.getPeriodeSuivante(new model.Periode()); }).toThrow(erreur);
    expect(() => { lectureService.getListeEleveActif(); }).toThrow(erreur);
    expect(() => { lectureService.getListeCompetence(); }).toThrow(erreur);
    expect(() => { lectureService.getMapLibelleNote(); }).toThrow(erreur);
    expect(() => { lectureService.getMapLibelleStatutEleveMap(); }).toThrow(erreur);
  });

  it('les services de renvoi simple', () => {

    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act & assert
    expect(lectureService.getListeTaches()).toBe(annee.taches);
    expect(lectureService.getlisteTypeDeTemps()).toBe(annee.libellesTypeTempsJournal);
    expect(lectureService.getListeEleve()).toBe(annee.eleves);
    expect(lectureService.getListePeriode()).toBe(annee.periodes);
    expect(lectureService.getListeNote()).toBe(annee.notes);
    expect(lectureService.getListeCompetence()).toBe(annee.competences);
    expect(lectureService.getMapLibelleNote()).toBe(annee.mapLibelleNotes);
    expect(lectureService.getMapLibelleStatutEleveMap()).toBe(annee.mapLibelleStatutEleveMap);
  });

  it('getJournal inexistant', () => {
    //
    const date = new Date();
    const annee = new model.Annee();
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getJournal(date);
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getJournal date trouvée', () => {
    //
    const date = new Date();
    const journal = new model.Journal();
    journal.date = date;
    journal.remarque = 'monJournal';
    const annee = new model.Annee();
    annee.journal.push(journal);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getJournal(date);
    //
    expect(resultat).toBe(journal);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getJournal date trouvée dans le cache', () => {
    //
    const date = new Date();
    const journal = new model.Journal();
    journal.date = date;
    journal.remarque = 'monJournal';
    const annee = new model.Annee();
    annee.journal.push(journal);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    lectureService.getJournal(date);

    //
    const resultat = lectureService.getJournal(date);
    //
    expect(resultat).toBe(journal);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetence inexistant', () => {
    //
    const idCompetence = 'idCompetence';
    const annee = new model.Annee();
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetence(idCompetence);
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetence id trouvé', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence = annee.competences[0].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetence(idCompetence);
    //
    expect(resultat).toBe(annee.competences[0]);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetence date trouvée dans le cache', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence = annee.competences[0].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    lectureService.getCompetence(idCompetence);

    //
    const resultat = lectureService.getCompetence(idCompetence);
    //
    expect(resultat).toBe(annee.competences[0]);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getLibelleCompletCompetence inexistant', () => {
    //
    const idCompetence = 'idCompetence';
    const annee = new model.Annee();
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getLibelleCompletCompetence(idCompetence);
    //
    expect(resultat).toBe('');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getLibelleCompletCompetence id trouvé sans enfant', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence = annee.competences[0].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getLibelleCompletCompetence(idCompetence);
    //
    expect(resultat).toBe(annee.competences[0].text);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getLibelleCompletCompetence id trouvé avec enfant', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence1 = annee.competences[0].id;
    const idCompetence2 = annee.competences[1].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getLibelleCompletCompetence(idCompetence2);
    //
    expect(resultat).toBe(annee.competences[0].text + ' > ' + annee.competences[1].text);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getLibelleCompletCompetence id trouvé avec enfant et racine', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence1 = annee.competences[0].id;
    const idCompetence2 = annee.competences[1].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getLibelleCompletCompetence(idCompetence2, idCompetence1);
    //
    expect(resultat).toBe(annee.competences[1].text);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getLibelleCompletCompetence id trouvé avec enfant Et cache', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence1 = annee.competences[0].id;
    const idCompetence2 = annee.competences[1].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    lectureService.getLibelleCompletCompetence(idCompetence2);
    //
    const resultat = lectureService.getLibelleCompletCompetence(idCompetence2);
    //
    expect(resultat).toBe(annee.competences[0].text + ' > ' + annee.competences[1].text);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getListeCompetencesEnfant inexistant', () => {
    //
    const idCompetence = 'idCompetence';
    const annee = new model.Annee();
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getListeCompetencesEnfant(idCompetence);
    //
    expect(resultat.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getListeCompetencesEnfant id trouvé', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence1 = annee.competences[0].id;
    const idCompetence2 = annee.competences[1].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getListeCompetencesEnfant(idCompetence1);
    //
    expect(resultat.length).toBe(1);
    expect(resultat[0]).toBe(annee.competences[1]);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetence date trouvée dans le cache', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_DEUX_COMPETENCES);
    const idCompetence1 = annee.competences[0].id;
    const idCompetence2 = annee.competences[1].id;
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    lectureService.getListeCompetencesEnfant(idCompetence1);
    //
    const resultat = lectureService.getListeCompetencesEnfant(idCompetence1);
    //
    expect(resultat.length).toBe(1);
    expect(resultat[0]).toBe(annee.competences[1]);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getPeriode(0) sans périodes', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getPeriode(0);
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getPeriode(10) avec 5 périodes', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getPeriode(10);
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getPeriode(1) avec 5 périodes', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getPeriode(1);
    //
    expect(resultat).toBe(annee.periodes[1]);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getPeriodeSuivante(0) sans périodes', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getPeriode(0);
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getPeriodeSuivante avec une période invalide', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getPeriodeSuivante(new model.Periode());
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getPeriodeSuivante avec 5 périodes', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getPeriodeSuivante(annee.periodes[2]);
    //
    expect(resultat).toBe(annee.periodes[3]);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getListeEleveActif', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getListeEleveActif();
    //
    expect(resultat.length).toBe(3);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getEleve sans élèves', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getEleve('idEleve');
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getEleve sans le bon élève', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getEleve('idEleve');
    //
    expect(resultat).toBe(undefined);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getEleve avec le bon élève', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    const eleve = annee.eleves[2];
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getEleve(eleve.id);
    //
    expect(resultat).toBe(eleve);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte texte undefined', () => {
    //
    //
    const resultat = lectureService.getCompetenceParTexte(undefined);
    //
    expect(resultat.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('getCompetenceParTexte texte vide', () => {
    //
    //
    const resultat = lectureService.getCompetenceParTexte('');
    //
    expect(resultat.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).never();
  });

  it('getCompetenceParTexte retourneTout', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('C');
    //
    expect(resultat.length).toBe(annee.competences.length);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte retourne 1', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('1');
    //
    expect(resultat.length).toBe(1);
    expect(resultat[0].text).toBe('C1');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte retourne C1', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('C1');
    //
    expect(resultat.length).toBe(1);
    expect(resultat[0].text).toBe('C1');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte case insensitive', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('c1');
    //
    expect(resultat.length).toBe(1);
    expect(resultat[0].text).toBe('C1');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });


  it('getCompetenceParTexte case insensitive', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('c 1');
    //
    expect(resultat.length).toBe(1);
    expect(resultat[0].text).toBe('C1');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte case insensitive', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('c 1 2');
    //
    expect(resultat.length).toBe(0);
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte avec mot absent', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    annee.competences = [];
    for (let i = 0; i < 10; i++) {
      const c = new model.Competence();
      c.id = '' + i;
      c.text = 'C' + i;
      annee.competences.push(c);
    }
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('c -2');
    //
    expect(resultat.length).toBe(annee.competences.length - 1);
    expect(resultat[0].text).toBe('C0');
    expect(resultat[1].text).toBe('C1');
    expect(resultat[2].text).toBe('C3');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

  it('getCompetenceParTexte avec compétence racine', () => {
    //
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    //
    const resultat = lectureService.getCompetenceParTexte('addition', 'j1_233');
    //
    expect(resultat.length).toBe(2);
    expect(resultat[0].id).toBe('j1_492');
    expect(resultat[1].id).toBe('j1_499');
    mockito.verify(dataRepositoryMock.getAnneeChargee()).once();
  });

});

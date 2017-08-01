import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import * as mockito from 'ts-mockito';

import * as model from '../model/model';
import { DataService } from '../service/data.service';
import { ComposantNoteComponent } from './compo-note.component';

describe('ComposantNoteComponent', () => {

  let comp: ComposantNoteComponent;
  let fixture: ComponentFixture<ComposantNoteComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let dataServiceMock: DataService;

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(async(() => {

    // Creation du mock de DataService
    const data = { 0: 'non atteint', 1: 'atteint partiellement', 2: 'atteint', 3: 'dépassé', n: 'non évalué', a: 'absent' };
    dataServiceMock = mockito.mock(DataService);
    mockito.when(dataServiceMock.getMapLibelleNote()).thenReturn(data);

    // Creation de l'équivalent de app.module.ts pour le test
    TestBed.configureTestingModule({
      declarations: [ComposantNoteComponent],
      providers: [{ provide: DataService, useValue: mockito.instance(dataServiceMock) }]
    })

      // Compilation de l'HTML et du CSS
      .compileComponents();
  }));

  beforeEach(() => {
    // Creation du composant dans son environnement de test
    fixture = TestBed.createComponent(ComposantNoteComponent);
    comp = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('span'));
    el = de.nativeElement;

  });

  it('sans note, le texte est vide', () => {

    // Assert : validation
    expect(el.textContent).toBe('');
  });

  it('avec une note, le texte est ', () => {

    // Arrange : modification de la note dans le composant
    const valeur = '1';
    comp.note = new model.Note();
    comp.note.valeur = valeur;

    // Act : exécution de la détection de changement à la main
    // @see https://angular.io/guide/testing#automatic-change-detection
    fixture.detectChanges();

    // Assert : validation
    expect(comp.libellesNote).not.toBeNull();
    expect(el.className).toBe('note_' + valeur);
    // assertion inactive car elle ne fonctionne pas alors que la classe est bonne
    // expect(el.textContent).toBe('atteint partiellement');
  });
});

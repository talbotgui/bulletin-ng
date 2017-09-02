import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import * as mockito from 'ts-mockito';
import { FormsModule } from '@angular/forms';

import * as model from '../model/model';
import { AttributesToMapPipe } from '../pipes.component';
import { LectureService } from '../service/lecture.service';
import { ComposantNoteComponent } from './compo-note.component';

describe('ComposantNoteComponent', () => {

  let comp: ComposantNoteComponent;
  let fixture: ComponentFixture<ComposantNoteComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let lectureServiceMock: LectureService;

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(async(() => {

    // Creation du mock de DataService
    const data = { 0: 'non atteint', 1: 'atteint partiellement', 2: 'atteint', 3: 'dépassé', n: 'non évalué', a: 'absent' };
    lectureServiceMock = mockito.mock(LectureService);
    mockito.when(lectureServiceMock.getMapLibelleNote()).thenReturn(data);

    // Creation de l'équivalent de app.module.ts pour le test
    TestBed.configureTestingModule({
      declarations: [ComposantNoteComponent, AttributesToMapPipe],
      providers: [{ provide: LectureService, useValue: mockito.instance(lectureServiceMock) }],
      imports: [FormsModule]
    })

      // Compilation de l'HTML et du CSS
      .compileComponents();
  }));

  beforeEach(() => {
    // Creation du composant dans son environnement de test
    fixture = TestBed.createComponent(ComposantNoteComponent);
    comp = fixture.componentInstance;
  });

  it('composant vide', () => {
    // Arrange

    // Assert : validation
    de = fixture.debugElement;
    el = de.nativeElement;
    expect(el.textContent).toBe('\n\n');
  });

  it('lecture seule sans note', () => {
    // Arrange
    comp.lectureSeule = true;

    // Act : exécution de la détection de changement à la main
    // @see https://angular.io/guide/testing#automatic-change-detection
    fixture.detectChanges();

    // Assert : validation
    de = fixture.debugElement;
    el = de.nativeElement;
    expect(el.textContent).toBe('\n\n');
  });

  it('lecture seule avec une note', () => {
    // Arrange
    comp.lectureSeule = true;
    comp.note = new model.Note('a');

    // Act : exécution de la détection de changement à la main
    // @see https://angular.io/guide/testing#automatic-change-detection
    fixture.detectChanges();

    // Assert : validation
    de = fixture.debugElement;
    el = de.nativeElement;
    expect(el.textContent).toBe('absent\n\n');
  });

  it('ecriture sans note', () => {
    // Arrange
    comp.lectureSeule = false;

    // Act : exécution de la détection de changement à la main
    // @see https://angular.io/guide/testing#automatic-change-detection
    fixture.detectChanges();

    // Assert : validation
    de = fixture.debugElement;
    el = de.nativeElement;
    expect(el.textContent).toBe('\n\n');
  });

  it('ecriture avec une note', () => {
    // Arrange
    comp.lectureSeule = false;
    comp.note = new model.Note('a');

    // Act : exécution de la détection de changement à la main
    // @see https://angular.io/guide/testing#automatic-change-detection
    fixture.detectChanges();

    // Assert : validation
    de = fixture.debugElement.query(By.css('select'));
    el = de.nativeElement;
    expect(el.children.length).toBe(6);
  });
});

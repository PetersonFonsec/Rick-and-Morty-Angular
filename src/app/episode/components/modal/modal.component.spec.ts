import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Episode } from '../../services/episode/episode.model';

import { ModalComponent } from './modal.component';

const EpisodeMock: Episode = {
  air_date: 'December 2, 2013',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
  ],
  created: '2017-11-10T12:56:33.798Z',
  episode: 'S01E01',
  id: 1,
  name: 'Pilot',
  url: 'https://rickandmortyapi.com/api/episode/1',
};

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: EpisodeMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

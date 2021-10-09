import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '../../services/location/location.model';

import { ModalComponent } from './modal.component';

const LocationMock: Location = {
  created: '2017-11-10T13:06:38.182Z',
  dimension: 'unknown',
  id: 2,
  name: 'Abadango',
  residents: ['https://rickandmortyapi.com/api/character/6'],
  type: 'Cluster',
  url: 'https://rickandmortyapi.com/api/location/2',
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
          useValue: LocationMock,
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

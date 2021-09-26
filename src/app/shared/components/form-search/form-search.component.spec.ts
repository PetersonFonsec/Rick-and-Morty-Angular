import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { FormSearchComponent } from './form-search.component';
import { FormSearchModule } from './form-search.module';

describe('FormSearchComponent', () => {
  let component: FormSearchComponent;
  let fixture: ComponentFixture<FormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSearchModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should trigger (@Output search) when input', fakeAsync(() => {
    let times = 0;
    component.search.subscribe(() => times++);
    const search = component.formGroup.get('search');
    search?.setValue('test');
    tick(500);
    expect(times).toEqual(1);
  }));

  it('Should trigger (@Output search) only one time when input very times in debouce time ', fakeAsync(() => {
    let times = 0;
    component.search.subscribe(() => times++);
    const search = component.formGroup.get('search');
    search?.setValue('t');
    search?.setValue('e');
    search?.setValue('s');
    search?.setValue('t');
    tick(500);
    expect(times).toEqual(1);
  }));

  it('Should emit (@Output search) with value to input search', (done) => {
    const searchValue = 'morty';
    component.search.subscribe((result) => {
      expect(result).toEqual(searchValue);
      done();
    });
    const search = component.formGroup.get('search');
    search?.setValue(searchValue);
  });
});

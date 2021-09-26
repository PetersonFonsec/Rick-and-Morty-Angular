import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});

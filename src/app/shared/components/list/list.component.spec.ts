import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(DOM) Should show loading when @Input loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const loading: HTMLElement =
      fixture.nativeElement.querySelector('.loading');
    expect(loading).toBeTruthy();
  });

  it('(DOM) Should show the list when @Input loading is false and showList is true', () => {
    component.loading = false;
    component.showList = true;
    fixture.detectChanges();
    const list: HTMLElement = fixture.nativeElement.querySelector('.list');
    expect(list).toBeTruthy();
  });

  it('(DOM) Should show empty list mensage', () => {
    component.loading = false;
    component.showList = false;
    fixture.detectChanges();
    const emptyList: HTMLElement =
      fixture.nativeElement.querySelector('.emptyList');
    expect(emptyList).toBeTruthy();
  });
});

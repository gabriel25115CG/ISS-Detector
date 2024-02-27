import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilTopComponent } from './accueil-top.component';

describe('AccueilTopComponent', () => {
  let component: AccueilTopComponent;
  let fixture: ComponentFixture<AccueilTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

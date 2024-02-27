import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPictureComponent } from './nasa-picture.component';

describe('NasaPictureComponent', () => {
  let component: NasaPictureComponent;
  let fixture: ComponentFixture<NasaPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

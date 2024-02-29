import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAUTComponent } from './home-aut.component';

describe('HomeAUTComponent', () => {
  let component: HomeAUTComponent;
  let fixture: ComponentFixture<HomeAUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAUTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

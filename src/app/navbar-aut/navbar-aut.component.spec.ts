import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAUTComponent } from './navbar-aut.component';

describe('NavbarAUTComponent', () => {
  let component: NavbarAUTComponent;
  let fixture: ComponentFixture<NavbarAUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAUTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarautComponent } from './navbaraut.component';

describe('NavbarautComponent', () => {
  let component: NavbarautComponent;
  let fixture: ComponentFixture<NavbarautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

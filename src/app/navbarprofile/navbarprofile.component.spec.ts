import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarprofileComponent } from './navbarprofile.component';

describe('NavbarprofileComponent', () => {
  let component: NavbarprofileComponent;
  let fixture: ComponentFixture<NavbarprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumwelcomComponent } from './forumwelcom.component';

describe('ForumwelcomComponent', () => {
  let component: ForumwelcomComponent;
  let fixture: ComponentFixture<ForumwelcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumwelcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumwelcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

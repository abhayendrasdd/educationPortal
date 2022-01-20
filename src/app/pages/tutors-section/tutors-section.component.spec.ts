import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsSectionComponent } from './tutors-section.component';

describe('TutorsSectionComponent', () => {
  let component: TutorsSectionComponent;
  let fixture: ComponentFixture<TutorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

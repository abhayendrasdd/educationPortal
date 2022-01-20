import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentProgramComponent } from './employment-program.component';

describe('EmploymentProgramComponent', () => {
  let component: EmploymentProgramComponent;
  let fixture: ComponentFixture<EmploymentProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGoalComponent } from './teams-goal.component';

describe('TeamsGoalComponent', () => {
  let component: TeamsGoalComponent;
  let fixture: ComponentFixture<TeamsGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdialogeComponent } from './admineditdialoge.component';

describe('AdmineditdialogeComponent', () => {
  let component: AdmineditdialogeComponent;
  let fixture: ComponentFixture<AdmineditdialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditdialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentdashboardComponent } from './incidentdashboard.component';

describe('IncidentdashboardComponent', () => {
  let component: IncidentdashboardComponent;
  let fixture: ComponentFixture<IncidentdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

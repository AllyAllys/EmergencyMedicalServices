import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentchartComponent } from './incidentchart.component';

describe('IncidentchartComponent', () => {
  let component: IncidentchartComponent;
  let fixture: ComponentFixture<IncidentchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

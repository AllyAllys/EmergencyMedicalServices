import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthstafftrackingdashboardComponent } from './healthstafftrackingdashboard.component';

describe('HealthstafftrackingdashboardComponent', () => {
  let component: HealthstafftrackingdashboardComponent;
  let fixture: ComponentFixture<HealthstafftrackingdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthstafftrackingdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthstafftrackingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

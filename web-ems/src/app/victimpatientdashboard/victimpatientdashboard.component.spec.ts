import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimpatientdashboardComponent } from './victimpatientdashboard.component';

describe('VictimpatientdashboardComponent', () => {
  let component: VictimpatientdashboardComponent;
  let fixture: ComponentFixture<VictimpatientdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimpatientdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimpatientdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

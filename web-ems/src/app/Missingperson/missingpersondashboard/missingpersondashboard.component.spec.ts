import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingpersondashboardComponent } from './missingpersondashboard.component';

describe('MissingpersondashboardComponent', () => {
  let component: MissingpersondashboardComponent;
  let fixture: ComponentFixture<MissingpersondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingpersondashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingpersondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

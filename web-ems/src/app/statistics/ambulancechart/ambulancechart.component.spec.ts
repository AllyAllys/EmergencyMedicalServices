import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancechartComponent } from './ambulancechart.component';

describe('AmbulancechartComponent', () => {
  let component: AmbulancechartComponent;
  let fixture: ComponentFixture<AmbulancechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulancechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulancechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

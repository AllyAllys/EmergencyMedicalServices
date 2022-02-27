import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofincidentchartComponent } from './typeofincidentchart.component';

describe('TypeofincidentchartComponent', () => {
  let component: TypeofincidentchartComponent;
  let fixture: ComponentFixture<TypeofincidentchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeofincidentchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofincidentchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

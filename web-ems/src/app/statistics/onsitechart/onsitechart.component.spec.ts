import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsitechartComponent } from './onsitechart.component';

describe('OnsitechartComponent', () => {
  let component: OnsitechartComponent;
  let fixture: ComponentFixture<OnsitechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsitechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsitechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

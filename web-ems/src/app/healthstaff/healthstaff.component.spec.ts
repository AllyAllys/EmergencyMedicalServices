import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthstaffComponent } from './healthstaff.component';

describe('HealthstaffComponent', () => {
  let component: HealthstaffComponent;
  let fixture: ComponentFixture<HealthstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

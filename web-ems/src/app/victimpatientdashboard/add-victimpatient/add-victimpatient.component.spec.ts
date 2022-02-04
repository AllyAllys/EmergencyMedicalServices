import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVictimpatientComponent } from './add-victimpatient.component';

describe('AddVictimpatientComponent', () => {
  let component: AddVictimpatientComponent;
  let fixture: ComponentFixture<AddVictimpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVictimpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVictimpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

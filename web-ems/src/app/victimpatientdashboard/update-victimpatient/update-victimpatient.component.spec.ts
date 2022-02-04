import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVictimpatientComponent } from './update-victimpatient.component';

describe('UpdateVictimpatientComponent', () => {
  let component: UpdateVictimpatientComponent;
  let fixture: ComponentFixture<UpdateVictimpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVictimpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVictimpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

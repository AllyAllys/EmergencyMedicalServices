import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsiteUPDATEComponent } from './onsite-update.component';

describe('OnsiteUPDATEComponent', () => {
  let component: OnsiteUPDATEComponent;
  let fixture: ComponentFixture<OnsiteUPDATEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsiteUPDATEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsiteUPDATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

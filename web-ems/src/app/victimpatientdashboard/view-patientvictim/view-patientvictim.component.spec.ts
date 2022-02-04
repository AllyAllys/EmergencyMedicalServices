import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientvictimComponent } from './view-patientvictim.component';

describe('ViewPatientvictimComponent', () => {
  let component: ViewPatientvictimComponent;
  let fixture: ComponentFixture<ViewPatientvictimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientvictimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientvictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingpersongenderchartComponent } from './missingpersongenderchart.component';

describe('MissingpersongenderchartComponent', () => {
  let component: MissingpersongenderchartComponent;
  let fixture: ComponentFixture<MissingpersongenderchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingpersongenderchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingpersongenderchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

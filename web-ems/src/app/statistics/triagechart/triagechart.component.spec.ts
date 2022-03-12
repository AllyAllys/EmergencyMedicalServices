import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriagechartComponent } from './triagechart.component';

describe('TriagechartComponent', () => {
  let component: TriagechartComponent;
  let fixture: ComponentFixture<TriagechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriagechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriagechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

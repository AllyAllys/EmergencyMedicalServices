import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderschartComponent } from './orderschart.component';

describe('OrderschartComponent', () => {
  let component: OrderschartComponent;
  let fixture: ComponentFixture<OrderschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderschartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

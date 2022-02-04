import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincidentformComponent } from './addincidentform.component';

describe('AddincidentformComponent', () => {
  let component: AddincidentformComponent;
  let fixture: ComponentFixture<AddincidentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddincidentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddincidentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateincidentformComponent } from './updateincidentform.component';

describe('UpdateincidentformComponent', () => {
  let component: UpdateincidentformComponent;
  let fixture: ComponentFixture<UpdateincidentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateincidentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateincidentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

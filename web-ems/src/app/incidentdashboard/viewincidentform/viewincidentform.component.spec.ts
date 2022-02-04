import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewincidentformComponent } from './viewincidentform.component';

describe('ViewincidentformComponent', () => {
  let component: ViewincidentformComponent;
  let fixture: ComponentFixture<ViewincidentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewincidentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewincidentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

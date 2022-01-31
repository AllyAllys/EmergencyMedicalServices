import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthstaffPostListComponent } from './healthstaff-post-list.component';

describe('HealthstaffPostListComponent', () => {
  let component: HealthstaffPostListComponent;
  let fixture: ComponentFixture<HealthstaffPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthstaffPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthstaffPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

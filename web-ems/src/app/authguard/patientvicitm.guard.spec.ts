import { TestBed } from '@angular/core/testing';

import { PatientvicitmGuard } from './patientvicitm.guard';

describe('PatientvicitmGuard', () => {
  let guard: PatientvicitmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientvicitmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

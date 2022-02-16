import { TestBed } from '@angular/core/testing';

import { OnsiteGuard } from './onsite.guard';

describe('OnsiteGuard', () => {
  let guard: OnsiteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnsiteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

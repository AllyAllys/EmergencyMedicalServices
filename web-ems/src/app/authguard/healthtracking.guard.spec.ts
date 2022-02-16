import { TestBed } from '@angular/core/testing';

import { HealthtrackingGuard } from './healthtracking.guard';

describe('HealthtrackingGuard', () => {
  let guard: HealthtrackingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HealthtrackingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

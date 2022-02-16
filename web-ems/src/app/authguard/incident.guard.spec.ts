import { TestBed } from '@angular/core/testing';

import { IncidentGuard } from './incident.guard';

describe('IncidentGuard', () => {
  let guard: IncidentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IncidentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

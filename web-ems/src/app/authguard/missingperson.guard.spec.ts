import { TestBed } from '@angular/core/testing';

import { MissingpersonGuard } from './missingperson.guard';

describe('MissingpersonGuard', () => {
  let guard: MissingpersonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MissingpersonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

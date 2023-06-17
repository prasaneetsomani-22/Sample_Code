import { TestBed } from '@angular/core/testing';

import { BackToLoginGuardGuard } from './back-to-login-guard.guard';

describe('BackToLoginGuardGuard', () => {
  let guard: BackToLoginGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackToLoginGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

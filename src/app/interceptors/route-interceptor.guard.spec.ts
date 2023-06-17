import { TestBed } from '@angular/core/testing';

import { RouteInterceptorGuard } from './route-interceptor.guard';

describe('RouteInterceptorGuard', () => {
  let guard: RouteInterceptorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteInterceptorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

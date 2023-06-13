import { TestBed } from '@angular/core/testing';

import { MovieBookingServiceService } from './movie-booking-service.service';

describe('MovieBookingServiceService', () => {
  let service: MovieBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// import { TestBed } from '@angular/core/testing';

// import { MovieBookingServiceService } from './movie-booking-service.service';

// describe('MovieBookingServiceService', () => {
//   let service: MovieBookingServiceService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(MovieBookingServiceService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieBookingServiceService } from './movie-booking-service.service';

describe('MovieBookingServiceService', () => {
  let service: MovieBookingServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieBookingServiceService]
    });

    service = TestBed.inject(MovieBookingServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a login request', () => {
    const credentials = { username: 'testuser', password: 'password' };
    const expectedResponse = 'Success';

    service.login(credentials).subscribe((response: string) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('http://localhost:5000/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(credentials);
    req.flush(expectedResponse);
  });

  it('should send a registration request', () => {
    const user = { username: 'testuser', email: 'test@example.com' };
    const expectedResponse = 'Success';

    service.register(user).subscribe((response: string) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('http://localhost:5000/register');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(user);
    req.flush(expectedResponse);
  });

  it('should send a request to get all movies', () => {
    const expectedResponse = [{ title: 'Movie 1' }, { title: 'Movie 2' }];

    service.getAllMovies().subscribe((response: any) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('http://localhost:5000/all');
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse);
  });

  it('should send a request to book tickets', () => {
    const ticket = { movieId: 1, seats: 2 };
    const expectedResponse = 'Success';

    service.bookTickets(ticket).subscribe((response: string) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('http://localhost:5000/bookTicket');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(ticket);
    req.flush(expectedResponse);
  });

  it('should send a request to add a movie', () => {
    const movie = { title: 'New Movie' };
    const expectedResponse = 'Success';

    service.addMovie(movie).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('http://localhost:5000/movieName/add');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(movie);
    req.flush(expectedResponse);
  });

  it('should send a request to search movies', () => {
    const query = 'action';
    const expectedResponse = [{ title: 'Movie 1' }, { title: 'Movie 2' }];

    service.searchMovies(query).subscribe((response: any) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`http://localhost:5000/movies/search/${query}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse);
  });

  it('should send a request to delete a movie', () => {
    const movieName = 'Movie 1';
    const theatreName = 'Theatre 1';
    const expectedResponse = 'Success';

    service.deleteMovie(movieName, theatreName).subscribe((response: string) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`http://localhost:5000/delete/${movieName}/${theatreName}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(expectedResponse);
  });

  it('should send a request to forget password', () => {
    const user = { email: 'test@example.com' };
    const expectedResponse = 'Success';

    service.forgetPassword(user).subscribe((response: string) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('http://localhost:5000/forgot');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(user);
    req.flush(expectedResponse);
  });

});



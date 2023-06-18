// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddMovieComponent } from './add-movie.component';

// describe('AddMovieComponent', () => {
//   let component: AddMovieComponent;
//   let fixture: ComponentFixture<AddMovieComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AddMovieComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AddMovieComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddMovieComponent } from './add-movie.component';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';
import { of } from 'rxjs';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;
  let movieBookingService: MovieBookingServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMovieComponent],
      imports: [HttpClientTestingModule],
      providers: [MovieBookingServiceService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    movieBookingService = TestBed.inject(MovieBookingServiceService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call addMovie method on form submission', () => {
    spyOn(movieBookingService, 'addMovie').and.returnValue(of('Movie added successfully'));
    spyOn(console, 'log');

    component.movie.id.movieName = 'Movie 1';
    component.movie.id.theatreName = 'Theatre 1';
    component.movie.allotedSeats = 100;

    component.onSubmit();

    expect(movieBookingService.addMovie).toHaveBeenCalledWith(component.movie);
    expect(console.log).toHaveBeenCalledWith('Movie added successfully');
  });
});


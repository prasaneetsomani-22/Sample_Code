import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-show-all-movies',
  templateUrl: './show-all-movies.component.html',
  styleUrls: ['./show-all-movies.component.css']
})
export class ShowAllMoviesComponent implements OnInit {
  movies:any;
  constructor(private servcie:MovieBookingServiceService,private route:Router) { }

  ngOnInit(): void {
    this.servcie.getAllMovies().subscribe((response:any)=>{
      console.log(response);
      this.movies=response;
    })
  }

  bookTicket(movieName:any,theatreName:any){
    console.log(movieName);
    this.route.navigate(['bookTicket',movieName,theatreName]);
  }

}

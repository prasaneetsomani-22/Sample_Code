import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  constructor(private route:Router,private activateRoute:ActivatedRoute,private service:MovieBookingServiceService) { }

  searchedMovies:any;
  query:any;

  ngOnInit(): void {
    this.query = this.activateRoute.snapshot.params['query'];
    this.service.searchMovies(this.query).subscribe((response)=>{
      console.log(response);
      this.searchedMovies = response;
    });
  }

  bookTicket(movieName:any,theatreName:any){
    console.log(movieName);
    this.route.navigate(['bookTicket',movieName,theatreName]);
  }

}

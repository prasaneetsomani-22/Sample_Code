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
  email="";
  ngOnInit(): void {
    this.query = this.activateRoute.snapshot.params['query'];
    this.service.searchMovies(this.query).subscribe((response)=>{
      console.log(response);
      this.searchedMovies = response;
      this.email = JSON.parse(localStorage.getItem('user') || '{}').email;
    });
  }

  bookTicket(movieName:any,theatreName:any){
    console.log(movieName);
    this.route.navigate(['bookTicket',movieName,theatreName]);
  }

  onDelete(movieName:String,theatreName:String){
    this.service.deleteMovie(movieName,theatreName).subscribe((response)=>{
      console.log(response);
      window.location.reload();
    })
  }

}

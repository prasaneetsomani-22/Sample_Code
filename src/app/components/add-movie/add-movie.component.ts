import { Component, OnInit } from '@angular/core';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private service:MovieBookingServiceService) { }

  

  movie={
    id:{
      movieName:"",
      theatreName:""
    },
    allotedSeats:null,
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addMovie(this.movie).subscribe((response)=>{
      console.log(response);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {

  movieName:any;
  theatreName:any;
  noOfSeats=null;
  seats="";
  constructor(private activatedRoute:ActivatedRoute,private service:MovieBookingServiceService) { }

  ticket = {
    ticketId:null,
    movieName:"",
    theatreName:"",
    noOfTickets:null,
    seats:[""]
  }

  ngOnInit(): void {
    this.movieName = this.activatedRoute.snapshot.params['movieName'],
    this.theatreName = this.activatedRoute.snapshot.params['theatreName'];
  }

  onSubmit(){
    this.ticket.movieName = this.movieName;
    this.ticket.theatreName = this.theatreName;
    this.ticket.noOfTickets = this.noOfSeats;
    let temp = this.seats.split(',');
    this.ticket.seats = temp;

    this.service.bookTickets(this.ticket).subscribe((response)=>{
      if(response==="Tickets unavailable"){
        alert("Ticekts are unavailable");
      }
      else{
        alert("Ticekts Booked SuccessFully");
      }
    });

  }

}

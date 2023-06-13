import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPassword="";
  user = {
    "loginId":null,
    "email":"",
    "firstname":"",
    "lastname":"",
    "password":"",
    "contactnumber":null
  }

  constructor(private service:MovieBookingServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.confirmPassword===this.user.password){
      this.service.register(this.user).subscribe((response)=>{
        localStorage.setItem('user',response.toString());
        this.route.navigate([`/showAllMovies`]);
      });
    }
    else{
      alert("Password and Confirm Password doest match.");
    }

    
  }

}

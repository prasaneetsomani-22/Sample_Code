import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:MovieBookingServiceService,private route:Router) { }
  isfailure = false;
  credentials={
    "email":null,
    "password":"",
  };

  ngOnInit(): void {
  }

  onSubmit(){
     this.service.login(this.credentials).subscribe((response)=>{
      if(response!="SomeThing went Wrong"){
        localStorage.setItem('user',response.toString());
        this.route.navigate([`/showAllMovies`]);

      }
      else{
        alert("Something Went Wrong");
      }
    
     });
  }

  

}

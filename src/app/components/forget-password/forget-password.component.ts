import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingServiceService } from 'src/app/service/movie-booking-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private service:MovieBookingServiceService,private route:Router) { }
  confirmPassword="";
  user={
    email:"",
    password:""
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.confirmPassword===this.user.password){
      this.service.forgetPassword(this.user).subscribe((response)=>{
        console.log(response);
        if(response=="Something Went Wrong"){
          alert("Something Went Wrong");
        }
        else{
          this.route.navigate(['/']);
        }
      });
    }  
    else{
      alert("Check ur Passwords");
    }  
  }

}

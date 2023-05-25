import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/services/registrationService/registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:RegistrationServiceService,private route:Router) { }
  isfailure = false;
  credentials={
    "subscriberId":null,
    "password":""
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.loginUser(this.credentials).subscribe((response)=>{
      console.log(response);
      if(response!=null){
        localStorage.setItem('user',JSON.stringify(response));
        this.route.navigate([`cards/${this.credentials.subscriberId}`]);
      }
      else{
        this.isfailure=true;
      }
    });
  }

}

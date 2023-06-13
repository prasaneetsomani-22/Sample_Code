import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }

  query="";
  email=null;

  ngOnInit(): void {
    this.email = JSON.parse(localStorage.getItem('user') || '{}').email;
  }

  onSearch(){
    if(this.query!=null && this.query.length!=0){
      this.route.navigate([`search/movies/${this.query}`]).then(()=>{
        window.location.reload();
      });
    }
  }

  onLogout(){
    localStorage.clear();
    this.route.navigate([`/`])
  }

}

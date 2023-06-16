import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieBookingServiceService {

  url = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  login(credentails:any){
    return this.http.post(`${this.url}/login`,credentails,{responseType:'text'});
  }

  register(user:any){
    return this.http.post(`${this.url}/register`,user,{responseType:'text'});
  }

  getAllMovies(){
    return this.http.get(`${this.url}/all`);
  }

  bookTickets(ticket:any){
    return this.http.post(`${this.url}/bookTicket`,ticket,{responseType:'text'});
  }

  addMovie(movie:any){
    return this.http.post(`${this.url}/movieName/add`,movie);
  }

  searchMovies(query:any){
    return this.http.get(`${this.url}/movies/search/${query}`);
  }

  deleteMovie(movieName:any,theatreName:any){
    return this.http.delete(`${this.url}/delete/${movieName}/${theatreName}`,{responseType:'text'});
  }

  forgetPassword(user:any){
    return this.http.post(`${this.url}/forgot`,user,{responseType:'text'});
  }

}

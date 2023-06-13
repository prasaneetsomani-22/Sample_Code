import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { ShowAllMoviesComponent } from './components/show-all-movies/show-all-movies.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full"
  },
  {
    path:"showAllMovies",
    component:ShowAllMoviesComponent,
    pathMatch:"full"
  },
  {
    path:"bookTicket/:movieName/:theatreName",
    component:BookTicketsComponent,
    pathMatch:"full"
  },
  {
    path:"addMovie",
    component:AddMovieComponent,
    pathMatch:"full"
  }
  ,{
    path:"search/movies/:query",
    component:SearchMoviesComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

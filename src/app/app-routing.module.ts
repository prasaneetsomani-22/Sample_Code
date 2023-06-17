import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { ShowAllMoviesComponent } from './components/show-all-movies/show-all-movies.component';
import { BackToLoginGuardGuard } from './interceptors/back-to-login-guard.guard';
import { LoginGuardGuard } from './interceptors/login-guard.guard';
import { RouteInterceptorGuard } from './interceptors/route-interceptor.guard';

const routes: Routes = [
  {
    path:"",
    component:ShowAllMoviesComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full",
    canActivate:[BackToLoginGuardGuard]
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full",
    canActivate:[BackToLoginGuardGuard]
  },
  // {
  //   path:"showAllMovies",
  //   component:ShowAllMoviesComponent,
  //   pathMatch:"full",
  //   canActivate:[LoginGuardGuard]
  // },
  {
    path:"bookTicket/:movieName/:theatreName",
    component:BookTicketsComponent,
    pathMatch:"full",
    canActivate:[LoginGuardGuard]
  },
  {
    path:"addMovie",
    component:AddMovieComponent,
    pathMatch:"full",
    canActivate:[LoginGuardGuard,RouteInterceptorGuard]
  }
  ,{
    path:"search/movies/:query",
    component:SearchMoviesComponent,
    pathMatch:"full"
  }
  ,{
    path:"forgetPassword",
    component:ForgetPasswordComponent,
    pathMatch:"full",
    canActivate:[BackToLoginGuardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

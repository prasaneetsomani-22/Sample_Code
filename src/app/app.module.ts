import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAllMoviesComponent } from './components/show-all-movies/show-all-movies.component';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShowAllMoviesComponent,
    BookTicketsComponent,
    AddMovieComponent,
    NavbarComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

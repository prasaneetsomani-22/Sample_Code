import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteInterceptorGuard implements CanActivate {

  constructor(private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(JSON.parse(localStorage.getItem('user') || '{}').email == "admin@gmail.com"){
        return true;
      }
      
      alert("you dont have access to this route!!");
      return false;
      
  }
  
}

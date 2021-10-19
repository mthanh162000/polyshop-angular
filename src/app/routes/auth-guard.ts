
import {  ActivatedRouteSnapshot, CanActivate, CanActivateChild,  RouterStateSnapshot, UrlTree, Routes, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private AuthService: AuthService,
    private router: Router){

    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.AuthService.isAuthenticated()
     .then((authenticated: boolean)=>{
       console.log('Authenticated');
       if (authenticated){
        return true;
      }

      this.router.navigate(['/']);

      return false;
    })
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}

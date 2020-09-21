import { SecurityService } from './services/security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {


  constructor (

    private security: SecurityService,
    private router: Router

  ){

  }
  canActivate(): boolean{
    if(this.security.logedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;

}

}

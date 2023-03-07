
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       let isAuthenticated:boolean = false;
      this.authService.isAuthenticated$.pipe(take(1)).subscribe(isAuth =>
        isAuthenticated = isAuth
        );
    if (isAuthenticated) {

      return true;
    } else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }

}

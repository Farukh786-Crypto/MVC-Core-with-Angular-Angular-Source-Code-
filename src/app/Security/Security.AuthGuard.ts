import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Security } from './Security.Token';

@Injectable()

export class MyAuthGuard implements CanActivate {

    constructor(private _router: Router,
        public _token: Security) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this._token.token.length != 0) {
            return true; // token is present
        }
        // navigate to login page
        this._router.navigate(['/Login']); // no token so go to login page
        // you can save redirect Url so after authorizing we can move 
        return false;
    }
}








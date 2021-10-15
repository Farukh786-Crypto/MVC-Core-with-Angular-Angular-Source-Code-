import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Security } from "./Security.Token";

@Injectable()

export class JwtInterceptor implements HttpInterceptor{

    constructor(public security:Security){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with JWT token if available
        req=req.clone({
            setHeaders:{
                Authorization: `Bearer ${this.security.token}`
            }
        });
        return next.handle(req);
    }

}








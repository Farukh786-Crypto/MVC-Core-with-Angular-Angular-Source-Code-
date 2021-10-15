import { Component } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { LoginUser } from './User.Model';
import { Security } from '../Security/Security.Token';
import { Config } from '../common/common.config';

@Component({
    selector:'Home-Login',
    templateUrl:'./Home.LoginView.html'
})

export class LoginComponent{

    public userObj:LoginUser=new LoginUser();

    constructor(public http:HttpClient,public config:Config,
        public router:Router,public security:Security){

    }
    Login(){
        // ngrx
        var obervable=this.http.post(this.config.apiUrl+"api/Security",this.userObj)
        obervable.subscribe(res=>this.Sucess(res),res=>this.Error(res));
    }
    Sucess(res:any)
    {
        this.security.token=res.token; // set token
        this.router.navigate(['/Patient/Add']);
    }
    Error(res:any)
    {
        console.log(res);
    }
}
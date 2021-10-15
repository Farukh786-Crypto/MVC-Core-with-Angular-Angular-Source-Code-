import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HomeComponent } from './Home.HomeComponent';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../Login/Home.LoginComponent';
import { MainRoutes } from '../Routing/Home.Routing';
import { Security } from '../Security/Security.Token';
import { MyAuthGuard } from '../Security/Security.AuthGuard';
import { Config } from '../common/common.config';
import { JwtInterceptor } from '../Security/Security.Interceptor';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [Security,MyAuthGuard,Config,
              {
                provide:HTTP_INTERCEPTORS,
                useClass:JwtInterceptor,multi:true
              }
            ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }

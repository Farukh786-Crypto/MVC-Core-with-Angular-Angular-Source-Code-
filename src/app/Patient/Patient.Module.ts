import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../Login/Home.LoginComponent';
import { MainRoutes } from '../Routing/Home.Routing';
import { Security } from '../Security/Security.Token';
import { MyAuthGuard } from '../Security/Security.AuthGuard';
import { Config } from '../common/common.config';
import { JwtInterceptor } from '../Security/Security.Interceptor';
import { PatientComponent } from './Patient.PatientComponent';
import { CommonModule } from '@angular/common';
import { patientroute } from '../Routing/Patient.Routing';

@NgModule({
  declarations: [
    PatientComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(patientroute)
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
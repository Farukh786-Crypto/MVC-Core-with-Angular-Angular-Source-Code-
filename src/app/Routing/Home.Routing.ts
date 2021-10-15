import {Routes} from '@angular/router'
import { PatientComponent } from '../Patient/Patient.PatientComponent'
import { LoginComponent } from '../Login/Home.LoginComponent'
import { MyAuthGuard } from '../Security/Security.AuthGuard'

export const MainRoutes:Routes=[
    {path:'Login',loadChildren:()=>import('../Login/Login.Module').then(p=>p.LoginModule)},
    {path:'Patient',loadChildren:()=>import('../Patient/Patient.Module').then(m=>m.PatientModule),
    canActivate:[MyAuthGuard]}

]

// Navigation of your Applications




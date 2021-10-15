import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { loginroute } from '../Routing/Login.Routing';
import { LoginComponent } from './Home.LoginComponent';

@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule,
            FormsModule,
            RouterModule.forChild(loginroute)
            ],
    providers:[],
    exports:[LoginComponent]
})

export class LoginModule{

}













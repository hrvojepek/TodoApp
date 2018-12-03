import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./app/signup/signup.component";
import { SigninComponent } from "./app/signin/signin.component";

@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent
    ],
    imports:[
        
        FormsModule

    ],
    providers:[]
})
export class AuthModule{}
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule

    ],
    providers:[]
})
export class AuthModule{}
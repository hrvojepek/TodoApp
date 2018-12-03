import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { AuthGuard } from './Services/auth-guard';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/signin', pathMatch:'full'  },
  { path:'signin', component:SigninComponent }, 
  { path:'signup', component:SignupComponent },
  { path:"todo", loadChildren:'./todo/todo.module#TodoModule', canActivate: [AuthGuard]  },
  { path:'weather', component:WeatherComponent },
  {path:"**", redirectTo:'/signin'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Services/auth-guard';
import { TodoModule } from './todo/todo.module';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from '../auth.module';
import { TodoService } from './Services/todo.service';

@NgModule({
  declarations: [
    AppComponent
        
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    WeatherModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [ AuthService, AuthGuard, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

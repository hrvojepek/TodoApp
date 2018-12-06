import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Services/auth-guard';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from './auth.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';




@NgModule({
  declarations: [
    AppComponent
        
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    WeatherModule,
    AuthModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [ AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

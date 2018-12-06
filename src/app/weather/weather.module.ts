import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { WeatherComponent } from "./weather.component";
import { WeatherService } from "../Services/weather.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SpinnerComponent } from './spinner/spinner.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
declarations:[
   
    WeatherComponent,
    SpinnerComponent 
],
imports:[
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    CommonModule
],
providers:[WeatherService]
})
export class WeatherModule{}
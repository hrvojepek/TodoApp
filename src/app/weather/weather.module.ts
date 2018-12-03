import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { WeatherComponent } from "./weather.component";
import { WeatherService } from "../Services/weather.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
declarations:[
   
   WeatherComponent 
],
imports:[
    HttpClientModule,
    FormsModule,
    CommonModule
],
providers:[WeatherService]
})
export class WeatherModule{}
import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  forecast:any[]=[]

 

 


  constructor(private weatherService:WeatherService) { }

  ngOnInit() {}


  getWeather(name:HTMLInputElement){
    console.log(name.value)
    this.weatherService.fetchWeather(name.value);
    this.forecast=this.weatherService.getForecast();
    console.log(this.forecast);
  }
}

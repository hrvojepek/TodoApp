import { Component, OnInit } from "@angular/core";

import { WeatherService } from "../Services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  forecast: any[] = [];
  spin:boolean=false;
  currentDate = new Date();
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getWeather(name: HTMLInputElement) {
    this.forecast.length=0;
    this.spin=true;
    console.log(name.value);
    this.weatherService.fetchWeather(name.value);
    var tmpforecast = this.weatherService.getForecast();
    
    for(var i=0;i<tmpforecast.list.length;i++){
      tmpforecast.list[i].dt_txt=new Date(tmpforecast.list[i].dt_txt);
    }
    console.log(tmpforecast);
    for(let i=0;i<tmpforecast.list.length;i+=8){
      this.forecast.push(tmpforecast.list[i]);
    }
    console.log(this.forecast, "wwwww")
    if(this.forecast.length!=0){
      this.spin=false;
    }

  }
 
  getWeatherLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p)=>{
        this.weatherService.fetchWeatherLatLon(p.coords.latitude, p.coords.longitude);
      });
      var tmpforecast = this.weatherService.getForecast();
    
    for(var i=0;i<tmpforecast.list.length;i++){
      tmpforecast.list[i].dt_txt=new Date(tmpforecast.list[i].dt_txt);
    }
    console.log(tmpforecast);
    for(let i=0;i<tmpforecast.list.length;i+=8){
      this.forecast.push(tmpforecast.list[i]);
    }

    } else {
      alert("Geolocation is not supported by this browser.");
    }
    
    
  }
  }


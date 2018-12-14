import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs";
import { map } from "rxjs/Operators";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  forecast: any[] = [];

  constructor(private http: HttpClient) {}

  fetchWeather(cityName: string) : Observable<any> {
    return this.http
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          cityName +
          "&APPID=7d165f7c0bb95cc99dfcf60d5039f80f&units=metric"
      )
     
      
  }
  fetchWeatherLatLon(lat:number, lon:number) : Observable<any>{
     return this.http.get(
      "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+
      "&lon="+lon+"&APPID=7d165f7c0bb95cc99dfcf60d5039f80f&units=metric")
  
  }

  getForecast() {
    return this.forecast;
  }
}

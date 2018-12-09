import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs";
import { map } from "rxjs/Operators";

@Injectable()
export class WeatherService {
  forecast: any[] = [];

  constructor(private http: HttpClient) {}

  fetchWeather(cityName: string) : void {
    this.http
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          cityName +
          "&APPID=7d165f7c0bb95cc99dfcf60d5039f80f&units=metric"
      )
      .pipe(
        map((res: any[]) => {
          const forecast: any[] = res;
          return forecast;
        })
      )
      .subscribe(
        (data: any[]) => {
          this.forecast = data;
        },
        (err) => {
          
        }
      );
      
  }
  fetchWeatherLatLon(lat:number, lon:number) : void{
    this.http.get(
      "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+
      "&lon="+lon+"&APPID=7d165f7c0bb95cc99dfcf60d5039f80f&units=metric")
   .pipe(
    map((res: any[]) => {
      const forecast: any[] = res;
      return forecast;
    })
  )
  .subscribe(
    (data: any[]) => {
      this.forecast = data;
    },
    (err) => {
      
      
    }
  );
  }

  getForecast() {
    return this.forecast;
  }
}

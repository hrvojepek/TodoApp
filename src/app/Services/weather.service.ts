import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs";
import { map } from "rxjs/Operators";

@Injectable()
export class WeatherService {
  forecast: any[] = [];

  constructor(private http: HttpClient) {}

  fetchWeather(cityName: string): void {
    this.http
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          cityName +
          "&APPID=7d165f7c0bb95cc99dfcf60d5039f80f&units=metric"
      )
      .pipe(
        map((res: any[]) => {
          const a: any[] = res;
          return a;
        })
      )
      .subscribe(
        (data: any[]) => {
          this.forecast = data;
          console.log(this.forecast + " wat");
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }

  getForecast() {
    return this.forecast;
  }
}

import { Component, OnInit } from "@angular/core";

import { WeatherService } from "../Services/weather.service";
import { Forecast } from "./forecast.model";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  forecast: Forecast[] = [];
  spin: boolean = false;
  currentDate = new Date();
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getWeather(name: HTMLInputElement) {
    this.forecast.length = 0;
    this.forecast = [];
    this.spin = true;
    console.log(name.value);
    this.weatherService.fetchWeather(name.value).subscribe(
      data => {
        for (let i = 0; i < data.list.length; i += 8) {
          const tmpForecast = new Forecast(
            new Date(data.list[i].dt_txt),
            data.list[i].weather[0].icon,
            data.list[i].main.temp_max,
            data.list[i].main.temp_min,
            data.list[i].main.weather
          );
          this.forecast.push(tmpForecast);
        }
        if (this.forecast.length != 0) {
          this.spin = false;
        }
      },
      err => {}
    );
  }

  getWeatherLocation() {
    this.forecast = [];
    this.spin = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p => {
        this.weatherService
          .fetchWeatherLatLon(p.coords.latitude, p.coords.longitude)
          .subscribe(
            data => {
              for (let i = 0; i < data.list.length; i += 8) {
                const tmpForecast = new Forecast(
                  new Date(data.list[i].dt_txt),
                  data.list[i].weather[0].icon,
                  data.list[i].main.temp_max,
                  data.list[i].main.temp_min,
                  data.list[i].main.weather
                );
                this.forecast.push(tmpForecast);
              }
              if (this.forecast.length != 0) {
                this.spin = false;
              }
            },
            err => {}
          );
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}

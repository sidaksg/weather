import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private apiKey = 'ff57058d6b6a4c00bf3366155428a2fd';

  getWeather(city: string) {
    const apiUrl = `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&country=India&hours=13&key=${this.apiKey}`;
    return this.http.get(apiUrl);

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private apiKey = 'your api key';

  getWeather(city: string) {
    const apiUrl = `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&country=India&hours=13&key=${this.apiKey}`;
    return this.http.get(apiUrl);

  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }
  city = "";
  weatherData: any;
  results = [];
  data = [];
  ngOnInit(): void {
  }
  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((results) => {
      this.weatherData = results;
      console.log(results);
    });
  }
}

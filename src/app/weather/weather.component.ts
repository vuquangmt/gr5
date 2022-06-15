import {Component} from "@angular/core";
import {IWeather} from "../interfaces/weather.interface";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

  // @ts-ignore
  data :IWeather = null;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
    this.getData('hanoi');
  }

  getData(city: string){
    var parameters = new HttpParams();
    parameters = parameters.append('q',city);
    parameters = parameters.append('appid','09a71427c59d38d6a34f89b47d75975c');
    parameters = parameters.append('units','metric');
    this.httpClient.get<IWeather>("https://api.openweathermap.org/data/2.5/weather",
      {
        params: parameters
      })
      .subscribe( value=>{
        this.data = value;
      })
  }

  hanoi(){
    this.getData('hanoi');
  }
  london(){
    this.getData('london');
  }
}

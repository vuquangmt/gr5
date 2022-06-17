import {Component} from "@angular/core";
import {thiAngular} from "../interfaces/thiAngular.interface";
import {WeatherService} from "../services/weather.service";

@Component({
  selector:'thi-Angular',
  templateUrl:'./thiAngular.component.html'
})
export class ThiAngularComponent{
  //@ts-ignore
  data: thiAngular = null;
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(){
    this.getData();
  }
  getData(){
    this.weatherService.thiAngular().subscribe(value => {this.data =value})
  }


}

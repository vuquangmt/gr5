import {Component} from "@angular/core";
import {Imail} from "../interfaces/mail.interface";
import {ICategory} from "../interfaces/category.interface";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-assignment1',
  templateUrl:'./assignment1.component.html'
})
export class Assignment1Component{
  mails: Imail[] = [
    // {userName: 'Emma Heard', subject:'Apologize for late response',shortContent:'Hello, I am here......'},
    // {userName: 'Roberson', subject:'Apologize for late response',shortContent:'Hello, I am here......'},
    // {userName: 'Donal Trump', subject:'US',shortContent:'Hello, I am here......'}
  ];
  categories: ICategory[]=[
    // {name:'Favorite', childs:[{name:'inbox'},{name: 'send items'}]},
    // {name:'John', childs:[{name:'inbox'},{name: 'send items'},{name: 'outbox'}]},
  ];
  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(){
    this.weatherService.mailList().subscribe(value => {
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: Imail[] = [];
    this.weatherService.mailList().subscribe(value => {
      for (var i = 0; i<value.data.mails.length;i++){
        if(value.data.mails[i].category == category && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.mails = new_list;
    })

  }
}

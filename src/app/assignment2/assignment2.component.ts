import {Component} from "@angular/core";
import {ss2} from "../interfaces/session2.interface";


@Component({
  selector:'app-assignment2',
  templateUrl:'./assignment2.component.html',
})
export class Assignment2Component{
  contents:  ss2[]=[
    {title:'To Do', task: 'Task 1',content:'Analdiluy'},
    {title:'In Proges ', task: 'Task 2',content:'kubet'},
    {title:'In Rewiew', task: 'Task 3',content:'thabet'},
    {title:'Done', task: 'Task 4',content:'f88'}
  ]
}

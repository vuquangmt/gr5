import {Component, Input} from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl:"./student.component.html"
})
export class StudentComponent {
  @Input("studentName") studentName !:string;
  @Input("studentAge") studentAge !:number;
}

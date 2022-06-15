import {Component} from "@angular/core";

@Component({
  selector: "app-classroom",
  templateUrl: './classroom/classroom.component.html'
})
export class ClassroomComponent {
  className:string = 'T2203E';
  studentNames: string[] = ["Đỗ Duy Nam","Nguyễn Văn Đức"];
  studentAges: number[] = [22,16];

  changeName() {
    this.className = "T2204M";
  }
}

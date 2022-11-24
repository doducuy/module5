import {Component, OnInit} from '@angular/core';
import {Student} from './models/Student';
// import {StudentServiceService} from './ss5-component-interaction/student-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularOverview';
  // students:Student[]=[
  //   {name:"QuangND",gender:0,point:100},
  //   {name:"TienBM",gender:1,point:100},
  //   {name:"SangDD",gender:0,point:100},
  //   {name:"UyDD",gender:2,point:100}
  // ]
  student:Student | undefined;
  // students:Student[] | undefined;
  // constructor(private  _studentService:StudentServiceService) {
  // }
  constructor() {
  }

  // getStudent(item: Student) {
  //   this.student = item;
  // }

  // getNewStudent(value:Student){
  //   this.students.unshift(value);
  // }

  ngOnInit(): void {
    // this.students= this._studentService.students;
  }

}

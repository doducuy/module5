import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Student} from "../../model/student";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  constructor(private _studentService: StudentService, private _router: Router) {
  }

  students: Student[];

  ngOnInit(): void {
    this._studentService.findAll().subscribe(data => {
      this.students=data;
    })
  }
}

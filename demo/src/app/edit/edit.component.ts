import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  studentRf: FormGroup| undefined;

  id: number;
  student: Student;

  constructor(private _studentService: StudentService, private _router: Router,
              private _activatedRouter: ActivatedRoute, private _formBuild: FormBuilder) {
  }

  students: Student[] | undefined;

  ngOnInit(): void {
    this.students = this._studentService.students;
    // nhận 1 param ở chỗ router
    this._activatedRouter.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.student = this._studentService.findStudentById(this.id);
      }
    )
    // đẩy qua 1 form để edit
    this.studentRf =this._formBuild.group({
      id:[this.student.id],
      name:[this.student.name],
      gender:[this.student.gender],
      point:[this.student.point],
    })
  }
  saveStudent() {
    this._studentService.saveStudent(this.studentRf.value);
    this._router.navigateByUrl("/list").then();
  }
}

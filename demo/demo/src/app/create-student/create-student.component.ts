import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../service/student.service';
import {Student} from '../model/student';
import {Router} from '@angular/router';
import {ClassStudent} from '../model/class-student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  rfCreateStudent: FormGroup;
  student: Student;
  mess?: string;
  classStudents?: ClassStudent[];

  constructor(private _formBuilder: FormBuilder, private _studentService: StudentService, private _router: Router) {
  }

  ngOnInit(): void {
    this._studentService.findAllClassStudent().subscribe(data=>{
      this.classStudents=data;
    });
    this.rfCreateStudent = this._formBuilder.group({
      id: ["",[Validators.required ]],
      name: [],
      gender: [''],
      point: [],
      className:['']
    });
  }

  saveStudent() {
    this._studentService.saveCreate(this.rfCreateStudent.value).subscribe(data => {
      this._router.navigateByUrl('/create');
      this._studentService.setMess('Thêm mới ' + this.rfCreateStudent.value.name + ' thành công!');
      this.mess = this._studentService.mess;
      this.rfCreateStudent.reset();
    });
  }
}

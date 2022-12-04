import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {StudentService} from '../service/student.service';
import {Student} from '../model/student';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClassStudent} from '../model/class-student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  student: Student;
  rfStudentEdit: FormGroup;
  classStudents?: ClassStudent[];

  constructor(private _activatedRoute: ActivatedRoute, private _studentService: StudentService,
              private _formBuilder: FormBuilder, private _router: Router) {
  }

  ngOnInit(): void {
    this._studentService.findAllClassStudent().subscribe(data=>{
      this.classStudents=data;
    });
    this._activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this._studentService.findById(this.id).subscribe(data => {
        this.student = data;
        this.rfStudentEdit = this._formBuilder.group({
          id: [this.student.id],
          name: [this.student.name],
          gender: [this.student.gender],
          point: [this.student.point],
          className:[this.student.className]
        });
      });
    });
  }

  onSubmit() {
    this._studentService.saveStudent(this.rfStudentEdit.value).subscribe(
      data => {
        this._router.navigateByUrl('/list');
      }
    );

  }
}

import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {Student} from '../model/student';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private _studentService: StudentService, private _router: Router, private _toastService: ToastrService) {
  }
  page: number=1;
  students: Student[];

  ngOnInit(): void {
    this._studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number, name: string) {
    this._studentService.deleteById(id).subscribe(data =>{
      // this._router.navigateByUrl("");
      this._studentService.findAll().subscribe(data => {
        this.students = data;
      });
      document.getElementById('close-modal-delete').click();
      this.showToast(name);

    })
  }

  search(value: string) {
    this._studentService.findByName(value).subscribe(data=>{
    this.students=data;
    });
  }
  showToast(name:string){
    this._toastService.success('Xóa thành công '+name, 'Xóa', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true
    })
  }
}

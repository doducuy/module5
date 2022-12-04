import {Injectable} from '@angular/core';
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _students: Student[] = [
    {id:1,name: "SangMl", gender: 1, point: 75},
    {id:2,name: "UyDT", gender: 1, point: 100},
    {id:3,name: "QuangDauGau", gender: 0, point: 70}
  ]

  constructor() {
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }

  saveStudent(student: Student) {
    this._students.forEach(value => {
      if(student.id == value.id){
        value.name = student.name;
        value.point = student.point;
        value.gender =student.gender;
      }
    })
  }

  findStudentById(id: number): Student {
    return this._students.find(value => value.id == id);
  }
}

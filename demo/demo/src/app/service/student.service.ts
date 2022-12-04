import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {environment} from '../../environments/environment';
import {ClassStudent} from '../model/class-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(environment.URL_API_STUDENT_LIST);
  }

  findById(id: number): Observable<Student> {
    return this._httpClient.get<Student>(environment.URL_API_STUDENT_LIST + '/' + id);
  }

  saveStudent(student: Student): Observable<Student> {
    return this._httpClient.put<Student>(environment.URL_API_STUDENT_LIST + '/' +student.id, student);
  }
  saveCreate(student:Student): Observable<Student>{
    return this._httpClient.post<Student>(environment.URL_API_STUDENT_LIST,student);
  }
  deleteById(id:number): Observable<Student>{
    return  this._httpClient.delete<Student>(environment.URL_API_STUDENT_LIST+"/"+id);
  }
  private _mess:string;

  get mess(): string {
    return this._mess;
  }

  setMess(value: string) {
    this._mess = value;
  }
  findByName(name:string): Observable<Student[]>{
    return this._httpClient.get<Student[]>(environment.URL_API_STUDENT_LIST+"?name_like="+name);
  }
  findAllClassStudent(): Observable<ClassStudent[]>{
    return this._httpClient.get<ClassStudent[]>('http://localhost:3000/className')
  }
}

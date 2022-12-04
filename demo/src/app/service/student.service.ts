import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../model/student";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient : HttpClient) { }
  findAll():Observable<Student[]>{
    return this._httpClient.get<Student[]>(environment.URL_STUDENT_API);
  }
  findById(id:number):Observable<Student>{
    return this._httpClient.get<Student>(environment.URL_STUDENT_API+"/"+id);
  }
}

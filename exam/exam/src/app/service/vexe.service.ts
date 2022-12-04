import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VeXe} from "../model/veXe";
import {environment} from "../../environments/environment";
import {NhaXe} from "../model/nhaXe";

@Injectable({
  providedIn: 'root'
})
export class VexeService {

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<VeXe[]> {
    return this._httpClient.get<VeXe[]>(environment.URL_API_VEXE_LIST);
  }

  findAllNhaXe(): Observable<NhaXe[]> {
    return this._httpClient.get<NhaXe[]>(' http://localhost:3000/nhaXe');
  }
  findByDiemDenDiemDi(diemDen:string, diemDi:string): Observable<VeXe[]>{
return this._httpClient.get<VeXe[]>(environment.URL_API_VEXE_LIST+"?diemDi_like="+diemDen+"&diemDen_like="+diemDi);
  }
  saveVeXe(veXe: VeXe): Observable<VeXe>{
  return this._httpClient.post<VeXe>(environment.URL_API_VEXE_LIST,veXe);
  }
  private _mess: string;

  get mess(): string {
    return this._mess;
  }

  setMess(value: string) {
    this._mess = value;
  }
  findById(id: number): Observable<VeXe>{
    return this._httpClient.get<VeXe>(environment.URL_API_VEXE_LIST+"/"+id);
  }
}

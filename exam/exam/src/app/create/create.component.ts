import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VexeService} from "../service/vexe.service";
import {Router} from "@angular/router";
import {NhaXe} from "../model/nhaXe";
import {min} from "rxjs/operators";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  rfVeXe: FormGroup;
  mess?: string;
  nhaXes: NhaXe[];

  constructor(private _formBuilder: FormBuilder, private _veXeService: VexeService, private _router: Router) {
  }

  ngOnInit(): void {
    this._veXeService.findAllNhaXe().subscribe(data => {
      this.nhaXes = data;
      console.log(this.nhaXes);
    });
    this.rfVeXe = this._formBuilder.group({
      id:[],
      giaVe: ['',[Validators.required]],
      diemDi: ['',[Validators.required]],
      diemDen: ['',[Validators.required]],
      ngayKhoiHanh: ['',[Validators.required]],
      gioKhoiHanh: ['',[Validators.required]],
      nhaXe: ['',[Validators.required]],
      soLuong: ['',[Validators.required]]
    })
  }

  saveVeXe() {
    this._veXeService.saveVeXe(this.rfVeXe.value).subscribe(data => {
      this._router.navigateByUrl('/create');
      this._veXeService.setMess('Thêm Mới Vé Xe Thành Công');
      this.mess= this._veXeService.mess;
    this.rfVeXe.reset();
    })
  }
}

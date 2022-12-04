import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {VexeService} from "../service/vexe.service";
import {Router} from "@angular/router";
import {VeXe} from "../model/veXe";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  veXes: VeXe[];

  constructor(private _toastService: ToastrService, private _vexeService: VexeService, private _router: Router) {
  }

  page: number = 1;
  veXe: VeXe;

  ngOnInit(): void {
    this._vexeService.findAll().subscribe(data => {
      this.veXes = data;
    })

  }

  showToast(name: string) {
    this._toastService.success('Xóa thành công ' + name, 'Xóa', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true
    })
  }

  search(diemdi: string, diemDen: string) {
    this._vexeService.findByDiemDenDiemDi(diemdi, diemDen).subscribe(data => {
      this.veXes = data;
    })
  }

  datVe(id: number) {
    this._vexeService.findById(id).subscribe(data => {
      this.veXe = data;
      // this.veXe.soLuong=
    });

  }
}

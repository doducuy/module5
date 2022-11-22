import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss3-color-picker',
  templateUrl: './ss3-color-picker.component.html',
  styleUrls: ['./ss3-color-picker.component.css']
})
export class Ss3ColorPickerComponent implements OnInit {

  red: any=0;
  green: any=0;
  blue: any=0;
  backGroundColor:any="rgb(0,0,0)"
  fontSize:any= 14;

  constructor() {
  }

  ngOnInit(): void {
  }

  setColor() {
    this.backGroundColor = "rgb("+this.red+", "+this.green+", "+this.blue+")";
  }
}

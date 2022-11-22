import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss3-calculator',
  templateUrl: './ss3-calculator.component.html',
  styleUrls: ['./ss3-calculator.component.css']
})
export class Ss3CalculatorComponent implements OnInit {

  numOne: number;
  numTwo: number;
  result: (string | number);

  constructor() {
  }

  ngOnInit(): void {
  }

  sum() {
    this.result = parseFloat(String(this.numOne)) + parseFloat(String(this.numTwo));
  }

  subtraction() {
    this.result = parseFloat(String(this.numOne)) - parseFloat(String(this.numTwo));
  }

  multiplication() {
    this.result = parseFloat(String(this.numOne)) * parseFloat(String(this.numTwo));
  }

  division() {
    if (parseFloat(String(this.numTwo)) == 0) {
      this.result = "Số chia k được bằng 0 "
    } else {
      this.result = parseFloat(String(this.numOne)) / parseFloat(String(this.numTwo));
    }
  }
}

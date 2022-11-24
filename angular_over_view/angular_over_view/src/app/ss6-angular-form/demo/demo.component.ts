import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passWord = control.get('password');
  const confirmPassword = control.get('confPassword');
  if (passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value) {
    return {'reConfirmPassValidName': true};
  } else {
    return null;
  }
};

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {
  }

  rfStudent: FormGroup;

  ngOnInit(): void {
    this.rfStudent = this._formBuilder.group({
      name: ['No name', [Validators.required]],
      point: [100],
      address: [],
      address_option: this._formBuilder.array([]),
      password: [],
      confPassword: []
    }, {validators: reConfirmPass});
  }

  get address_option() {
    return this.rfStudent.controls['address_option'] as FormArray;
  }

  onSubmit() {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
    }
  }

  addAddressOption() {
    this.address_option.push(this._formBuilder.control(""))
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { Ss3ColorPickerComponent } from './ss3-color-picker/ss3-color-picker.component';
import { Ss3CalculatorComponent } from './ss3-calculator/ss3-calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    Ss3ColorPickerComponent,
    Ss3CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

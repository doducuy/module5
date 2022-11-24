import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ss3ColorPickerComponent } from './ss3-color-picker/ss3-color-picker.component';
import { Ss3CalculatorComponent } from './ss3-calculator/ss3-calculator.component';
import { HomeComponent } from './case-study/home/home.component';
import { FacilityComponent } from './case-study/facility/facility.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateHouseComponent } from './case-study/facility/create/create-house/create-house.component';
import { CreateRoomComponent } from './case-study/facility/create/create-room/create-room.component';
import { CreateVillaComponent } from './case-study/facility/create/create-villa/create-villa.component';
import { CustomerListComponent } from './case-study/customer/customer-list/customer-list.component';
import { CreateComponent } from './case-study/customer/create/create.component';
import { HeaderComponent } from './case-study/header/header.component';
import { FooterComponent } from './case-study/footer/footer.component';
import { EditHouseComponent } from './case-study/facility/edit/edit-house/edit-house.component';
import { EditRoomComponent } from './case-study/facility/edit/edit-room/edit-room.component';
import { EditVillaComponent } from './case-study/facility/edit/edit-villa/edit-villa.component';
import { EditCustomerComponent } from './case-study/customer/edit-customer/edit-customer.component';
import { NghichCssComponent } from './case-study/nghich-css/nghich-css.component';
import { DemoComponent } from './ss6-angular-form/demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    Ss3ColorPickerComponent,
    Ss3CalculatorComponent,
    HomeComponent,
    FacilityComponent,
    CreateHouseComponent,
    CreateRoomComponent,
    CreateVillaComponent,
    CustomerListComponent,
    CreateComponent,
    HeaderComponent,
    FooterComponent,
    EditHouseComponent,
    EditRoomComponent,
    EditVillaComponent,
    EditCustomerComponent,
    NghichCssComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

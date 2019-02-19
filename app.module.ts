import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import{EmployeeComponent} from './app.employeecomponent';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule,FormsModule ,HttpModule],
  declarations: [ AppComponent,EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';


import {FormsModule} from '@angular/forms';
import { MobileComponent } from './app.mobilecomponent';
import { BasicComponent } from './app.basiccomponent';
import { SmartComponent } from './app.smartcomponent';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,MobileComponent,BasicComponent,SmartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

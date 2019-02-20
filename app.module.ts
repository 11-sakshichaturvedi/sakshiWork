import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import {SearchFilterPipe} from './filter';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent,SearchFilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

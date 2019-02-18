import { Component } from '@angular/core';

@Component({
  selector: 'sm-app',
  template: './app.smart.html'
 
})
export class SmartComponent {
mobileType:string;
myalldata:any=[
  
 
];
data:any={};
  add():void{
    //alert(this.name);
    //alert("student is added");
    this.data={'type':this.mobileType};
    this.myalldata.push(this.data);
    console.log(this.myalldata);
   
    this.mobileType="";
  
  }
 
}

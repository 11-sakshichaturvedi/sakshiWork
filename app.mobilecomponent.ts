import { Component } from '@angular/core';

@Component({
  selector: 'm-app',
  templateUrl: './app.mobile.html'
 
})
export class MobileComponent {
mobileId:number;
mobileName:string;
mobileCost:number;
//mobileType:string;
myalldata:any=[
  
 
];
data:any={};
  add():void{
    //alert(this.name);
    //alert("student is added");
    this.data={'mobId':this.mobileId,'name':this.mobileName,'cost':this.mobileCost,'type':this.mobileType};
    this.myalldata.push(this.data);
    console.log(this.myalldata);
    this.mobileId=null;
    this.mobileName="";
    this.mobileCost=null;
  }

}

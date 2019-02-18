import { Component } from '@angular/core';

@Component({
  selector: 'b-app',
  template: './app.basic.html'

})
export class BasicComponent {
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

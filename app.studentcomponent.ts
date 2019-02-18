import { Component } from '@angular/core';

@Component({
  selector: 's-app',
  templateUrl: './app.student.html'

})
export class StudentComponent { 
    
  stdId:number;
  name:string;
  qual:string;
  myalldata:any=[
    {'stdId':1001,'name':"sakshi",'qualification':"b.tech"},
    {'stdId':1002,'name':"sakshii",'qualification':"b.tech"}
  ];
  data:any={};
    add():void{
      //alert(this.name);
      //alert("student is added");
      this.data={'stdId':this.stdId,'name':this.name,'qualification':this.qual};
      this.myalldata.push(this.data);
      console.log(this.myalldata);
      this.stdId=null;
      this.name="";
      this.qual="";
    }
}

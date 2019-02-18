import { Component } from '@angular/core';

@Component({
  selector: 'c-app',
  templateUrl: './app.clg.html',
 styles:[`img{border-style:solid;border-color:pink;border-width:10px;float:right; width:500px;height:500px}`]
})
export class CollegeComponent {
clgName:string="piet";
clgid:number=5456;
imagename="stt.jpeg";
fieldname:string="capgemini";

getAllstatus():void{
  alert("welcome");
  console.log("welcome");
  
this.status=false;
  
}
status:boolean=true;
}

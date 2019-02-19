
import {Component, OnInit} from '@angular/core';
import { Employeeservice } from './app.employeeservices';
@Component({
    selector:'emp-comp',
    templateUrl:'./app.employee.html',
    providers:[Employeeservice]
})

export class EmployeeComponent implements OnInit{
    myalldata:any[];
constructor(private empservice:Employeeservice){
    
}
ngOnInit(){
    this.empservice.getAll().subscribe((data:any)=>this.myalldata=data);
}


}
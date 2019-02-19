import { Injectable } from "@angular/core";
import{Http,Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()

export class Employeeservice{
    constructor(private http:Http){}
getAll():Observable<any[]>{
return this.http.get("app/emp.json").map((response:Response)=><any[]>response.json());
}
delete():Observable<any[]>{
    return this.http.delete("app/emp.json").map((response:Response)=><any[]>response.json());
    }

}
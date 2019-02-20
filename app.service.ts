import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http,Response } from "@angular/http"
import 'rxjs/add/operator/map';




@Injectable()
export class BookService{
    constructor(private http:Http){

    }

getAll():Observable<any[]>{
    return this.http.get('/app/list.json').map((response:Response)=><any[]>response.json());
}

}
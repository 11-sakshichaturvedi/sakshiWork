
import {Pipe,PipeTransform} from '@angular/core'
import {values} from './app.values';
@Pipe({name:'searchPipe'})
  export class SearchFilterPipe implements PipeTransform {
      transform(myalldata:any, search:any): any {
        if(search==undefined) return myalldata;
        return myalldata.filter(function(abc:any){
            console.log(abc);
            return abc.name.toLowerCase().includes(search.toLowerCase());
        })
     }
}
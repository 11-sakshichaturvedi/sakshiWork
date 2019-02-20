
import { Component, OnInit } from "@angular/core";
import { BookService } from "./app.service";
import {values} from './app.values';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' ,
  styles: [`h3{color:white}`],
    providers: [BookService]
})
export class AppComponent implements OnInit {
  myalldata: any[];
  constructor(private bookservice: BookService) {

  }

  ngOnInit() {
      this.bookservice.getAll().
          subscribe((data: any) => this.myalldata = data);
  }
}

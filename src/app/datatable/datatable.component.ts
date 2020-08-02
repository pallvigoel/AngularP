import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() books: any;
  @Output() selectBook=new EventEmitter();
public selectedBook:string;
  
  
  public onClick(book : string)
  {
    alert(book);
    this.selectBook.emit(book);
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}

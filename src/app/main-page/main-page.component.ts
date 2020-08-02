import { Component, OnInit, Input } from '@angular/core';
import { book } from '../models/book';
import { BookInterface } from '../models/IBook';
import { BooksProviderService } from '../services/books-provider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public parentBooks: Array<book>;
  public parentbooks: Array<book>;
  public book2: BookInterface;
  public bookName = "General";
  public templateRender =false;


  constructor(private booksService: BooksProviderService) { 
    this.parentBooks =  booksService.getBooksList();
    this.bookName = "General";

  }

  ngOnInit(): void {
  }
  public selectedBookName: string;

  public booksSelected(selectedBook) {
    this.selectedBookName = selectedBook.title;
  }
  public student = "avinash";

  public onClickValue() {
this.booksService.selectedBook = this.bookName;
  }
 
  showalert(valuefromlayout) {
    alert(`${valuefromlayout}`);

  }
  

  public showTable: boolean = true;
  toggleTableVisibility() {
    this.showTable = !(this.showTable);
  }

}

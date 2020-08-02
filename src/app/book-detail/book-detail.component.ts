import { Component, OnInit, Input } from '@angular/core';
import { BooksProviderService } from '../services/books-provider.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: any;
  constructor(private booksService: BooksProviderService) { 
    this.book =  booksService.selectedBook;

  }

  ngOnInit(): void {
  }

}

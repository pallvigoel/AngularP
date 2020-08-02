import { Injectable } from '@angular/core';
import { Books } from '../constants/library-constants';

@Injectable({
  providedIn: 'root'
})
export class BooksProviderService {

  private books=Books;
  public selectedBook;

  constructor() { }
  
 public getBooksList(){
  return Books;
}
}

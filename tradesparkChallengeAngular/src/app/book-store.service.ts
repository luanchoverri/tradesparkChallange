import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private client: HttpClient) { }

  getBooks() {
    return this.client.get('http://localhost:8000/bookStore/books/');
  }

  deleteCategory(bookId: number, categoryId: number) {
    return this.client.delete(`http://localhost:8000/bookStore/books/${bookId}/remove_category/${categoryId}/`);
  }


  addBook(bookData: any){
    // console.log('Enviando datos al backend:', bookData);
    return this.client.post(`http://localhost:8000/bookStore/books/`, bookData);
  }


  deleteBook(bookId: number) {
    return this.client.delete(`http://localhost:8000/bookStore/books/${bookId}/`);
  }
}

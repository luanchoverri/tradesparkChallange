import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}

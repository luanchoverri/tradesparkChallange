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
    return this.client.delete(`http://localhost:8000/bookStore/books/${bookId}/remove_category/${categoryId}/`)
      .pipe(
        catchError((error) => {
          const message =
            error.error?.error || // Mensaje del backend (clave "error")
            error.error?.detail || // Alternativa si el backend usa "detail"
            'An unexpected error occurred.';
          return throwError(() => new Error(message));
        })
      );

  }
}

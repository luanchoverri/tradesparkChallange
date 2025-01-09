import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  books: any[] = [];
  filteredBooks: any[] = [];
  filterQuery: string = '';

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  categoriesToString(categories: any[]): string {
    let categoriesString = "";
    categories.forEach((category, index) => {
      categoriesString += category.name;
      if (index < categories.length - 1) {
        categoriesString += ', ';
      }
    });
    return categoriesString;
  }

 applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(filterValue) ||
      book.author.name.toLowerCase().includes(filterValue) ||
      book.categories.some((category: any) =>
        category.name.toLowerCase().includes(filterValue)
      )
    );
  }

  getBooks() {
    this.bookStoreService.getBooks().subscribe((data: any[]) => {
      console.log('Books Data:', data);
      this.books = data;
      this.filteredBooks = data;
    });
  }

}

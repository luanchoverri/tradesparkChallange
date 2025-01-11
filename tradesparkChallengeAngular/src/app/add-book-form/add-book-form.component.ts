import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BookStoreService} from '../book-store.service';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent   {

  @Input() isOpen = false;
  @Output() isClose = new EventEmitter<void>();
  @Output() bookAdded = new EventEmitter<void>();

  bookForm!: FormGroup;

    constructor(private fb: FormBuilder, private bookStoreService: BookStoreService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      categories: ['', [Validators.required]],
    });
  }


  onSubmit(): void {
  if (this.bookForm.valid) {
    const formValue = this.bookForm.value;

    const bookData = {
      title: formValue.title,
      author: {
        name: formValue.author,
      },
      categories: formValue.categories.split(',').map((category: string) => ({ name: category.trim() })),
    };


    this.bookStoreService.addBook(bookData).subscribe(
        (response) => {
          alert('Book added successfully!');
          this.bookAdded.emit();
          this.closeDialog();
        },
        (error) => {
          console.error('Error adding book:', error);
          alert('Failed to add the book.');
        }
      );
    }
  }


  closeDialog(): void {
    this.isClose.emit();
    this.bookForm.reset(); // Resetea todos los campos del formulario
  }
}

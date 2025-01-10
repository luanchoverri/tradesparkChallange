import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-chip',
  templateUrl: './category-chip.component.html',
  styleUrls: ['./category-chip.component.css']
})
export class CategoryChipComponent {
  @Input() category: any;
  @Input() bookId: number;
  @Output() deleteCategory = new EventEmitter<{ bookId: number, categoryId: number }>();

  onDelete() {
    console.log('on delete function', this.bookId, this.category.id );
    this.deleteCategory.emit({ bookId: this.bookId, categoryId: this.category.id });
  }
}

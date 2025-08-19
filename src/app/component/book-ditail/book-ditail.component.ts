import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BooksService } from '../../service/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-ditail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-ditail.component.html',
  styleUrl: './book-ditail.component.css'
})
export class BookDitailComponent {
  private route = inject(ActivatedRoute);
  private bookserver = inject(BooksService)

  bookId = computed(() => Number(this.route.snapshot.paramMap.get('id')));

  books = signal<Book[]>([]);

  book = computed(() => this.books().find(book => book.id === this.bookId()));

  constructor() {
    this.bookserver.getBooks().subscribe(data => {
      this.books.set(data);
    });
  }
}

import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BooksService } from '../../service/books.service';
import { CommonModule } from '@angular/common';
import { ImageSwitchComponent } from '../image-switch/image-switch.component';

@Component({
  selector: 'app-book-ditail',
  standalone: true,
  imports: [CommonModule, ImageSwitchComponent],
  templateUrl: './book-ditail.component.html',
  styleUrl: './book-ditail.component.css'
})

export class BookDitailComponent {
  private route = inject(ActivatedRoute);
  private bookServer = inject(BooksService)

  books = signal<Book[]>([]);
  bookId = computed(() =>this.route.snapshot.paramMap.get('id'));
  book = computed(() => this.books().find(b => b.id === this.bookId()));

  constructor() {
    this.bookServer.getBooks().subscribe(data => {
    this.books.set(data);
    });
  }
}


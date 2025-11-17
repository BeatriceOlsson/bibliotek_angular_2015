import { Component, inject, Input, signal, ViewEncapsulation } from '@angular/core';
import { Book, BooksService } from '../../service/books.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-book',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './latest-book.component.html',
  styleUrl: './latest-book.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LatestBookComponent {
  @Input() btClass: string = '';

  books = signal<Book[]>([]);
  router = inject(Router);
  booksService = inject(BooksService);

  constructor() {
    this.booksService.getBooks().subscribe(data => {
      this.books.set(data);
    });
  }

  latestBook() {
    const latest = [...this.books()].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
    console.log(latest);
    if (latest) {
      this.router.navigate(['app-book-ditail', latest.id]);
    };
  }
}

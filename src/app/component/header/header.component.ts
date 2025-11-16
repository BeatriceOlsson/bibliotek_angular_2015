import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Book, BooksService } from '../../service/books.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menyOpen = false;
  books = signal<Book[]>([]);
  router = inject(Router);
  booksService = inject(BooksService);

  constructor() {
    this.booksService.getBooks().subscribe(data => {
      this.books.set(data);
    });
  }

  toggleMenu() {
    this.menyOpen = !this.menyOpen;
  }
  closeMenu() {
    this.menyOpen = false;
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

import { Component, signal } from '@angular/core';
import { Book, BooksService } from '../../service/books.service';
import { CommonModule } from '@angular/common';
import { ImageSwitchComponent } from '../image-switch/image-switch.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ImageSwitchComponent],
  providers: [BooksService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  textCollapse = signal<Set<number>>(new Set);
  books = signal<Book[]>([]);

  discriptionBook(index: number) {
    this.textCollapse.update(set => {
      const newSet = new Set(set);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    })
  }

  textExpend(index: number): boolean {
    return this.textCollapse().has(index);
  }

  constructor(private booksService: BooksService) { this.fetchBook(); }

  fetchBook() {
    this.booksService.getBooks().subscribe((data) => {
      const sortedData = [...data].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const latestTow = sortedData.slice(0, 2);
      this.books.set(latestTow);
    });
  }


}

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
  textCollapse = signal<boolean>(true);
  books = signal<Book[]>([]);

  textExpend() {
    this.textCollapse.update(value => !value);
  }
  
  constructor( private booksService: BooksService) { this.fetchBook();}

  fetchBook () {
    this.booksService.getBooks().subscribe((data) => {
      const sortedData = [...data].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const latestTow = sortedData.slice(0,2);
      this.books.set(latestTow);
    });
  }

  
}

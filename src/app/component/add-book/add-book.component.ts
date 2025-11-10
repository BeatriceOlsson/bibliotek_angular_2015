import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book, BooksService } from '../../service/books.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  constructor(private bookService: BooksService) {}
 book = signal<Omit<Book, 'image'>>({
    id: "0",
    title: '',
    author: '',
    opinion: 0,
    published: '',
    createdAt: new Date().toISOString(),
    link: '',
    description: '',
    text: ''
  });

  selectedFiles: File[] = [];
  
  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if(input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  update<K extends keyof Book>(key: K, value: Book[K]) {
    this.book.update(book => ({
      ...book,
      [key]: value
    }))
  }

  submit() {
    const formData = new FormData();

    const data = this.book();
    const existing = JSON.parse(localStorage.getItem('books') || '[]');
    localStorage.setItem('books', JSON.stringify([...existing, data]));
      alert('Bok sparad!');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Book {
  id: number,
  title: string,
  author: string,
  opinion: number,
  published: string,
  createdAt: string,
  image: string [],
  link: string,
  description: string,
  text: string,
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  addBook(book: Book) {
    return this.http.post('http://localhost:3000/books', book);
  }
}

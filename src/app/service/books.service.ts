import { HttpClient } from '@angular/common/http';
import { Component, Injectable, isStandalone } from '@angular/core';
import { Observable } from 'rxjs';

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

  addBook(bookData: FormData): Observable<any> {
    return this.http.post('/api/books', bookData);
  }
}

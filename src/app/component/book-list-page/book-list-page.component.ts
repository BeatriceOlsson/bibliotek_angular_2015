import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService, Book } from '../../service/books.service';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  providers: [BooksService],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css'
})
export class BookListPageComponent {
  letters: string[] = [];
  groupedBooks: {[letter: string]: Book[]} = {};
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    const base = [...'ABCDEFGHIJKLMNOPQRSTUVXYZ'];
    this.letters = [...base, 'Å','Ä','Ö'];
    this.fetchBook();
  }

  fetchBook() {
    this.booksService.getBooks().subscribe((data) => {
      this.groupedBooks = data.reduce((acc, book) => {
        const firstLetter = book.title[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(book);
          return acc;
      }, 
        {} as {[letter:string]: Book[]});

        for (const letter of this.letters) {
          if(!this.groupedBooks[letter]) {
            this.groupedBooks[letter] = [];
          }
        }
    });
  }

}

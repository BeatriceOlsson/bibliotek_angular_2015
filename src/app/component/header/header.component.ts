import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LatestBookComponent } from '../latest-book/latest-book.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LatestBookComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menyOpen = false;

  toggleMenu() {
    this.menyOpen = !this.menyOpen;
  }
  closeMenu() {
    this.menyOpen = false;
  }
}

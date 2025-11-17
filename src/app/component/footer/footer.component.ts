import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LatestBookComponent } from '../latest-book/latest-book.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LatestBookComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

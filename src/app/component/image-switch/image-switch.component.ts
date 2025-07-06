import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-image-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-switch.component.html',
  styleUrl: './image-switch.component.css'
})
export class ImageSwitchComponent {

  image = input<string[]>();
  currentIndex = signal<number>(0);
  currentImage = computed(() => {
    const images = this.image();
    const index = this.currentIndex();
    if(!images || images.length === 0) {
      return 'assets/images/Default_book_cover.webp';
    };
    return images[index];
  });

  next() {
    const images = this.image();
    if(!images || images.length === 0) return;
    const nextIndex = (this.currentIndex() + 1) % images.length;
    this.currentIndex.set(nextIndex);
  }

  previous() {
    const images = this.image();
    if(!images || images.length === 0) return;
    const nextIndex = (this.currentIndex() - 1 + images.length) % images.length;
    this.currentIndex.set(nextIndex);
  }

}

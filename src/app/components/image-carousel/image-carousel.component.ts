import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnDestroy {
  @Input() images: string[] = [];
  currentIndex = 0;
  intervalId: any;

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.next(), 5000); 
  }
}

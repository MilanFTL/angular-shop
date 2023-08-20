import { Component, Input } from '@angular/core';
import { Product } from 'src/app/app.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent {
  @Input() stock: Product[] = [];

  source: string = '';
  cIndex: number = 0;

  cycle() {
    console.log('cIndex: ' + this.cIndex);
    this.source = this.stock[this.cIndex].img;
    if (this.cIndex != this.stock.length - 1) {
      this.cIndex++;
    } else {
      this.cIndex = 0;
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

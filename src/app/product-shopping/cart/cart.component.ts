import {
  Component,
  Input,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { Product } from '../../app.component'; // Import the Product interface from the correct path
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('slideAnimation', [
      state(
        'hidden',
        style({
          right: '-40vw',
        })
      ),
      state(
        'visible',
        style({
          right: '0',
        })
      ),
      transition('hidden => visible', animate('0.2s ease-in-out')),
      transition('visible => hidden', animate('0.6s ease-in-out')),
    ]),
  ],
})
export class CartComponent {
  @Input() cartItems: Product[] = [];

  @Output() removeFromCartEvent = new EventEmitter<string>();

  elementVisible: boolean = false;

  setVisibility() {
    this.elementVisible = !this.elementVisible;
  }
  removeFromCart(name: string) {
    this.removeFromCartEvent.emit(name);
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY >= window.innerHeight * 0.8;
  }
}

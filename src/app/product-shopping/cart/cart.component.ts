import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../app.component'; // Import the Product interface from the correct path

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
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
}

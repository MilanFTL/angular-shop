import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../app.component'; // Import the Product interface from the correct path

@Component({
  selector: 'app-product-shopping',
  templateUrl: './product-shopping.component.html',
  styleUrls: ['./product-shopping.component.css'],
})
export class ProductShoppingComponent {
  @Input() stock: Product[] = [];

  @Output() addToCartEvent = new EventEmitter<string>();
  @Output() removeFromCartEvent = new EventEmitter<string>();

  cartItems: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.manageCartContent();
  }

  manageCartContent() {
    console.log('manageCartcontet');
    this.cartItems = [];
    for (let i = 0; i < this.stock.length; i++) {
      const product = this.stock[i];
      if (product.inCart) {
        this.cartItems.push(product);
      }
    }
  }

  addToCart(name: string) {
    this.addToCartEvent.emit(name);
  }

  removeFromCart(name: string) {
    this.removeFromCartEvent.emit(name);
  }
}

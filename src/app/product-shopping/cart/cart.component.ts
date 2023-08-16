import { Component, Input } from '@angular/core';
import { Product } from '../../app.component'; // Import the Product interface from the correct path

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cartItems: Product[] = [];

  elementVisible: boolean = false;

  setVisibility() {
    this.elementVisible = !this.elementVisible;
  }
}

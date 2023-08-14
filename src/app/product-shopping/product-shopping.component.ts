import { Component, Input } from '@angular/core';
import { Product } from '../app.component'; // Import the Product interface from the correct path

@Component({
  selector: 'app-product-shopping',
  templateUrl: './product-shopping.component.html',
  styleUrls: ['./product-shopping.component.css'],
})
export class ProductShoppingComponent {
  @Input() stock: Product[] = [];
}

import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  AfterViewInit,
  ViewChild,
  NgZone,
  HostListener,
} from '@angular/core';
import { Product } from '../app.component'; // Import the Product interface from the correct path
import { SlideshowComponent } from './slideshow/slideshow.component';

@Component({
  selector: 'app-product-shopping',
  templateUrl: './product-shopping.component.html',
  styleUrls: ['./product-shopping.component.css'],
})
export class ProductShoppingComponent implements AfterViewInit {
  constructor(private ngZone: NgZone) {}

  @ViewChild(SlideshowComponent) SlideshowRef!: SlideshowComponent;

  ngAfterViewInit() {}
  ngOnInit() {
    this.angularTimeout(0);
  }

  @Input() stock: Product[] = [];

  @Output() addToCartEvent = new EventEmitter<string>();
  @Output() removeFromCartEvent = new EventEmitter<string>();

  cartItems: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.manageCartContent();
  }

  parentmessage: string = 'hellofromparent';

  angularTimeout(duration: number) {
    setTimeout(() => {
      console.log(this.SlideshowRef.source);
      this.SlideshowRef.cycle();
      this.angularTimeout(3000);
    }, duration);
  }

  manageCartContent() {
    this.cartItems = [];
    for (let i = 0; i < this.stock.length; i++) {
      const product = this.stock[i];
      if (product.inCart) {
        this.cartItems.push(product);
      }
    }
  }

  selectedButtonIndex: number = -1;
  addToCart(name: string, index: number) {
    const button = document.getElementsByClassName(
      'addToCart'
    )[0] as HTMLElement;

    this.addToCartEvent.emit(name);
    this.selectedButtonIndex = index;

    setTimeout(() => {
      this.selectedButtonIndex = -1;
    }, 1500);
  }

  removeFromCart(name: string) {
    this.removeFromCartEvent.emit(name);
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY >= window.innerHeight * 0.1;
  }
}

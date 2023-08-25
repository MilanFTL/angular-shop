import {
  Component,
  Input,
  EventEmitter,
  Output,
  HostListener,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
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
          right: '-50vw',
        })
      ),
      state(
        'visible',
        style({
          right: '0',
        })
      ),
      transition('hidden => visible', animate('0.2s ease-in-out')),
      transition('visible => hidden', animate('0.4s ease-in-out')),
    ]),
  ],
})
export class CartComponent implements OnChanges {
  @Input() cartItems: Product[] = [];

  @Output() removeFromCartEvent = new EventEmitter<string>();

  elementVisible: boolean = true;

  cartcounter: number = this.cartItems.length;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cartItems']) {
      this.cartcounter = this['cartItems'].length;
    }
  }

  setVisibility() {
    this.elementVisible = !this.elementVisible;
  }
  removeFromCart(name: string) {
    this.removeFromCartEvent.emit(name);
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY >= window.innerHeight * 0.1;
  }

  @ViewChild('cart') cart!: ElementRef;
  @ViewChild('cartButton') cartButton!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const cartElement = this.cart.nativeElement;
    const cartButtonElement = this.cartButton.nativeElement;

    if (
      !cartElement.contains(clickedElement) &&
      !cartButtonElement.contains(clickedElement)
    ) {
      // Call your function here
      this.elementVisible = false;
    }
  }
}

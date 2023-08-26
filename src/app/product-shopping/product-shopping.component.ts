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
  ElementRef,
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

  currentTime: Date = new Date();

  @ViewChild(SlideshowComponent) SlideshowRef!: SlideshowComponent;

  ngAfterViewInit() {}
  ngOnInit() {
    this.angularTimeout(0);
    this.updateTime();
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

  updateTime() {
    setTimeout(() => {
      this.currentTime = new Date();
      this.updateTime();
    }, 1000);
  }

  @ViewChild('porsches') porsches: ElementRef | undefined;
  @ViewChild('sunglasses') sunglasses: ElementRef | undefined;
  @ViewChild('tables') tables: ElementRef | undefined;
  @ViewChild('coffee') coffee: ElementRef | undefined;

  buttonClass: string = '';
  cursorOnButton: boolean = false;
  cursonOnDropdown: boolean = false;

  onButtonEnter(event: any) {
    this.buttonClass = event.target.classList[0];
    this.cursorOnButton = true;
    this.manageMegaDropdown();
  }
  onDropdownEnter() {
    this.cursonOnDropdown = true;
  }
  onButtonLeave() {
    this.cursorOnButton = false;
    setTimeout(() => {
      this.manageMegaDropdown();
    }, 10);
  }
  onDropdownLeave() {
    this.cursonOnDropdown = false;
    this.manageMegaDropdown();
  }

  manageMegaDropdown() {
    if (
      this.buttonClass === 'porsches-btn' &&
      this.porsches &&
      (this.cursonOnDropdown || this.cursorOnButton)
    ) {
      this.porsches.nativeElement.style.display = 'block';
    } else if (
      this.buttonClass === 'sunglasses-btn' &&
      this.sunglasses &&
      (this.cursonOnDropdown || this.cursorOnButton)
    ) {
      this.sunglasses.nativeElement.style.display = 'block';
    } else if (
      this.buttonClass === 'tables-btn' &&
      this.tables &&
      (this.cursonOnDropdown || this.cursorOnButton)
    ) {
      this.tables.nativeElement.style.display = 'block';
    } else if (
      this.buttonClass === 'coffee-btn' &&
      this.coffee &&
      (this.cursonOnDropdown || this.cursorOnButton)
    ) {
      this.coffee.nativeElement.style.display = 'block';
    } else if (this.porsches && this.sunglasses && this.tables && this.coffee) {
      this.porsches.nativeElement.style.display = 'none';
      this.sunglasses.nativeElement.style.display = 'none';
      this.tables.nativeElement.style.display = 'none';
      this.coffee.nativeElement.style.display = 'none';
    }
  }
}

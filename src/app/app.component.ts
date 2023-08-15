import { Component } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  id: number;
  inCart: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-app';

  whatUser: string = '';

  setUser(user: string) {
    this.whatUser = user;
  }

  stock: Product[] = [];

  ngOnInit(): void {
    this.stock = [
      { name: 'car', description: 'a simple car', id: 1, inCart: true },
      { name: 'table', description: 'a big table', id: 2, inCart: false },
      // Add more objects as needed
    ];
  }
}

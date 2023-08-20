import { Component } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  id: number;
  inCart: boolean;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-app';

  whatUser: string = 'user';

  setUser(user: string) {
    this.whatUser = user;
  }

  stock: Product[] = [];

  ngOnInit(): void {
    this.stock = [
      {
        name: 'car',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: false,
        img: 'assets/porscheHr.jpg',
      },
      {
        name: 'house',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: false,
        img: 'assets/house.jpg',
      },
      {
        name: 'coffee',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: false,
        img: 'assets/coffee.jpg',
      },
      {
        name: 'cocktail',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß.',
        id: 1,
        inCart: false,
        img: 'assets/cocktail.jpg',
      },
      {
        name: 'table',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 2,
        inCart: false,
        img: 'assets/table.jpg',
      },
      {
        name: 'sunglasses',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 2,
        inCart: false,
        img: 'assets/sunglasses.jpg',
      },
      // Add more objects as needed
    ];
  }

  putInCart(name: string) {
    const newStock = this.stock.map((product) => {
      if (product.name === name) {
        return { ...product, inCart: true };
      }
      return product;
    });
    this.stock = newStock;
  }
  removeFromCart(name: string) {
    const newStock = this.stock.map((product) => {
      if (product.name === name) {
        return { ...product, inCart: false };
      }
      return product;
    });
    this.stock = newStock;
  }
}

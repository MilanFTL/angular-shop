import { Component } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  id: number;
  inCart: boolean;
  img: string;
  price: number;
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
        price: 240000,
      },
      {
        name: 'house',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: false,
        img: 'assets/houseHr.jpg',
        price: 500000,
      },
      {
        name: 'coffee',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: false,
        img: 'assets/coffeeHr.jpg',
        price: 5,
      },
      {
        name: 'cocktail',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß.',
        id: 1,
        inCart: false,
        img: 'assets/cocktailHr.jpg',
        price: 7,
      },
      {
        name: 'table',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 2,
        inCart: false,
        img: 'assets/tableHr.jpg',
        price: 200,
      },
      {
        name: 'sunglasses',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 2,
        inCart: false,
        img: 'assets/sunglassesHr.jpg',
        price: 150,
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

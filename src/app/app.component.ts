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

  whatUser: string = '';

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
        inCart: true,
        img: 'assets/porsche-1851246_1280.jpg',
      },
      {
        name: 'fasd',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: true,
        img: 'assets/table.jpg',
      },
      {
        name: 'cdddar',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 1,
        inCart: true,
        img: 'assets/porsche-1851246_1280.jpg',
      },
      {
        name: 'ghg',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. Der 911 S/T vereint mit seinem puristischen Leichtbaudesign, seiner atemberaubenden GT High-Performance und der deutlich reduzierten Dämmung die Essenz aus 60 Jahren 911. Das Ergebnis: eine bisher unerreichte Synthese aus Purismus, Agilität und einzigartiger Fahrdynamik.',
        id: 1,
        inCart: true,
        img: 'assets/porsche-1851246_1280.jpg',
      },
      {
        name: 'table',
        description:
          'Ein Elfer in seiner reinsten Form. Entwickelt in Flacht. Und gebaut für einen einzigen Zweck: maximalen Fahrspaß. ',
        id: 2,
        inCart: false,
        img: 'assets/porsche-1851246_1280.jpg',
      },
      // Add more objects as needed
    ];
  }
}

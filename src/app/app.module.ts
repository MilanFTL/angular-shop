import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductShoppingComponent } from './product-shopping/product-shopping.component';
import { CartComponent } from './product-shopping/cart/cart.component';
import { SlideshowComponent } from './product-shopping/slideshow/slideshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    ProductShoppingComponent,
    CartComponent,
    SlideshowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

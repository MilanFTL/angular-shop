import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductShoppingComponent } from './product-shopping/product-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    ProductShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

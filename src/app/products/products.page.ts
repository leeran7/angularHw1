import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart, Product } from '../interfaces';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(
    private pService: ProductsService,
    private cService: CartService
  ) {}
  private products: Product[] = [];
  private cart: Cart;
  ngOnInit() {
    this.products = this.pService.getAllProducts();
    this.cart = this.cService.getCart();
    console.log(this.cart);
  }
  log(product: Product) {
    console.log(product);
  }
}

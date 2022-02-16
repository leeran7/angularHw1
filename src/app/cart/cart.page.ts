import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart, CartItem, Product } from '../interfaces';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  private cart: Cart;
  constructor(private active: ActivatedRoute, private service: CartService) {}

  ngOnInit() {
    this.cart = this.service.getCart();
  }
  increment(item: CartItem) {
    this.service.incrementQty(item);
  }
  decrement(item: CartItem) {
    this.service.decrementQty(item);
  }
  deleteItem(item: CartItem) {
    this.service.deleteItem(item);
  }
}

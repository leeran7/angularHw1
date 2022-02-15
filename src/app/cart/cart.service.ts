import { Injectable } from '@angular/core';
import { Cart, CartItem, Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new Cart();

  private findProductInCart(product: Product) {
    if (this.cart.items.length > 0) {
      const found = this.cart.items.find((item) => {
        return item.item === product;
      });
      return found;
    } else {
      return false;
    }
  }
  addToCart(product: Product) {
    console.log(product);
    const item = this.findProductInCart(product);
    if (!item) {
      this.cart.items.push({
        item: product,
        quantity: 1,
      });
    } else {
      item.quantity++;
    }
  }
  getCart() {
    return this.cart;
  }
}

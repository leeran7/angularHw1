import { Injectable } from '@angular/core';
import { Cart, CartItem, Product } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = new Cart();
  totalAfterTax: number;

  findProductInCart(id: number) {
    if (this.cart.items.length > 0) {
      const found = this.cart.items.find((item) => item.item.id === id);
      return found;
    } else {
      return false;
    }
  }
  addToCart(product: Product) {
    const item = this.findProductInCart(product.id);
    if (!item) {
      this.cart.items.push({
        item: product,
        quantity: 1,
      });
    } else {
      item.quantity++;
    }
    this.cart.quantity++;
    this.calculateTotal();
  }
  deleteItem(item: CartItem) {
    this.cart.quantity -= item.quantity;
    this.cart.items = this.cart.items.filter((cartItem) => item !== cartItem);
    this.calculateTotal();
  }
  getCart() {
    return this.cart;
  }
  decrementQty(item: CartItem) {
    const itemToDec = this.cart.items.find((cartitem) => item === cartitem);
    if (itemToDec.quantity === 1) {
      this.deleteItem(itemToDec);
    } else {
      itemToDec.quantity--;
    }
    this.cart.quantity--;
    this.calculateTotal();
  }
  incrementQty(item: CartItem) {
    const itemToInc = this.cart.items.find((cartItem) => item === cartItem);
    itemToInc.quantity++;
    this.cart.quantity++;
    this.calculateTotal();
  }
  private calculateTotal() {
    const { items } = this.cart;
    this.cart.total = 0;
    items.forEach(
      (item) => (this.cart.total += item.item.price * item.quantity)
    );
  }
}

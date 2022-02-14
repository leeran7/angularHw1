import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Galaxy S22 Ultra',
      price: 1199,
      img: 'https://image-us.samsung.com/us/smartphones/galaxy-s22-ultra/configurator/B0-02-group-kv-basic-configurator-MB-720x540.jpg',
    },
    {
      id: 2,
      name: 'iPhone 13 Pro Max',
      price: 1099,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
    },
  ];
  constructor() {}
  getAllProducts() {
    return [...this.products];
  }
  getLastId() {
    let { products } = this;
    return products.length ? products[products.length - 1].id : 1;
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
  removeProduct(product: Product) {
    this.products.filter((item) => item.id !== product.id);
  }
  getProduct(productId: number) {
    return this.products.find((product) => product.id === productId);
  }
}

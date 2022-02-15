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
      description:
        'The power of our fastest chip ever, long lasting battery, and sophisticated AI enables revolutionary night-time video that’s as clear-as-day. And, for the first time, S Pen with its increased super-powers has been embedded in Galaxy S22 Ultra’s beautifully sleek design. Today, Galaxy S22 Ultra sets an epic standard of smartphone experience.',
    },
    {
      id: 2,
      name: 'iPhone 13 Pro Max',
      price: 1099,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
      description:
        'iPhone 13 Pro Max. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G.¹ Durable design and a huge leap in battery life.',
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      price: 549,
      img: 'https://cdn.arstechnica.net/wp-content/uploads/2021/10/36-980x756.jpg',
      description:
        "Meet Pixel 6. It's completely reimagined, inside and out. Powered by Tensor, Google's first-ever processor, it's fast, smart, and secure. And it adapts to you.",
    },
    {
      id: 4,
      name: 'iPhone 13 Pro Max',
      price: 1099,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
    },
    {
      id: 5,
      name: 'Galaxy S22 Ultra',
      price: 1199,
      img: 'https://image-us.samsung.com/us/smartphones/galaxy-s22-ultra/configurator/B0-02-group-kv-basic-configurator-MB-720x540.jpg',
    },
    {
      id: 6,
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

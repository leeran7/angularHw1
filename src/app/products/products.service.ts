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
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443338cv14d.jpg;maxHeight=640;maxWidth=550',
      description:
        'iPhone 13 Pro Max. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G.¹ Durable design and a huge leap in battery life.',
    },
    {
      id: 4,
      name: 'iPhone 13 Pro',
      price: 1099,
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443338cv14d.jpg;maxHeight=640;maxWidth=550',
      description:
        'iPhone 13 Pro. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G.¹ Durable design and a huge leap in battery life.',
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
      id: 5,
      name: 'Galaxy Fold3',
      price: 1199,
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468284cv14d.jpg',
      description:
        'Unfold a world of possibilities with Samsung Galaxy Z Fold3 5G. You can do it all on this incredible device that’s so much more than a phone — it’s a compact yet powerful tablet that helps you master your busy life. Bring your workspace anywhere with a foldable, expansive screen that gives you multiple windows that make multitasking a breeze.',
    },
  ];
  constructor() {}

  getAllProducts() {
    return [...this.products];
  }
  getLastId() {
    const { products } = this;
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
  filterProducts(value: string) {
    return this.products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}

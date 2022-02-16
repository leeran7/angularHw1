export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description?: string;
}
export class Cart {
  items: CartItem[];
  total?: number;
  quantity?: number;
  constructor() {
    this.items = [
      {
        item: {
          id: 1,
          name: 'Galaxy S22 Ultra',
          price: 1199,
          img: 'https://image-us.samsung.com/us/smartphones/galaxy-s22-ultra/configurator/B0-02-group-kv-basic-configurator-MB-720x540.jpg',
          description:
            'The power of our fastest chip ever, long lasting battery, and sophisticated AI enables revolutionary night-time video that’s as clear-as-day. And, for the first time, S Pen with its increased super-powers has been embedded in Galaxy S22 Ultra’s beautifully sleek design. Today, Galaxy S22 Ultra sets an epic standard of smartphone experience.',
        },
        quantity: 1,
        total: 1199,
      },
    ];
    this.total = 1199;
    this.quantity = 1;
  }
}
export interface CartItem {
  item: Product;
  quantity: number;
  total?: number;
}

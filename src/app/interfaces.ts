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
    this.items = [];
  }
}
export interface CartItem {
  item: Product;
  quantity: number;
}

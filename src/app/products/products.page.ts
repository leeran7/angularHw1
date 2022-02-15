import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(private pService: ProductsService) {}
  private products: Product[] = [];
  ngOnInit() {
    this.products = this.pService.getAllProducts();
  }
  log(product: Product) {
    console.log(product);
  }
}

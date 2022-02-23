import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-new-product-input',
  templateUrl: './new-product-input.page.html',
  styleUrls: ['./new-product-input.page.scss'],
})
export class NewProductInputPage implements OnInit {
  product: Product = {
    id: this.pService.getLastId() + 1,
    name: '',
    img: '',
    price: Number(''),
    description: '',
  };
  constructor(private pService: ProductsService, private route: Router) {}
  ngOnInit() {}
  updateDesc(e: string) {
    this.product.description = e;
  }
  updateImg(e: string) {
    this.product.img = e;
  }
  updatePrice(e: string) {
    this.product.price = Number(e);
  }
  updateName(e: string) {
    this.product.name = e;
  }
  saveInfo() {
    this.pService.addProduct(this.product);
    this.route.navigate(['/products']);
  }
}

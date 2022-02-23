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
  updateDesc(desc: string) {
    this.product.description = desc;
  }
  updateImg(imgUrl: string) {
    this.product.img = imgUrl;
  }
  updatePrice(price: string) {
    this.product.price = Number(price);
  }
  updateName(name: string) {
    this.product.name = name;
  }
  saveInfo() {
    this.pService.addProduct(this.product);
    this.route.navigate(['/products']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.page.html',
  styleUrls: ['./products-detail.page.scss'],
})
export class ProductsDetailPage implements OnInit {
  private product: Product;
  constructor(
    private active: ActivatedRoute,
    private pService: ProductsService
  ) {}

  ngOnInit() {
    this.active.paramMap.subscribe((map) => {
      let id = Number(map.get('id'));
      map.has('id') ? (this.product = this.pService.getProduct(id)) : null;
    });
  }
}

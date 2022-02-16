import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
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
    private pService: ProductsService,
    private cService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.active.paramMap.subscribe((map) => {
      if (!map.has('id')) {
        return;
      }
      const id = Number(map.get('id'));
      this.product = this.pService.getProduct(id);
    });
  }
  addToCart() {
    this.cService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }
}

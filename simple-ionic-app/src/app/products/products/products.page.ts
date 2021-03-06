import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {

  private products: any[];

  constructor(private productSvc: ProductService) {
  }

  ionViewDidEnter(): void {
    this.products = this.productSvc.getAllProducts();
  }

}

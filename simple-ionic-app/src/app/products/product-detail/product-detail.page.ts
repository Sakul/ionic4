import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  private product: any;

  constructor(private activatedRoute: ActivatedRoute, private productSvc: ProductService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(it => {
      if (!it.has("productId")) {
        // redirect
        return;
      }
      const productId = it.get("productId");
      this.product = this.productSvc.getProductById(productId);
    });
  }

}

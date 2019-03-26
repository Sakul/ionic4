import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  private product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

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

  onDelete() {
    this.alertCtrl.create({
      header: "Are you sure?", message: "Do you really want to delete this product?",
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: "Delete",
          handler: () => {
            this.productSvc.deleteProductById(this.product.Id);
            this.router.navigate(['/products']);
          }
        }
      ]
    }).then(e => {
      e.present();
    })

  }

}

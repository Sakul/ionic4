import { Injectable } from '@angular/core';
import { pipeBind1 } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: any[] = [
    {
      Id: "p1",
      Name: "Apple",
      ImageUrl: "assets/imgs/apple.jpg",
      Detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
    },
    {
      Id: "p2",
      Name: "Samsung",
      ImageUrl: "assets/imgs/samsung.png",
      Detail: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
  ];

  constructor() { }

  public getAllProducts() {
    return [...this.products];
  }

  public getProductById(productId: string) {
    return { ...this.products.find(it => it.Id == productId) };
  }
}

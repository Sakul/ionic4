import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from "./home/home.page";

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: './products/products/products.module#ProductsPageModule'
      },
      {
        path: ':productId',
        loadChildren: './products/product-detail/product-detail.module#ProductDetailPageModule'
      }
    ]
  },
  
  { path: "home", loadChildren: "./home/home.module#HomePageModule", pathMatch: "full" },
  { path: "route1/route2/route3", redirectTo: "home", pathMatch: "full" }, // MUST match all (.../route1/route2/route3)
  { path: "route1/route2/", redirectTo: "home", pathMatch: "prefix" }, // Prefix with ().../route1/route2/...)
  { path: "*", redirectTo:"home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

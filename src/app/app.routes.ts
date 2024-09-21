import { Routes } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { LayoutComponent } from "./layout/layout.component";

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'shop', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', redirectTo: '' }
    ]}



];

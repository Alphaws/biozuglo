import { Routes } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { LayoutComponent } from "./layout/layout.component";
import { ErrorComponent } from "./components/error/error.component";
import { BlogModule } from "./components/blog/blog.module";
import { NewRegSaleComponent } from "./components/new-reg-sale/new-reg-sale.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'shop', component: ProductListComponent},
      {path: 'product/:id', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'blog', loadChildren: () => import('./components/blog/blog.module').then(m => BlogModule)},
      {path: 'uj_regisztracio_kedvezmeny', component: NewRegSaleComponent},

      {path: 'error', component: ErrorComponent},
      {path: '**', redirectTo: 'error'}
    ]
  }


];

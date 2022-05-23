import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminHomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './pages/layout/layout.component';
import { MarkAdminComponent } from './pages/mark/mark.component';
import { ProductComponent } from './pages/products/products.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'mark', component: MarkAdminComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/form', component: FormProductComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

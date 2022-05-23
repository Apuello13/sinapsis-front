import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormMarkComponent } from './components/form-mark/form-mark.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { AdminHeaderComponent } from './components/header/header.component';
//Components
import { AdminNavbarComponent } from './components/navbar/navbar.component';
import { AdminSidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminHomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './pages/layout/layout.component';
import { MarkAdminComponent } from './pages/mark/mark.component';
import { ProductComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    CategoryComponent,
    FormCategoryComponent,
    MarkAdminComponent,
    FormMarkComponent,
    ProductComponent,
    FormProductComponent
  ],
  imports: [AdminRoutingModule, SharedModule, MatCardModule],
  bootstrap: [AdminHomeComponent],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridProductComponent } from './components/grid-product/grid-product.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/404/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    GridProductComponent,
    DetailProductComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }

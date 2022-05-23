import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './products.component.html',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private _product: ProductService,
    private _alert: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._product.getProducts().subscribe(
      (result) => {
        this.products = result;
      },
      (badRequest) => console.log(badRequest)
    );
  }

  goForm(): void {
    this.router.navigateByUrl('/admin/product/form');
  }

  delete(id: number) {
    this._alert.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        this._product.deleteById(id).subscribe(
          () => {
            this._alert.successAlert('Producto eliminado con exito');
            this.products = this.products.filter((p) => p.id !== id);
          },
          (badRequest) => {
            console.log(badRequest);
          }
        );
      }
    });
  }

  setProduct(product: Product): void {
    this._product.setProduct(product);
  }
}

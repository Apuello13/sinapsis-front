import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/models/category';
import { Mark } from 'src/app/core/models/mark';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { MarkService } from 'src/app/core/services/mark.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-form-product',
  templateUrl: './form-product.component.html',
})
export class FormProductComponent implements OnInit {
  productForm!: FormGroup;
  marks: Mark[] = [];
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private _product: ProductService,
    private _mark: MarkService,
    private _category: CategoryService,
    private _alert: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initForm();
    this.getIdByUrl();
  }

  initForm() {
    this.productForm = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      description: '',
      idMark: ['', Validators.required],
      idCategory: ['', Validators.required],
      price: [0, Validators.required],
      dateExpiry: ['', Validators.required],
      taxes: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getMarks();
    this.getCategories();
  }

  getMarks(): void {
    this._mark.getMarks().subscribe(
      (result) => {
        this.marks = result;
      },
      (badRequest) => console.log(badRequest)
    );
  }

  getCategories(): void {
    this._category.getCategories().subscribe(
      (result) => {
        this.categories = result;
      },
      (badRequest) => console.log(badRequest)
    );
  }

  getIdByUrl(): void {
    this.route.queryParams.subscribe((params) => {
      const json = JSON.stringify(params);
      if (json !== '{}') this.getProduct();
    });
  }

  getProduct(): void {
    const { category, typeProduct, ...product } = this._product.getProduct();
    this.productForm.setValue(product);
  }

  goProduct(): void {
    this.router.navigateByUrl('/admin/product');
  }

  save(): void {
    const isEdit = this.productForm.get("id")?.value === 0 ? true : false;
    this._product[isEdit ? "saveProduct" : "updateProduct"](this.productForm.value)
      .subscribe(() => {
        this._alert.successAlert(isEdit ? "Producto creado" : "Producto actualizado");
        this.goProduct();
      }, badRequest => console.log(badRequest));
  }
}

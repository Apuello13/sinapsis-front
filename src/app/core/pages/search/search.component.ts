import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../models/category';
import { Mark } from '../../models/mark';
import { Product } from '../../models/product';
import { CategoryService } from '../../services/category.service';
import { MarkService } from '../../services/mark.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  marks: Mark[] = [];
  categories: Category[] = [];
  products: Product[] = [];
  searchForm!: FormGroup;

  constructor(
    private _category: CategoryService,
    private _mark: MarkService,
    private _product: ProductService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getCategories();
    this.getMarks();
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      name: '',
      categoryId: 0,
      typeId: 0,
    });
  }

  getCategories(): void {
    this._category.getCategories().subscribe(
      (result) => {
        this.categories = result;
      },
      (badRequest) => {
        console.log(badRequest);
      }
    );
  }

  getMarks(): void {
    this._mark.getMarks().subscribe(
      (result) => {
        this.marks = result;
      },
      (badRequest) => {
        console.log(badRequest);
      }
    );
  }

  setValueForm(value: number, key: string): void {
    this.searchForm.get(key)?.setValue(value);
    this.search();
  }

  search(): void {
    this._product.searchProduct(this.searchForm.value).subscribe(
      (result) => {
          this.products = result;
      },
      (badRequest) => {
        console.log(badRequest);
      }
    );
  }

  resetForm(): void {
    this.searchForm.reset();
  }
}

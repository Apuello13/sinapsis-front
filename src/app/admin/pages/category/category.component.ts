import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Category } from 'src/app/core/models/category';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { FormCategoryComponent } from '../../components/form-category/form-category.component';

@Component({
  selector: 'app-admin-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  columns: string[] = ['Nombre', 'Acciones'];

  constructor(
    private _category: CategoryService,
    private _alert: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCategories();
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

  delete(categoryId: number): void {
    this._alert.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        this._category.deleteById(categoryId).subscribe(
          () => {
            this._alert.successAlert('Categoria eliminada con exito');
            this.categories = this.categories.filter(
              (c) => c.idCategory !== categoryId
            );
          },
          (badRequest) => console.log(badRequest)
        );
      }
    });
  }

  openDialog(categoryId?: number): void{
    const category = this.categories.find(c => c.idCategory === categoryId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.data = category;
    this.dialog.open(FormCategoryComponent, dialogConfig).afterClosed()
      .subscribe(() => this.getCategories());
  }
}

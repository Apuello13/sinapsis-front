import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/core/models/category';
import { AlertService } from 'src/app/core/services/alert.service';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-admin-form-category',
  templateUrl: './form-category.component.html',
})
export class FormCategoryComponent {
  categoryForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<FormCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) private category: Category,
    private fb: FormBuilder,
    private _category: CategoryService,
    private _alert: AlertService
  ) {
    this.initForm();
  }

  initForm(): void {
    this.categoryForm = this.fb.group({
      idCategory: this.category ? this.category.idCategory : 0,
      name: [this.category ? this.category.name : '', Validators.required],
    });
  }

  save(): void {
    this._category[this.category ? 'updateCategory' : 'saveCategory'](
      this.categoryForm.value
    ).subscribe(
      () => {
        this._alert.successAlert(
          this.category ? 'Categoria actualizada' : 'Categoria creada'
        );
        this.closeDialog();
      },
      (badRequest) => {
        console.log(badRequest);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

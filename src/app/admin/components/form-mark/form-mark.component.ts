import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mark } from 'src/app/core/models/mark';
import { AlertService } from 'src/app/core/services/alert.service';
import { MarkService } from 'src/app/core/services/mark.service';

@Component({
  selector: 'app-admin-form-mark',
  templateUrl: './form-mark-component.html',
})
export class FormMarkComponent {
  markForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<FormMarkComponent>,
    @Inject(MAT_DIALOG_DATA) private mark: Mark,
    private fb: FormBuilder,
    private _mark: MarkService,
    private _alert: AlertService
  ) {
    this.initForm();
  }

  initForm(): void {
    this.markForm = this.fb.group({
      idMark: this.mark ? this.mark.idMark : 0,
      name: [this.mark ? this.mark.name : '', Validators.required],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  save(): void {
    this._mark[this.mark ? 'updateMark' : 'saveMark'](
      this.markForm.value
    ).subscribe(
      () => {
        this._alert.successAlert(
          this.mark ? 'Marca actualiza' : 'Marca creada'
        );
        this.closeDialog();
      },
      (badRequest) => console.log(badRequest)
    );
  }
}

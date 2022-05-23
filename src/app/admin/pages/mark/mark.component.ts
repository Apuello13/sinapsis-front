import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Mark } from 'src/app/core/models/mark';
import { AlertService } from 'src/app/core/services/alert.service';
import { MarkService } from 'src/app/core/services/mark.service';
import { FormMarkComponent } from '../../components/form-mark/form-mark.component';

@Component({
  selector: 'app-admin-mark',
  templateUrl: './mark.component.html',
})
export class MarkAdminComponent implements OnInit {
  marks: Mark[] = [];

  constructor(
      private _mark: MarkService, 
      private _alert: AlertService,
      private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getMarks();
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

  delete(markId: number): void {
    this._alert.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        this._mark.deleteById(markId).subscribe(() => {
          this._alert.successAlert('Marca elimina con exito');
          this.marks = this.marks.filter((m) => m.idMark !== markId);
        }, badRequest => console.log(badRequest));
      }
    });
  }

  openDialog(idMark?: number): void {
    const mark = this.marks.find(m => m.idMark === idMark);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.data = mark;
    this.dialog.open(FormMarkComponent, dialogConfig).afterClosed()
      .subscribe(() => this.getMarks());
  }
}

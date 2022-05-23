import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Product } from "../../models/product";

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html'
})
export class DetailProductComponent{
    constructor(
        private dialogRef: MatDialogRef<DetailProductComponent>,
        @Inject(MAT_DIALOG_DATA) public product: Product
    ){}

    closeDialog(): void {
        this.dialogRef.close();
    }
}
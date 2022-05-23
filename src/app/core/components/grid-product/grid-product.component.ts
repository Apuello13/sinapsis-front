import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Product } from "../../models/product";
import { DetailProductComponent } from "../detail-product/detail-product.component";

@Component({
    selector: 'app-grid-product',
    templateUrl: './grid-product.component.html'
})
export class GridProductComponent{
    constructor(
        private dialog: MatDialog
    ){}
    @Input('products') products: Product[]= [];

    openDialog(product: Product): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = product;
        this.dialog.open(DetailProductComponent, dialogConfig);
    }
}
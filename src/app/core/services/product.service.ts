import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";
import { Search } from "../models/search";

@Injectable({providedIn: 'root'})
export class ProductService{
    product!: Product;
    productUrl: string = `${environment.apiUrl}/products`;
    constructor(private http: HttpClient){}

    getProducts(){
        return this.http.get<Product[]>(this.productUrl);
    }

    saveProduct(product: Product){
        return this.http.post(this.productUrl, product);
    }

    updateProduct(product: Product){
        return this.http.put(this.productUrl, product);
    }

    deleteById(id: number){
        return this.http.delete(`${this.productUrl}/${id}`);
    }

    searchProduct(search: Search){
        return this.http.post<Product[]>(`${this.productUrl}/search`, search);
    }

    setProduct(product: Product): void {
        this.product = product;
    }

    getProduct(): Product{
        return this.product;
    }
}
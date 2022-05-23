import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Category } from "../models/category";

@Injectable({ providedIn: 'root' })
export class CategoryService{
    categoryUrl : string = `${environment.apiUrl}/categories`;
    constructor(private http: HttpClient){}

    getCategories(){
        return this.http.get<Category[]>(this.categoryUrl);
    }

    saveCategory(category: Category){
        return this.http.post(this.categoryUrl, category);
    }

    updateCategory(category: Category){
        return this.http.put(this.categoryUrl, category);
    }

    deleteById(idCategory: number){
        return this.http.delete(`${this.categoryUrl}/${idCategory}`);
    }
}
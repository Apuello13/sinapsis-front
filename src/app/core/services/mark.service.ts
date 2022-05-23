import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Mark } from "../models/mark";

@Injectable({providedIn: 'root'})
export class MarkService{
    markUrl: string = `${environment.apiUrl}/mark`;
    constructor(private http: HttpClient){}

    getMarks(){
        return this.http.get<Mark[]>(this.markUrl);
    }

    saveMark(mark: Mark){
        return this.http.post(this.markUrl, mark);
    }

    updateMark(mark: Mark){
        return this.http.put(this.markUrl, mark);
    }

    deleteById(markId: number){
        return this.http.delete(`${this.markUrl}/${markId}`);
    }

}
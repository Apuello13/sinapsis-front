import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Category } from "../../models/category";
import { Mark } from "../../models/mark";
import { CategoryService } from "../../services/category.service";
import { MarkService } from "../../services/mark.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
    private unsubscribe = new Subject();
    categories: Category[] = [];
    marks: Mark[] = [];

    constructor(
        private _category: CategoryService,
        private _mark: MarkService
    ){}


    ngOnInit(): void {
        this.getCategories();
        this.getMarks();
    }

    getCategories(): void {
        this._category.getCategories()
            .subscribe(result => {
                this.categories = result;
            }, badRequest => {
                console.log(badRequest);
            })
    }

    getMarks(): void {
        this._mark.getMarks().subscribe(result => {
            this.marks = result;
        }, badRequest => {
            console.log(badRequest);
        })
    }

    ngOnDestroy(): void {
        this.unsubscribe.complete();
    }
}
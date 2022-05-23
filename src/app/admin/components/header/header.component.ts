import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-admin-header',
    templateUrl: './header.component.html'
})
export class AdminHeaderComponent{
    @Input('title') title: string = '';
    @Input('buttonText') buttonText: string = '';
    @Output() click = new EventEmitter<void>();

    clickAction(): void {
        this.click.emit();
    }
}
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './sidebar.component.html'
})
export class AdminSidebarComponent implements OnInit{
    menus: Menus[] = [];
    
    ngOnInit(): void {
        this.loadMenus();
    }

    loadMenus(): void {
        this.menus = [
            { name: 'Dashboard', icon: 'bx bxs-dashboard', path: '/home' },
            { name: 'Marcas', icon: 'bx bxs-bookmarks', path: '/mark' },
            { name: 'Categorias', icon: 'bx bx-category', path: '/category' },
            { name: 'Productos', icon: 'bx bx-cart-add', path: '/product' }
        ];
    }
}

interface Menus{
    name: string;
    path: string;
    icon: string;
}
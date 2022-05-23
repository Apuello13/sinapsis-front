import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/404/not-found.component';
import { HomeComponent } from './core/pages/home/home.component';
import { LayoutComponent } from './core/pages/layout/layout.component';
import { SearchComponent } from './core/pages/search/search.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent }
    ]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

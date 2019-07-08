import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';

import { ProductService } from './features/products/product.service';
import { CategoryItemComponent } from './features/categories/category-item/category-item.component';
import { CategoryListComponent } from './features/categories/category-list/category-list.component';
import { CategoryService } from './features/categories/category.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductListComponent,
    CategoryItemComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/:id', component: ProductListComponent }
    ]),
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

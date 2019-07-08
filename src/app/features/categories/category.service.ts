import { Category } from '../../_model/category';
import { ProductService } from '../products/product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
    data: Category[];
    constructor(private productService: ProductService) {
        this.data = [
            { id: 1, name: 'Electronics', image: 'assets/images/elec-1.jpg', products: productService.getByCategoryId(1) },
        ]
    }

    getAll(): Category[] {
        return this.data;
    }
    add(category: Category) {
        const i = this.data.length + 1;
        category.id = i;
        this.data.push(category);
    }
}
import { Product } from '../../_model/product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    data: Product[];
    constructor() {
        this.data = [
            { id: 1, name: 'pro-1', code: 111, price: 111, image: 'assets/images/elec-1.jpg', fkCategoryId: 1 },
            { id: 2, name: 'pro-2', code: 222, price: 222, image: 'assets/images/elec-2.jpg', fkCategoryId: 1 },
            { id: 3, name: 'pro-3', code: 333, price: 333, image: 'assets/images/elec-3.jpg', fkCategoryId: 1 },
        ]
    }
    getAll(): Product[] {
        return this.data;
    }
    getById(id: number): Product {
        return this.data.find(prod => prod.id === id);
    }
    getByCategoryId(id: number): Product[] {
        return this.data.filter(prods => prods.fkCategoryId === id);
    }
    add(product: Product) {
        product.id = this.data.length + 1;
        this.data.push(product);
    }
    update(product: Product) {
        const i = this.data.findIndex(prod => prod.id === product.id);
        this.data[i] = product;
    }
    delete(id: number) {
        const i = this.data.findIndex(prod => prod.id === id);
        this.data.splice(i, 1);
    }
}
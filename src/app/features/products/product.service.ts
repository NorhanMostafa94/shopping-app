import { Product } from '../../_model/product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    data: Product[];
    constructor() {
        this.data = [
            { id: 1, name: 'pro-1', code: 111, price: 100, image: 'assets/images/elec-1.jpg', fkCategoryId: 1 },
            { id: 2, name: 'pro-2', code: 222, price: 200, image: 'assets/images/elec-2.jpg', fkCategoryId: 1 },
            { id: 3, name: 'pro-3', code: 333, price: 300, image: 'assets/images/elec-3.jpg', fkCategoryId: 1 },
            { id: 4, name: 'pro-4', code: 444, price: 400, image: 'assets/images/wat-1.png', fkCategoryId: 2 },
            { id: 5, name: 'pro-5', code: 555, price: 500, image: 'assets/images/wat-2.png', fkCategoryId: 2 },
            { id: 6, name: 'pro-6', code: 666, price: 600, image: 'assets/images/wat-3.png', fkCategoryId: 2 },
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
        const i = this.data.length + 1;
        product.id = i;
        this.data.push(product);
    }
    update(product: Product) {
        const i = this.data.findIndex(prod => prod.id === product.id);
        this.data[i] = product;
    }
    delete(arr) {
        return this.data = this.data.filter(el => {
            return !arr.includes(el.id);
        })
        // return this.data;


        console.log(this.data)
    }
}
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../product.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() data: Product[]
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.data) {
      const id = +this.activatedRoute.snapshot.params.id;
      this.data = this.productService.getByCategoryId(id);
      console.log(this.data)
    }
  }

}

import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../product.service';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  data: Product[];
  product: Product;
  id: number;
  modalRef: BsModalRef;
  addProductForm: FormGroup;
  pData: Product[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.data = this.productService.getByCategoryId(this.id);
      this.pData = this.data.slice(0, 3);
      console.log(this.data)
      if (this.data.length == 0) {
        console.log('null')
      }
    })

    //form
    this.addProductForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.compose([Validators.required,
      Validators.max(10000)])),
      productCode: new FormControl('')
    })

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.addProductForm.getRawValue();
    this.product = {
      name: this.addProductForm.controls.productName.value,
      code: this.addProductForm.controls.productCode.value,
      price: this.addProductForm.controls.productPrice.value,
      image: 'assets/images/avatar.jpg',
      fkCategoryId: this.id
    };
    if (this.addProductForm.controls.productName.valid && this.addProductForm.controls.productCode.valid && this.addProductForm.controls.productPrice.valid) {
      // this.productService.add(this.product);
      this.data.push(this.product)
      this.modalService.hide(1)
      console.log(this.addProductForm.controls.productPrice);
      // console.log(this.productService.getAll())
    }
  }

  //pagination
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.pData = this.data.slice(startItem, endItem);
  }

}

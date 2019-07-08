import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../product.service';

import { FormGroup, FormControl } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  modalRef: BsModalRef;
  editProductForm: FormGroup;
  constructor(private productService: ProductService, private modalService: BsModalService) { }

  ngOnInit() {
    this.editProductForm = new FormGroup({
      productName: new FormControl(''),
      productPrice: new FormControl('')
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.editProductForm.controls.productName.valid && this.editProductForm.controls.productPrice.valid) {
      this.product.name = this.editProductForm.controls.productName.value;
      this.productService.update(this.product)
      this.modalService.hide(1)
    }
  }

}

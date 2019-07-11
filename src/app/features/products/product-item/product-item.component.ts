import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../product.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
let deletedArray = []
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() isDisabled;
  modalRef: BsModalRef;
  editProductForm: FormGroup;
  @Output() sendToParent = new EventEmitter();
  // deletedArray: number[];
  constructor(private productService: ProductService, private modalService: BsModalService) { }

  ngOnInit() {
    this.isDisabled = true;
    console.log(this.isDisabled)
    this.editProductForm = new FormGroup({
      productName: new FormControl(''),
      productPrice: new FormControl('', Validators.compose([Validators.required,
      Validators.max(100000)])),
      productCode: new FormControl('', Validators.required)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    console.log(this.editProductForm.controls.productName.value)
    if (this.editProductForm.controls.productName.valid && this.editProductForm.controls.productPrice.valid && this.editProductForm.controls.productCode.valid) {
      this.product.name = this.editProductForm.controls.productName.value;
      this.product.price = this.editProductForm.controls.productPrice.value;
      this.product.code = this.editProductForm.controls.productCode.value;
      this.productService.update(this.product)
      this.modalService.hide(1)
    }
  }

  deleteProducts(event, id: number) {
    if (event.target.checked) {
      deletedArray.push(id);
      this.isDisabled = false
      this.sendToParent.emit(deletedArray)
    }
    else if (deletedArray.includes(id)) {
      for (let i = 0; i < deletedArray.length; i++) {
        if (deletedArray[i] == id) {
          deletedArray.splice(i, 1);
          this.sendToParent.emit(deletedArray)
        }
      }
    }
  }

}

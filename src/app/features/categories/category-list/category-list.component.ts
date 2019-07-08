import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Category } from '../../../_model/category';
import { CategoryService } from '../category.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input() data: Category[];
  category: Category;
  addCategoryForm: FormGroup;
  modalRef: BsModalRef;
  constructor(private categoryService: CategoryService, private modalService: BsModalService) { }
  ngOnInit() {
    if (!this.data) {
      this.data = this.categoryService.getAll();
    }
    this.addCategoryForm = new FormGroup({
      categoryName: new FormControl('')
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit() {
    this.addCategoryForm.getRawValue();
    this.category = { name: this.addCategoryForm.controls.categoryName.value, image: 'assets/images/avatar.jpg' }
    if (this.addCategoryForm.controls.categoryName.valid) {
      this.categoryService.add(this.category)
      this.addCategoryForm.controls.categoryName.setValue('')
      this.modalService.hide(1);
    }
    console.log(this.addCategoryForm.controls.categoryName)
  }

}

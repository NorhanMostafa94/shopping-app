import { Component, OnInit } from '@angular/core';

import { Category } from '../../_model/category';
import { CategoryService } from '../../features/categories/category.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: Category[]
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.data = this.categoryService.getAll();
  }

}

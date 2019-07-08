import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../_model/category';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {ICategory} from "../interfaces/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.get().subscribe(data => {
      console.log(data);
      this.categories = data;
    })
  }

}

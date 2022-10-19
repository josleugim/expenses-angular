import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {ICategory} from "../interfaces/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Constants} from "../utils/constants";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  )
  {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(Constants.ALPHABET)]]
    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(): void {
    this.categoryService.post(this.categoryForm.value).subscribe(response => {
      this.categoryForm.reset();
      this.getCategories();
    })
  }

  get name() {
    return this.categoryForm.controls['name'];
  }

  getCategories(): void {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    })
  }

  delete(id: number): void {
    this.categoryService.deleteById(id).subscribe(response => {
      this.getCategories();
    })
  }
}

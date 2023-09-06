import { Component } from '@angular/core'
import { CategoryRepository } from '../models/category.repository'

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
})
export class CategoryComponent {
    categoryModel = new CategoryRepository()

    categories = this.categoryModel.getCategories()
}

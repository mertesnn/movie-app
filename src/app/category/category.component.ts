import { Component } from '@angular/core'
import { Category } from '../models/category'
import { CategoryRepository } from '../models/category.repository'

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
})
export class CategoryComponent {
    categories: Category[]
    categoryRepository: CategoryRepository
    title: string = 'All Categories'
    displayAll: boolean = true
    selectedCategory: Category

    constructor() {
        this.categoryRepository = new CategoryRepository()
        this.categories = this.categoryRepository.getCategories()
    }

    selectCategory(item?: Category) {
        if (item) {
            this.displayAll = false
            this.selectedCategory = item
        } else {
            this.displayAll = true
            this.selectedCategory = null
        }
    }
}

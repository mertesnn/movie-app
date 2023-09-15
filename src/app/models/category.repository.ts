import { Category } from './category'

export class CategoryRepository {
    private categories: Category[]

    constructor() {
        this.categories = [
            { id: 1, name: 'Adventure' },
            { id: 2, name: 'Romantic' },
            { id: 3, name: 'Drama' },
            { id: 4, name: 'Science Fiction' },
        ]
    }

    getCategories(): Category[] {
        return this.categories
    }

    getCategoriesByID(id: number): Category {
        return this.categories.find((item) => item.id === id)
    }
}

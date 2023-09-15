import { Pipe, PipeTransform } from '@angular/core'
import { Movies } from '../models/movie'

@Pipe({
    name: 'movieFilter',
})
export class MovieFilterPipe implements PipeTransform {
    transform(movies: Movies[], filterText: string): Movies[] {
        filterText = filterText.toLowerCase()

        if (filterText) {
            return movies.filter(
                (item: Movies) =>
                    item.name.toLowerCase().includes(filterText) ||
                    item.desc.toLocaleLowerCase().includes(filterText)
            )
        }

        return movies
    }
}

import { Component, Input } from '@angular/core'
import { Movies } from 'src/app/models/movie'

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
})
export class MovieComponent {
    @Input() movie: Movies

    addToList($event: MouseEvent) {
        const el = $event.target as HTMLButtonElement

        if (el.classList.contains('btn-primary')) {
            el.classList.add('btn-danger')
            el.classList.remove('btn-primary')
            el.innerText = 'Remove from List'
        } else {
            el.classList.remove('btn-danger')
            el.classList.add('btn-primary')
            el.innerText = 'Add to List'
        }
    }
}

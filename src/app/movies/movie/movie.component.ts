import { Component, Input, OnInit } from '@angular/core'
import { Movies } from 'src/app/models/movie'

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
})
export class MovieComponent {
    @Input() movie: Movies | undefined
}

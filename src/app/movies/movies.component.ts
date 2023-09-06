import { Component } from '@angular/core'
import { MovieRepository } from '../models/movie.repository'

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
})
export class MoviesComponent {
    movieModel = new MovieRepository()

    movies = this.movieModel.getMovies()
}

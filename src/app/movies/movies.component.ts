import { Component } from '@angular/core'
import { Movies } from '../models/movie'
import { MovieRepository } from '../models/movie.repository'

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
})
export class MoviesComponent {
    title = 'Film Listesi'
    movies: Movies[]
    popularMovies: Movies[]
    movieRepository: MovieRepository
    filterText: string = ''

    constructor() {
        this.movieRepository = new MovieRepository()
        this.movies = this.movieRepository.getMovies()
        this.popularMovies = this.movieRepository.getPopularMovies()
    }
}

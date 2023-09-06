import { Movies } from './movie'

export class MovieRepository {
    private movies: Movies[]

    constructor() {
        this.movies = [
            {
                id: 1,
                name: 'Film 1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mauris, ornare et ornare eu, mattis molestie libero. Duis nec imperdiet tellus, id pretium neque. Phasellus vitae nibh id purus rhoncus commodo. Nulla vel ligula semper, imperdiet elit eu, suscipit velit. Vivamus tincidunt id mauris scelerisque viverra. Integer congue sem in nisl placerat accumsan. Nunc et justo eget nisi porttitor ultricies in at lorem. Aliquam hendrerit iaculis nisl, vel imperdiet diam congue non. Quisque tempor elit id aliquet semper. In orci dui, convallis et mollis eu, bibendum in felis. Proin facilisis augue id pharetra lacinia. Donec in tempor elit, vestibulum venenatis tortor. ',
                img: '1.jpeg',
            },
            {
                id: 2,
                name: 'Film 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mauris, ornare et ornare eu, mattis molestie libero. Duis nec imperdiet tellus, id pretium neque. Phasellus vitae nibh id purus rhoncus commodo. Nulla vel ligula semper, imperdiet elit eu, suscipit velit. Vivamus tincidunt id mauris scelerisque viverra. Integer congue sem in nisl placerat accumsan. Nunc et justo eget nisi porttitor ultricies in at lorem. Aliquam hendrerit iaculis nisl, vel imperdiet diam congue non. Quisque tempor elit id aliquet semper. In orci dui, convallis et mollis eu, bibendum in felis. Proin facilisis augue id pharetra lacinia. Donec in tempor elit, vestibulum venenatis tortor. ',
                img: '2.jpeg',
            },
            {
                id: 3,
                name: 'Film 3',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mauris, ornare et ornare eu, mattis molestie libero. Duis nec imperdiet tellus, id pretium neque. Phasellus vitae nibh id purus rhoncus commodo. Nulla vel ligula semper, imperdiet elit eu, suscipit velit. Vivamus tincidunt id mauris scelerisque viverra. Integer congue sem in nisl placerat accumsan. Nunc et justo eget nisi porttitor ultricies in at lorem. Aliquam hendrerit iaculis nisl, vel imperdiet diam congue non. Quisque tempor elit id aliquet semper. In orci dui, convallis et mollis eu, bibendum in felis. Proin facilisis augue id pharetra lacinia. Donec in tempor elit, vestibulum venenatis tortor. ',
                img: '3.jpeg',
            },
            {
                id: 4,
                name: 'Film 4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mauris, ornare et ornare eu, mattis molestie libero. Duis nec imperdiet tellus, id pretium neque. Phasellus vitae nibh id purus rhoncus commodo. Nulla vel ligula semper, imperdiet elit eu, suscipit velit. Vivamus tincidunt id mauris scelerisque viverra. Integer congue sem in nisl placerat accumsan. Nunc et justo eget nisi porttitor ultricies in at lorem. Aliquam hendrerit iaculis nisl, vel imperdiet diam congue non. Quisque tempor elit id aliquet semper. In orci dui, convallis et mollis eu, bibendum in felis. Proin facilisis augue id pharetra lacinia. Donec in tempor elit, vestibulum venenatis tortor. ',
                img: '4.jpeg',
            },
            {
                id: 5,
                name: 'Film 5',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mauris, ornare et ornare eu, mattis molestie libero. Duis nec imperdiet tellus, id pretium neque. Phasellus vitae nibh id purus rhoncus commodo. Nulla vel ligula semper, imperdiet elit eu, suscipit velit. Vivamus tincidunt id mauris scelerisque viverra. Integer congue sem in nisl placerat accumsan. Nunc et justo eget nisi porttitor ultricies in at lorem. Aliquam hendrerit iaculis nisl, vel imperdiet diam congue non. Quisque tempor elit id aliquet semper. In orci dui, convallis et mollis eu, bibendum in felis. Proin facilisis augue id pharetra lacinia. Donec in tempor elit, vestibulum venenatis tortor. ',
                img: '5.jpeg',
            },
        ]
    }

    getMovies(): Movies[] {
        return this.movies
    }

    getMoviesByID(id: number): Movies {
        return this.movies.find((item) => item.id === id)
    }
}

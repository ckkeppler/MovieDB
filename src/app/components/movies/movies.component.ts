import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  getMovies(searchString: string) {
    // calls movie service method and retrieves an array of movies to display in the template
    this.movieService.getMovies(searchString).subscribe((movie: Movie[]) => {
      console.log(movie);
      this.movies = movie;
    });
  }
}

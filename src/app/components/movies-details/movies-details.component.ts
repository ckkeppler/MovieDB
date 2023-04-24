import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  movie!: Movie;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    // calls movie service method and
    // uses paramMap to get current id and return the movie object
    this.movieService
      .getMovieById(this.route.snapshot.paramMap.get('id')!)
      .subscribe((movie) => {
        this.movie = movie;
        console.log(this.movie);
      });
  }
}

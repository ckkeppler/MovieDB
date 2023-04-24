import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  @Input('movie')
  movie!: Movie;

  getMovieImage() {
    if (this.movie?.Poster == 'N/A') {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmAXITJdNGMff2a33B95sGQLApr9Q41rurgiqKcg&s';
    } else return this.movie?.Poster;
  }
}

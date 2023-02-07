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

  getImage() {
    if (this.movie.Poster == 'N/A') {
      return 'https://via.placeholder.com/200';
    } else return this.movie.Poster;
  }
}

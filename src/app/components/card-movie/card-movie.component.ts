import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  @Input('movie') movie: any;

  getImage() {
    if (this.movie.Poster == 'N/A') {
      return 'https://via.placeholder.com/200';
    } else return this.movie.Poster;
  }
}

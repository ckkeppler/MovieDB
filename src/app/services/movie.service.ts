import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../models/movie';

export interface Response {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL: string = 'https://www.omdbapi.com/?';
  private KEY: string = '&apikey=62a1a4fe';

  constructor(private http: HttpClient) {}

  getMovies(searchString: string): Observable<Movie[]> {
    // uses Http Client to get an array of movies based on search string
    return this.http
      .get<Response>(`${this.URL}&s=${searchString}${this.KEY}`)
      .pipe(
        map((response) => {
          return response.Search;
        })
      );
  }

  getMovieById(id: string): Observable<Movie> {
    // uses Http Client to retrieve a single movie based on its
    return this.http.get<Movie>(`${this.URL}i=${id}${this.KEY}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}

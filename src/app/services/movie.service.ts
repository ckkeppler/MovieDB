import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { ResponseApi } from '../models/responseApi';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = 'http://www.omdbapi.com/?';
  private API_KEY: string = '&apikey=62a1a4fe';

  constructor(private http: HttpClient) {}

  getMovies(searchString: string): Observable<Movie[]> {
    return this.http
      .get<ResponseApi>(`${this.API_URL}&s=${searchString}${this.API_KEY}`)
      .pipe(
        map((response) => {
          return response.Search;
        })
      );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.API_URL}i=${id}${this.API_KEY}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}

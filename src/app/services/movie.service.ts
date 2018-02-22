import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
  movies: any;
    constructor(
    private http: HttpClient,
  ) { }

  getMovies() {
    return this.http.get('https://swapi.co/api/films/', { observe: 'events' });
  }
}

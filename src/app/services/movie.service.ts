import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://swapi.co/api';
@Injectable()
export class MovieService {
  movies: any;
    constructor(
    private http: HttpClient,
  ) { }

  getMovies() {
    return this.http.get(`${baseUrl}/films/`, { observe: 'events' });
  }

  getMovieById(id) {
    return this.http.get(`${baseUrl}/films/${id}`);
  }
}

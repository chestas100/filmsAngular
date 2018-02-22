import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieService } from './services/movie.service';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.movieService.getMovieById(route.params.id);
  }
}

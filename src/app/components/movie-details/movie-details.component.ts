import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.data.movieData);
    this.movie = this.route.snapshot.data.movieData;
  }

}

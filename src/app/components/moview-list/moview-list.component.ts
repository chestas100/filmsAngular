import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-moview-list',
  templateUrl: './moview-list.component.html',
  styleUrls: ['./moview-list.component.css']
})
export class MoviewListComponent implements OnInit {
  movies: any;
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((res: any) => {
      if (res instanceof HttpResponse) {
        this.movies = res.body.results;
        console.log(res.body);
      }
      console.log(res);
      // this.movies = res.results;
      // console.log(this.movies);
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moview-list',
  templateUrl: './moview-list.component.html',
  styleUrls: ['./moview-list.component.css']
})
export class MoviewListComponent implements OnInit {
  movies = [
    {
      title: 'title1',
      year: 2015,
    },
    {
      title: 'title3',
      year: 2016,
    },
    {
      title: 'title2',
      year: 2017,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

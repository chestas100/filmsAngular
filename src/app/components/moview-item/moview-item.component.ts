import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

// DI= огрничение знаний. + для тестов, чтобы можно было заменить

@Component({
  selector: 'app-moview-item',
  templateUrl: './moview-item.component.html',
  styleUrls: ['./moview-item.component.css']
})
export class MoviewItemComponent implements OnInit {
  @Input() movie;
  editMode = false;
  movieItemForm = new FormGroup({
    edited: new FormControl(),
    title: new FormControl()
  });

  ngOnInit() {
    this.movieItemForm.setValue({
      edited: this.movie.edited,
      title: this.movie.title
    });
    this.movieItemForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  get title(): FormControl {
    return this.movieItemForm.get('title').value;
  }

  get edited(): FormControl {
    return this.movieItemForm.get('edited').value;
  }
}

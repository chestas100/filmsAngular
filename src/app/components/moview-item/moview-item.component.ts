import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moview-item',
  templateUrl: './moview-item.component.html',
  styleUrls: ['./moview-item.component.css']
})
export class MoviewItemComponent implements OnInit {
  @Input() movie;
  movieItemForm = new FormGroup({
    newInput: new FormControl(),
  });

  ngOnInit() {
    setTimeout(() => {
      this.movieItemForm.setValue({newInput: 'new value here'});
    }, 2000);
    this.movieItemForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

}

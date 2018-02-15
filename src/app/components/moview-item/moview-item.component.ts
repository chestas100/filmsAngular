import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-moview-item',
  templateUrl: './moview-item.component.html',
  styleUrls: ['./moview-item.component.css']
})
export class MoviewItemComponent implements OnInit {
  @Input() movie;
  newInput = new FormControl;

  ngOnInit() {
    setTimeout(() => {
      this.newInput.setValue('new value here');
    }, 2000);
    this.newInput.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

}

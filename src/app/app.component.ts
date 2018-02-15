import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// decorator descriptora
@Component({
  selector: 'app-root',  // property descriptor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app11';  // component state

  ngOnInit() { }
}

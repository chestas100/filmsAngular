import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviewListComponent } from './components/moview-list/moview-list.component';
import { MoviewItemComponent } from './components/moview-item/moview-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviewListComponent,
    MoviewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

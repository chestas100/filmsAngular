import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviewListComponent } from './components/moview-list/moview-list.component';
import { MoviewItemComponent } from './components/moview-item/moview-item.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieResolver } from './movieResolver';

const appRoutes: Routes = [
  {
    path: 'movie',
    component: MoviewListComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: {
      movieData: MovieResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/movie'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MoviewListComponent,
    MoviewItemComponent,
    MovieDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    MovieService,
    MovieResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

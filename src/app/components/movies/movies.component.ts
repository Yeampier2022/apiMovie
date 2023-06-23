import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any[] = [];

  form = this.formBuilder.group({ searchTerm: '' });
  constructor(
    private movieServices: MovieService,
    private formBuilder: FormBuilder
  ) {}

  getMovies(searchTerm: any) {
    this.movieServices.getMovies(searchTerm).subscribe((data) => {
      this.movies = data.Search;
    });
  }
}

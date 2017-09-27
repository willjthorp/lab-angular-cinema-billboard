import { Component, OnInit } from '@angular/core';

import { CinemaService } from '../../services/cinema.service'

import { Movie } from '../../models/movie'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie: Movie[]

  movieId: number;

  newCinemaService: CinemaService;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.newCinemaService = new CinemaService
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.movie = this.newCinemaService.getMovie(this.movieId)
    });
  }

}

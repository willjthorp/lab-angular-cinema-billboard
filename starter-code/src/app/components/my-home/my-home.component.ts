import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service'

import { Movie } from '../../models/movie'

import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Movie[]

  constructor(private cinemaService: CinemaService) {
    this.movies = cinemaService.getMovies();
  }

  ngOnInit() {
  }

}

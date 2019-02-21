import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () =>
    // map over your movieData array and return the correct
    movieData.map(film => <MovieCard title={film.title} IMDBRating={film.IMDBRating} genres={film.genres} poster={film.poster}/>)


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

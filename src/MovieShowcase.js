import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
		return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
	};
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


//   title: 'Choux and Maru go to Istanbul',
//   IMDBRating: 3,
//   genres: ['cats', 'adventure', 'romance'],
//   poster: 'choux-maru-istanbul'


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TvShows extends Component {
  state = {
    searchedMovies: [],
    error: null
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=752926e9&s=harry%20potter")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Impossibile recuperare i dati");
        }
      })
      .then(movies => {
        this.setState({
          searchedMovies: movies.Search ? movies.Search.slice(0, 6) : [],
          error: null
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
        console.error("Errore durante la fetch:", error);
      });
  }

  render() {
    const { searchedMovies, error } = this.state;

    return (
      <div>
        <div>
          <h1 id="tt">Harry Potter</h1>
          <h5 id="tt">Guarda in ordine cronologico</h5>
        </div>
        <div className="row mt-2 mb-4" id="st">
          {error ? (
            <p className='text-white'>Si è verificato un errore: {error}</p>
          ) : (
            searchedMovies.map(movie => (
              <div className="col-6 col-md-4 col-lg-2 mb-2 text-center px-1" key={movie.imdbID}>
                <Link to="/detail"> 
                  <img src={movie.Poster} className="img-fluid post" alt="movie poster" id="movie-poster" />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default TvShows;
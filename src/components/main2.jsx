import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Maind extends Component {
  state = {
    searchedMovies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=752926e9&s=Fast&Furious")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Impossibile recuperare i dati");
        }
      })
      .then(movies => {
        this.setState({
          searchedMovies: movies.Search ? movies.Search.slice(0, 6) : []
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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-2 mb-4" id="st">
        {error ? 
        (<p className='text-white'>Si è verificato un errore: {error}</p> ) : (
          searchedMovies.map(movie => (
            <div className="col-6 col-md-4 col-lg-2 mb-2 text-center px-1" key={movie.imdbID}>
              <img src={movie.Poster} className="img-fluid" alt="movie poster" id="movie-poster"/>
            </div>
          ))
        )}
      </div>
    );
  }
  
}

export default Maind;
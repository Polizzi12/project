import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class main extends Component {
  state = {
    searchedMovies: [],
  };

  manage = () => {
    fetch("", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("impossibile recuperare i dati");
        }
      })

      .then((movies) => {
       
        this.setState({
          searchedMovies: movies.Search,
        });
      })

      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.manage();
  }

  render() {
    return (
     

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-2 mb-4">
          {this.state.searchedMovies.map((movie) => {
            
              return (
                <div className="col-6 col-md-4 col-lg-2 mb-2 text-center px-1" key={movie.imdbID}>
                
                  <img src={movie.Poster} className="img-fluid" alt="movie poster"></img>
                
                </div>
              );
            
          })}
        </div>
 
    );
  }
}

export default Gallery;
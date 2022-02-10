import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There is no movie in the database</p>;
    return (
      <React.Fragment>
        {/* {count > 0 ? (
          <p>
            Showing {this.getMovieCount()}
            {this.getMovieCount() === 1 ? " movie" : " movies"} in the database
          </p>
        ) : (
          <p>There is no movie in the database</p>
        )} */}
        <p>
          Showing {count} {count === 1 ? " movie" : " movies"} in the database
        </p>

        {count > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <th>{movie.title}</th>
                  <th>{movie.genre.name}</th>
                  <th>{movie.numberInStock}</th>
                  <th>{movie.dailyRentalRate}</th>
                  <th>
                    <button
                      style={{ textTransform: "uppercase" }}
                      onClick={() => this.onDeleteMovie(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }

  getMovieCount = () => this.state.movies.length;

  onDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
}

export default Movies;

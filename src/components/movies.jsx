import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;
    console.log(movies);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const itemPerPage = 3;
    const totalPages = Math.ceil(count / itemPerPage);

    if (count === 0) return <p>There is no movie in the database</p>;
    return (
      <React.Fragment>
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      isLiked={movie.isLiked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      style={{ textTransform: "uppercase" }}
                      onClick={() => this.onDeleteMovie(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Pagination />
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

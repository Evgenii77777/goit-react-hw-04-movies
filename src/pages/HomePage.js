import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = { movies: [] };
  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=f579fcbbcf5d2ce91ce8a1bd692fe85b`
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <>
        <h2>Movies</h2>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

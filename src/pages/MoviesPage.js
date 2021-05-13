import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchSearch } from "../components/api";

class MoviesPage extends Component {
  state = {
    movies: [],
    value: "",
  };

  componentDidMount() {
    this.props.location?.state?.search &&
      fetchSearch(this.props.location.state.search).then((data) => {
        console.log(data);
        this.setState({ movies: data.results });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) {
      return;
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
    fetchSearch(this.state.value).then((data) => {
      this.setState({ movies: data.results });
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: this.props.location.pathname,
                    search: this.state.value,
                  },
                }}
              >
                {movie.original_name ||
                  movie.name ||
                  movie.original_title ||
                  movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;

import React, { Component } from "react";
import Cast from "./Cast";
import Reviews from "./Reviews";
import axios from "axios";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

class MovieDetailsPage extends Component {
  state = {
    original_title: null,
    overview: null,
    genres: [],
    popularity: null,
    poster_path: 0,
    release_date: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f579fcbbcf5d2ce91ce8a1bd692fe85b&language=en-US`
    );
    console.log(response.data);
    this.setState({ ...response.data });
  }
  HandleGoBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <button type="button" onClick={this.HandleGoBack}>
          Go back
        </button>
        <h1>MovieDetailsPage</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`}
          alt=""
        />
        <h2>{this.state.original_title}</h2>
        <p>Release date: {this.state.release_date}</p>
        <span>Popularity: {this.state.popularity}</span>
        <p>Overview: {this.state.overview}</p>
        <ul>
          <li>
            <NavLink
              to={`${this.props.match.url}/cast`}
              className="NavLink"
              activeClassName="NavLink--active"
              exact
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/reviews`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Review
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path={`${this.props.match.path}/cast`}
            component={Cast}
          ></Route>
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          ></Route>
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;

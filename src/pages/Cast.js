import React, { Component } from "react";
import axios from "axios";

class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f579fcbbcf5d2ce91ce8a1bd692fe85b&language=en-US`
    );
    this.setState({ cast: response.data.cast });
  }
  render() {
    return (
      <>
        <h2>Cast</h2>
        <ul>
          {this.state.cast.map((cas) => (
            <li key={cas.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${cas.profile_path}`}
                alt=""
              />
              <h3>{cas.name}</h3>
              <p>Character: {cas.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;

import React, { Component } from "react";
import axios from "axios";

class Reviews extends Component {
  state = { reviews: [] };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f579fcbbcf5d2ce91ce8a1bd692fe85b&language=en-US`
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    return (
      <>
        <h2>Rew</h2>
        <ul>
          {this.state.reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;

import React, { Component } from "react";

class SearchBar extends Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    // this.props.history.push({ search: `pull=${this.state.input}` });
  };
  // componentDidUpdate(prevProps) {
  //   if (prevProps.location.search !== this.props.location.search) {
  //     console.log("change!!!!!!!!!!!!!!!!");
  //   }
  // }
  // componentDidMount() {
  //   if (this.props.location.search) {
  //     console.log("featchInishData");
  //   }
  // }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          type="text"
          onChange={this.handleChange}
          className=" border"
        />
        <button type="submit">SEARCH</button>
      </form>
    );
  }
}

export default SearchBar;

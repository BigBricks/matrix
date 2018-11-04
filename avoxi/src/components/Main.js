import React, { Component } from "react";
import { searchTodo } from "../actions/index";
import { connect } from "react-redux";
import Table from "./Table";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: ""
    };
  }
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  search = () => {
    const { search } = this.state;
    this.props.searchTodo({ search });
    this.setState({ search: "" });
  };
  render() {
    const { search, movies } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          value={search}
          name="search"
          placeholder="Search Bar"
          onChange={this.handleTextInput}
        />
        <button onClick={this.search}>Search</button>
        <Table movies={movies} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { searchTodo }
)(Main);

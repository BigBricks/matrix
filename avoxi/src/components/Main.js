import React, { Component } from "react";
import { searchTodo } from "../actions/index";
import { connect } from "react-redux";

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
    const Do = {
      search: this.state.search
    };
    this.props.searchTodo(Do);
    this.setState({ search: "" });
  };
  render() {
    const { search } = this.state;
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

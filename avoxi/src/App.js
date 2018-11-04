import React, { Component } from "react";
import "./App.css";
import { searchTodo } from "./actions";
import { connect } from "react-red";

class App extends Component {
  state = {
    movies: [],
    search: ""
  };
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  search() {
    const { search } = this.state;
    this.props.fetchTodo(search);
    this.setState({ search: "" });
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={search}
          name="search"
          placeholder="Search Bar"
          onChange={this.handleTextInput}
        />
        <button onClick={this.search()}>Search</button>
      </div>
    );
  }
}

export default App;

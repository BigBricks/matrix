import React, { Component } from "react";
import { searchTodo } from "../actions/index";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
class Main extends Component {
  state = {
    movies: [],
    search: ""
  };
  componentDidMount() {
    console.log(this.state.movies);
  }
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  search = () => {
    const { search } = this.state;
    this.props.searchTodo(search);
    console.log(this.state.movies);
  };
  render() {
    const { search } = this.state;
    return (
      <div className="App">
        <h2 className="headerApp">
          If nothing shows up that means that omdb responded with an error due
          to too many/few options or being unable to find the movie in question
        </h2>
        <input
          pattern=".{3,}"
          required
          title="3 characters minimum"
          className="searchBar"
          type="text"
          value={search}
          name="search"
          placeholder="Search Bar"
          onChange={this.handleTextInput}
        />
        <button onClick={this.search}>Search</button>
        <Paper className="tablePage">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>imdbID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Poster</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.movies.map((row, index) => {
                return (
                  <TableRow key={row.Title}>
                    <TableCell>{row.Title}</TableCell>
                    <TableCell>{row.Year}</TableCell>
                    <TableCell>{row.imdbID}</TableCell>
                    <TableCell>{row.Type}</TableCell>
                    <TableCell>
                      <a href={row.Poster} className="postAnchor">
                        {row.Poster}
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
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

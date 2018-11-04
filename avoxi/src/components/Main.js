import React, { Component } from "react";
import { searchTodo } from "../actions/index";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table2 from "./Table";
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
  renderTable = () => {
    console.log(this.state.movies);
    return this.state.movies.map(value => {
      return (
        <div>
          BOb
          <table>
            <tr>
              <td>Title</td>
              <td>{value.Title}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{value.Year}</td>
            </tr>
            <tr>
              <td>imdbID</td>
              <td>{value.imdbID}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{value.Type}</td>
            </tr>
            <tr>
              <td>Poster</td>
              <td>{value.Poster}</td>
            </tr>
          </table>
        </div>
      );
    });
  };
  search = () => {
    const { search } = this.state;
    this.props.searchTodo({ search });
    this.setState({ search: "" });
    console.log(this.state.movies);
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
        <Table2 data={movies} />
        {/* <Table>
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
            {movies.map((row, index) => {
              return (
                <TableRow key={row.Title}>
                  <TableCell>{row.Title}</TableCell>
                  <TableCell>{row.Year}</TableCell>
                  <TableCell>{row.imdbID}</TableCell>
                  <TableCell>{row.Type}</TableCell>
                  <TableCell>{row.Poster}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table> */}
        {/* {this.renderTable()} */}
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

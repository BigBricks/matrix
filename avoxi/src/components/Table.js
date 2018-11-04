import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table2 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.movies}>
          <TableHeaderColumn dataField="Title">Title</TableHeaderColumn>
          <TableHeaderColumn dataField="Year">Year</TableHeaderColumn>

          <TableHeaderColumn isKey dataField="imdbID">
            imdbID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Type">Type</TableHeaderColumn>
          <TableHeaderColumn dataField="Poster">Poster</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default Table2;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proposedHeight: this.props.length
    };
  }

  render() {
    const cells = Array.from(new Array(this.props.length), (x, i) => (
      <Cell key={i + 1}>{i + 1}</Cell>
    ));
    return (
      <div className="column">
        <div className="cell-container">{cells}</div>
        <div>
          <button onClick={this.handleDelete} className="delete">
            Lower
          </button>
          <button onClick={this.handleAdd} className="add">
            Higher
          </button>
        </div>
        <div>
          <input
            type="number"
            onChange={this.handleSetHeightChange}
            value={this.state.proposedHeight}
            min="0"
            max="12"
          />
          <button className="set-height" onClick={this.handleClick}>
            Set
          </button>
        </div>
        <div>
          <button className="remove-column" onClick={this.handleRemoveColumn}>
            Remove Column
          </button>
        </div>
      </div>
    );
  }

  handleAdd = () => {
    this.props.onAdd(this.props.colId);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.colId);
  };

  handleClick = () => {
    this.props.onSetHeight(this.props.colId, this.state.proposedHeight);
  };

  handleSetHeightChange = e => {
    this.setState({ proposedHeight: parseInt(e.target.value, 10) });
  };

  handleRemoveColumn = () => {
    this.props.onRemoveColumn(this.props.colId);
  };
}

Column.propTypes = {
  length: PropTypes.number
};

export default Column;

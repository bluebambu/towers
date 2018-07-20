import React, { Component } from "react";
import "./App.css";
import Column from "./Column";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="add-column" onClick={this.props.handleAddColumn}>
          Add Column
        </button>
        {this.props.columns.map((colHeight, index) => (
          <Column
            onAdd={this.props.handleAdd}
            onDelete={this.props.handleDelete}
            length={colHeight}
            onSetHeight={this.props.handleSetHeight}
            onRemoveColumn={this.props.handleRemoveColumn}
            colId={index}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default App;

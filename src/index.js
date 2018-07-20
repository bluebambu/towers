import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createStore } from "redux";
import {
  INCREASE,
  DECREASE,
  SET_HEIGHT,
  ADD_COLUMN,
  REMOVE_COLUMN
} from "./redux/actionTypes";
import {
  increase,
  decrease,
  setHeight,
  addColumn,
  removeColumn
} from "./redux/actionCreators";

const columnHeightLimit = 12;

const initialState = [7];

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      let incHeight = Math.min(
        state[action.payload.column] + 1,
        columnHeightLimit
      );
      return state.map(
        (el, index) => (index === action.payload.column ? incHeight : el)
      );
    case DECREASE:
      let decHeight = Math.max(state[action.payload.column] - 1, 0);
      return state.map(
        (el, index) => (index === action.payload.column ? decHeight : el)
      );
    case SET_HEIGHT:
      let setHeight = clamp(action.payload.newHeight, 0, columnHeightLimit);
      return state.map(
        (el, index) => (index === action.payload.column ? setHeight : el)
      );
    case ADD_COLUMN:
      return [...state, 7];
    case REMOVE_COLUMN:
      return state.filter((el, index) => action.payload.column !== index);
    default:
      return state;
  }
};

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const mapStateToProps = state => ({
  columns: state
});

const mapDispatchToProps = dispatch => ({
  handleAdd(colId) {
    dispatch(increase(colId));
  },

  handleDelete(colId) {
    dispatch(decrease(colId));
  },

  handleSetHeight(colId, newHeight) {
    dispatch(setHeight(colId, newHeight));
  },

  handleAddColumn() {
    dispatch(addColumn());
  },

  handleRemoveColumn(colId) {
    dispatch(removeColumn(colId));
  }
});

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

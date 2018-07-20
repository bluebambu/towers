import {
  INCREASE,
  DECREASE,
  SET_HEIGHT,
  ADD_COLUMN,
  REMOVE_COLUMN
} from "./actionTypes";

export function increase(column) {
  return { type: INCREASE, payload: { column } };
}

export function decrease(column) {
  return { type: DECREASE, payload: { column } };
}

export function setHeight(column, newHeight) {
  return { type: SET_HEIGHT, payload: { column, newHeight } };
}

export function addColumn() {
  return { type: ADD_COLUMN };
}

export function removeColumn(column) {
  return { type: REMOVE_COLUMN, payload: { column } };
}

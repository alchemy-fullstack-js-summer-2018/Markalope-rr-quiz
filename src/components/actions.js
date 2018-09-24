import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR } from './reducers';

const color = ['red', 'green', 'blue'];

export const loadColors = () => {
  return {
    type: COLORS_LOAD,
    payload: color
  };
};

export const addColor = color => {
  return {
    type: COLORS_ADD,
    payload: color
  };
};

export const selectColor = color => {
  return {
    type: SELECT_COLOR,
    payload: color
  };
};

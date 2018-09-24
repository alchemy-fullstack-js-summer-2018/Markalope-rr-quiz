export const COLORS_LOAD = 'COLORS_LOAD';
export const COLORS_ADD = 'COLORS_ADD';
export const SELECT_COLOR = 'SELECT_COLOR';

export const getColors = state => state.colors;
export const getSelectedColor = state => state.selectedColor;

export function colors(state = [], { type, payload }) {
  switch(type) {
    case COLORS_LOAD:
      return payload;
    case COLORS_ADD:
      return [...state, payload];
    default:
      return state;
  }

}
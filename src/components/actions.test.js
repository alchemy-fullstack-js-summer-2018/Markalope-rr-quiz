import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR } from './reducers';
import { loadColors, addColor, selectColor } from './actions';

describe('colors actions', () => {
  it('loads colors', () => {
    const colorList = ['red', 'green', 'blue'];
    const { type, payload } = loadColors(colorList);
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toEqual(colorList);
  });

  it('adds a color', () => {
    const color = 'purple';
    const { type, payload } = addColor(color);
    expect(type).toBe(COLORS_ADD);
    expect(payload).toEqual(color);
  });

  it('selects a color', () => {
    const color = 'steel blue';
    const { type, payload } = selectColor(color);
    expect(type).toBe(SELECT_COLOR);
    expect(payload).toBe(color);
  });

});
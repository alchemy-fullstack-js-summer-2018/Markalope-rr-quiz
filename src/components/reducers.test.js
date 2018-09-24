import { colors, COLORS_LOAD, COLORS_ADD } from './reducers';

describe ('color reducers', () => {

  describe('colors', ()  => {
    const colorList = ['red', 'green', 'blue'];

    it('creates an empty array', () => {
      const state = colors(undefined, {});
      expect (state).toEqual([]);
    });

    //COLOR_LOAD
    it ('loads initial colors', () => {
      const state = colors([], {
        type: COLORS_LOAD,
        payload: colorList
      });
      expect(state).toEqual(colorList);
    });

    //COLOR_ADD
    it('adds a color', () => {
      const state = colors([], {
        type: COLORS_ADD,
        payload: 'purple'
      });
      expect(state).toEqual(['purple']);
    });

    //COLOR_SELECT
  });


});
import { colors, COLORS_LOAD, COLORS_ADD, selectedColor, SELECT_COLOR } from './reducers';

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
    describe ('selected color', () => {
      it('default color is yellow', () => {
        const state = selectedColor('yellow', {});
        expect(state).toBe('yellow');
      });

      it('knows currently selected color', () => {
        const color = 'red';
        const state = selectedColor('', {
          type: SELECT_COLOR,
          payload: color
        });
        expect(state).toBe(color);
      });
    });

  });


});
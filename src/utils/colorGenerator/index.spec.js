import ColorGenerator from '.';

describe('ColorGenerator', () => {

  test('initializes with provided color set correctly', () => {
    const cs = ['red', 'orange'];
    const cg = new ColorGenerator(cs);
    expect(cg.getColorSet()).toEqual(cs);
  });

  test('gets random color from provided set', () => {
    const cs = ['red', 'orange', 'green'];
    const cg = new ColorGenerator(cs);
    // does it even make sense ?
    for(let i = 0; i < 20; i++) {
      expect(cs).toContain(cg.getRandomColor());
    }
  });

  test('returns null when initialized with empty array', () => {
    const cs = [];
    const cg = new ColorGenerator(cs);
    expect(cg.getRandomColor()).toBe(null);
  });

  test('returns null when there are no colors available', () => {
    const cs = ['red'];
    const cg = new ColorGenerator(cs);
    expect(cg.getRandomColor(cs[0])).toBe(null);
  });

  test('returns correct color when initialized with only single value', () => {
    const cs = ['red'];
    const cg = new ColorGenerator(cs);
    expect(cg.getRandomColor()).toBe(cs[0]);
  });
});
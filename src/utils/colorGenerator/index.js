import config  from '../../config';

/**
 * Class representing color generator.
 */
export default class ColorGenerator {
  /**
   * Create color generator
   * @param {string[]} colors - color set
   */
  constructor(colors) {
    this.colors = colors || config.constants.DEFAULT_LIGHT_COLORS;
  }

  /**
   * Get color set
   * @return {string[]} color set
   */
  getColorSet() {
    return this.colors;
  }

  /**
   * Get the random color from set
   * @param {string} exclude - color to exclude from set before getting random one
   * @return {string} random color
   *
   */
  getRandomColor(exclude) {
    let colors = [].concat(this.colors);
    if (exclude) {
      const index = colors.findIndex((color) => color === exclude);
      if (index > -1) {
        colors.splice(index, 1);
      }
    }
    return colors.length ? colors[Math.floor(Math.random() * colors.length)] : null;
  }

}

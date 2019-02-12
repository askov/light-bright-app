/**
 * Class representing light streak buffer.
 */
export default class StreakBuffer {
  /**
   * Create streak buffer
   */
  constructor() {
    this.buffer = [];
    this.streak = [];
  }

  /**
   * Push elements to buffer
   * @param {number|string} item - to store in buffer
   * @return {number} current buffer length
   */
  push(item) {
    if (this.buffer.indexOf(item) === -1) {
      this.buffer.push(item);
    }
    return this._size();
  }

  /**
   * Get current streak
   */
  getStreak() {
    return this.streak;
  }

  /**
   * Flush buffer by storing everything in streak
   */
  flush() {
    if (this.buffer.length) {
      this.streak = [...this.buffer];
    }
    this._clear();
  }

  /**
   * Get buffer size
   * @return {number} current buffer length
   */
  _size() {
    return this.buffer.length;
  }

  /**
   * Clear buffer
   */
  _clear() {
    this.buffer = [];
  }
}

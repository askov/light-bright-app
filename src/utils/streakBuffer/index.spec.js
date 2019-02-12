import StreakBuffer from '.';

describe('StreakBuffer', () => {

  test('initializes with emty streak', () => {
    const sb = new StreakBuffer();
    expect(sb.getStreak()).toHaveLength(0);
  });

  test('pushing to buffer does not update streak', () => {
    const sb = new StreakBuffer();
    sb.push(1);
    expect(sb.getStreak()).toHaveLength(0);
  });

  test('returns all buffer data after flush', () => {
    const sb = new StreakBuffer();
    sb.push(1);
    sb.push(2);
    sb.flush();
    expect(sb.getStreak()).toEqual([1, 2]);
  });

  test('duplicate values are not saved', () => {
    const sb = new StreakBuffer();
    sb.push(1);
    sb.push(1);
    sb.push(2);
    sb.flush();
    expect(sb.getStreak()).toEqual([1, 2]);
  });
});
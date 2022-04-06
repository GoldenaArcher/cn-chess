import { getIndexFromPos } from '../../utils/chessUtil';

test('get index from position', () => {
  expect(getIndexFromPos('j1')).toBe(0);
  expect(getIndexFromPos('a9')).toBe(89);
});

const ROW_MAP = new Map([
  ['j', 0],
  ['i', 1],
  ['h', 2],
  ['g', 3],
  ['f', 4],
  ['e', 5],
  ['d', 6],
  ['c', 7],
  ['b', 8],
  ['a', 9],
]);

const COL_MAP = new Map([
  ['1', 0],
  ['2', 1],
  ['3', 2],
  ['4', 3],
  ['5', 4],
  ['6', 5],
  ['7', 6],
  ['8', 7],
  ['9', 8],
]);

export const isValidPos = (pos: string): boolean => {
  return ROW_MAP.get(pos[0]) !== undefined && COL_MAP.get(pos[1]) !== undefined;
};

export const getIndexFromPos = (pos: string): number => {
  if (pos.length < 2) return -1;

  if (isValidPos(pos)) {
    return (ROW_MAP.get(pos[0]) || 0) * 9 + (COL_MAP.get(pos[1]) || 0);
  }

  return -1;
};

import ChessBoard from '../../types/Chessboard';
import Color from '../../types/Color';
import Jiang from '../../types/pieces/Jiang';

let board: ChessBoard;

beforeEach(() => {
  board = new ChessBoard();
});

test('place piece on board', () => {
  board.placePiece('c2', new Jiang(Color.BLACK, board));
  console.log(board.toString());
});

import ChessBoard from '../../types/Chessboard';
import Jiang from '../../types/pieces/ChessPiece';

let board: ChessBoard;

beforeEach(() => {
  board = new ChessBoard();
});

test('place piece on board', () => {
  board.placePiece('c2', new Jiang());
  console.log(board.toString());
});

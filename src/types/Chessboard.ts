import { getIndexFromPos } from '../utils/chessUtil';
import ChessPiece from './pieces/ChessPiece';

export default class ChessBoard {
  private _board: ChessPiece[] | null[];

  constructor() {
    this._board = Array(90).fill(null);
  }

  public placePiece(pos: string, piece: ChessPiece): boolean {
    const index = getIndexFromPos(pos);

    if (index < 0) return false;

    this._board[index] = piece;

    return true;
  }

  public getPiece(pos: string): ChessPiece | null {
    const index = getIndexFromPos(pos);

    return this._board[index];
  }

  public toString(): string {
    const str: string[] = [];

    this._board.forEach((piece, idx) => {
      if (idx % 9 === 0 && idx > 0) {
        str.push('\n');
      }

      if (piece === null) {
        str.push('X');
      } else {
        str.push('p');
      }
    });

    return str.join('');
  }
}

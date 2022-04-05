import ChessBoard from '../ChessBoard';
import Color from '../Color';
import PieceType from './PieceType';

abstract class ChessPiece {
  private _color: Color;
  private _position: string;
  private _board: ChessBoard;

  constructor(color: Color, board: ChessBoard, position = '') {
    this._color = color;
    this._position = position;
    this._board = board;
  }

  public get color(): Color {
    return this._color;
  }

  public set position(position: string) {
    this._position = position;
  }

  public get position(): string {
    return this._position;
  }

  public get board(): ChessBoard {
    return this._board;
  }

  public abstract getLegalMoves(): string[];

  public abstract getTypes(): PieceType;
}

export default ChessPiece;

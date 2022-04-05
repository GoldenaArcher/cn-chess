
import Chessboard from '../Chessboard';
import Color from '../Color';
import PieceType from './PieceType';

abstract class ChessPiece {
  private _color: Color;
  private _position: string;
  private _board: Chessboard;

  constructor(color: Color, board: Chessboard, position = '') {
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

  public get board(): Chessboard {
    return this._board;
  }

  public abstract getLegalMoves(): string[];

  public abstract get getTypes(): PieceType;

  public abstract get getImages(): string;
}

export default ChessPiece;

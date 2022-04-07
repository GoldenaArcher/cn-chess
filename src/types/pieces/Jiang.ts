import ChessPiece from './ChessPiece';
import PieceType from './PieceType';

export default class Jiang extends ChessPiece {
  public getLegalMoves(): string[] {
    return [];
  }
  public getTypes(): PieceType {
    return PieceType.JIANG;
  }
  public getImages(): string {
    return 'Color';
  }
}

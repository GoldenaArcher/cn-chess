import Chesspiece from './Chesspiece';
import PieceType from './PieceType';

export default class Jiang extends Chesspiece {
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

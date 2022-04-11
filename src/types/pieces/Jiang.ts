import Color from '../Color';
import ChessPiece from './ChessPiece';
import PieceType from './PieceType';

import jiangBlack from '../../assets/imgs/jiang-black.svg';
import jiangRed from '../../assets/imgs/jiang-red.svg';

export default class Jiang extends ChessPiece {
  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }
  public getTypes(): PieceType {
    return PieceType.JIANG;
  }

  public getImages(): string {
    if (this.color === Color.BLACK) {
      return jiangBlack;
    }

    return jiangRed;
  }
}

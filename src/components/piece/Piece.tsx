import { FC } from 'react';
import ChessPiece from '../../types/pieces/ChessPiece';
import style from './piece.module.css';

interface TileProps {
  idx: number;
  piece?: ChessPiece;
}

const Piece: FC<TileProps> = ({ idx, piece }) => {
  return (
    <div className={style.piece}>
      {piece ? (
        <img src={piece.getImages} alt={piece.getTypes.toString()} />
      ) : null}
    </div>
  );
};

export default Piece;

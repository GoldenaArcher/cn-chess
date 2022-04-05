import { FC } from 'react';
import ChessPiece from '../../types/pieces/ChessPiece';

import styled from 'styled-components';

interface TileProps {
  idx: number;
  piece?: ChessPiece;
}

const Img = styled.img`
  max-width: 100%;
`;

const Piece: FC<TileProps> = ({ idx, piece }) => {
  return (
    <div className="chess-piece">
      {piece ? (
        <Img
          src={piece.getImages}
          alt={piece.getTypes.toString()}
          className="chess-piece__img"
        />
      ) : null}
    </div>
  );
};

export default Piece;

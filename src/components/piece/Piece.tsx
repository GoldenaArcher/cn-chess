import { FC } from 'react';
import ChessPiece from '../../types/pieces/ChessPiece';
import blankPiece from '../../assets/imgs/blank.svg';

import styled from 'styled-components';

interface TileProps {
  idx: number;
  piece?: ChessPiece;
}

const Piece: FC<TileProps> = ({ idx, piece }) => {
  let hasBoderBtm = Math.floor(idx / 9) !== 9 && Math.floor(idx / 9) !== 4;
  if ((idx % 9 === 0 || idx % 9 === 8) && Math.floor(idx / 9) !== 9) {
    hasBoderBtm = true;
  }
  const hasBorderRight = idx % 9 !== 8;

  const image = piece ? piece.getImages : blankPiece;
  const alt = piece ? piece.getTypes.toString() : 'blank piece';

  return (
    <ChessPieceUI hasBefore={hasBoderBtm} hasAfter={hasBorderRight}>
      <Img src={image} alt={alt} className="chess-piece__img" />
    </ChessPieceUI>
  );
};

const before = `
&:before {
  content: '';
  position: absolute;
  left: calc(50% - 1px);
  top: 50%;
  border-right: 1px solid black;
  height: 100%;
}`;

const after = `
&:after {
  content: '';
  position: absolute;
  left: 50%;
  top: calc(50% - 1px);
  border-top: 1px solid black;
  width: 100%;
}`;

const ChessPieceUI = styled.div<{ hasBefore: boolean; hasAfter: boolean }>`
  position: relative;

  ${({ hasBefore }) => hasBefore && before}

  ${({ hasAfter }) => hasAfter && after}
`;

const Img = styled.img`
  max-width: 100%;
  position: relative;
  z-index: 1;
`;

export default Piece;

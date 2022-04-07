import { useState } from 'react';
import Chessboard from '../../types/Chessboard';
import Color from '../../types/Color';
import Jiang from '../../types/pieces/Jiang';
import Piece from '../piece/Piece';

import style from './chessboard.module.css';

import styled from 'styled-components';

import {
  BASE_BLACK,
  NUM_OF_COLS,
  TILE_SIZE,
  TILE_SIZE_MOBILE,
  TILE_SIZE_MOBILE_LANDSCAPE,
} from '../../types/constant';

const ChessboardUIWrapper = styled.div`
  border: 2px solid ${BASE_BLACK};
  margin: 0 auto;
  padding: 2em;
  width: calc(${TILE_SIZE} * ${NUM_OF_COLS});
  position: relative;
  
  @media (max-device-width: 1024px) {
    padding: 0.5em;
  }

  @media (max-width: 768px) {
    padding: 0.8em;
    width: 80%;
  }

  @media (max-device-width: 1024px) and (orientation: landscape) {
    max-width: calc(${NUM_OF_COLS} * ${TILE_SIZE_MOBILE_LANDSCAPE});
  }
`;

const ChessPiecesUI = styled.div`
  display: grid;
  grid-template-columns: repeat(${NUM_OF_COLS}, ${TILE_SIZE});

  @media (max-width: 768px) {
    grid-template-columns: repeat(${NUM_OF_COLS}, ${TILE_SIZE_MOBILE});
  }

  @media (max-device-width: 1024px) and (orientation: landscape) {
    grid-template-columns: repeat(
      ${NUM_OF_COLS},
      ${TILE_SIZE_MOBILE_LANDSCAPE}
    );
  }
`;

const ChessboardUI = () => {
  const chessboard = new Chessboard();

  // 9 * 10
  // const [board, setBoard] = useState(
  //   Array(90).fill(new Jiang(Color.BLACK, chessboard))
  // );
  const [board, setBoard] = useState(Array(90).fill(''));

  const renderPieces = () => {
    return (
      <ChessPiecesUI>
        {board.map((piece, idx) => (
          <Piece key={idx} idx={idx} piece={piece} />
        ))}
      </ChessPiecesUI>
    );
  };

  return <ChessboardUIWrapper>{renderPieces()}</ChessboardUIWrapper>;
};

export default ChessboardUI;

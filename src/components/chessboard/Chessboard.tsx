import { useState } from 'react';
import Chessboard from '../../types/Chessboard';
import Color from '../../types/Color';
import Jiang from '../../types/pieces/Jiang';
import Piece from '../piece/Piece';

import Cross from '../../assets/imgs/cross.svg';

import styled from 'styled-components';

import {
  BORDER_COLOR,
  NUM_OF_COLS,
  TILE_SIZE,
  TILE_SIZE_MOBILE,
} from '../../types/constant';

const ChessboardUIWrapper = styled.div`
  border: 2px solid ${BORDER_COLOR};
  margin: 0 auto;
  width: calc(${TILE_SIZE} * ${NUM_OF_COLS});
  position: relative;

  @media (max-device-width: 1024px){
    width: calc(${TILE_SIZE_MOBILE} * ${NUM_OF_COLS});
  }

`;

const ChessPiecesUI = styled.div`
  display: grid;
  grid-template-columns: repeat(${NUM_OF_COLS}, ${TILE_SIZE});

  @media (max-device-width: 1024px) {
    grid-template-columns: repeat(${NUM_OF_COLS}, ${TILE_SIZE_MOBILE});
  }
`;

const imgConfig = `position: absolute;
height: calc(${TILE_SIZE} * 2 + 9px);
width: calc(${TILE_SIZE} * 2 + 1px);
left: calc(50% - ${TILE_SIZE} + 1px);

@media (max-device-width: 1024px) {
  height: calc(${TILE_SIZE_MOBILE} * 2 + 9px);
  width: calc(${TILE_SIZE_MOBILE} * 2 + 1px);
  left: calc(50% - ${TILE_SIZE_MOBILE} + 1px);
}
`;

const CrossTop = styled.img`
  ${imgConfig}
  top: calc(${TILE_SIZE} / 2 + 1px);

  @media (max-device-width: 1024px) {
    top: calc(${TILE_SIZE_MOBILE} / 2 + 1px);
  }
`;

const CrossBottom = styled.img`
  ${imgConfig}
  bottom: calc(${TILE_SIZE} / 2 + 1px);

  @media (max-device-width: 1024px) {
    bottom: calc(${TILE_SIZE_MOBILE} / 2 + 1px);
  }
`;

const ChessboardUI = () => {
  const chessboard = new Chessboard();

  // 9 * 10
  // const [board, setBoard] = useState(
  //   Array(90).fill(new Jiang(Color.BLACK, chessboard))
  // );
  const [board, setBoard] = useState(Array(90).fill(''));

  const renderTopCross = () => {
    return <CrossTop src={Cross} alt="top-cross" />;
  };

  const renderBottomCross = () => {
    return <CrossBottom src={Cross} alt="top-cross" />;
  };

  const renderPieces = () => {
    return (
      <ChessPiecesUI>
        {renderTopCross()}
        {renderBottomCross()}
        {board.map((piece, idx) => (
          <Piece key={idx} idx={idx} piece={piece} />
        ))}
      </ChessPiecesUI>
    );
  };

  return <ChessboardUIWrapper>{renderPieces()}</ChessboardUIWrapper>;
};

export default ChessboardUI;

import React, { useState } from 'react';
import Chessboard from '../../types/Chessboard';
import Color from '../../types/Color';
import Jiang from '../../types/pieces/Jiang';
import Piece from '../piece/Piece';

import style from './chessboard.module.css';

const ChessboardUI = () => {
  const chessboard = new Chessboard();

  // 9 * 10
  const [board, setBoard] = useState(Array(90).fill(''));

  const renderPieces = () => {
    return (
      <div className={style.chessPieces}>
        {board.map((piece, idx) => (
          <Piece key={idx} idx={idx} piece={piece} />
        ))}
      </div>
    );
  };

  const renderBoarder = () => {
    return (
      <div className={style.chessTiles}>
        {board.map((piece, idx) => {
          const y = Math.floor(idx / 9);
          const x = idx % 9;

          if (y === 9 || x === 8) return null;

          return (
            <div
              className={style.tile}
              key={idx}
              style={{
                transform: `translate(${x * 5 + 2.5}em, ${y * 5 + 2.5}em)`,
              }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={style.chessboard}>
      {renderBoarder()}
      {renderPieces()}
    </div>
  );
};

export default ChessboardUI;

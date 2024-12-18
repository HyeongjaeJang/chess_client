import { useState, useEffect } from "react";
import { Square, PieceSymbol, Color } from "chess.js";

interface ChessboardProps {
  board: ({ square: Square; type: PieceSymbol; color: Color } | null)[][];
  socket: (direction: string) => void;
  color: string;
}

const Chessboard: React.FC<ChessboardProps> = ({ board, socket, color }) => {
  const [from, setFrom] = useState<Square | null>(null);
  const [to, setTo] = useState<Square | null>(null);

  const pieceImage = (color: Color, type: PieceSymbol) => {
    return `${color}${type.toUpperCase()}.svg`;
  };

  const handleSquareClick = (square: Square | null) => {
    if (!from && square) {
      setFrom(square);
    } else if (from && square) {
      setTo(square);
    }
  };

  useEffect(() => {
    if (to) {
      const move = to;

      socket(move);
      setFrom(null);
      setTo(null);
    }
  }, [from, to, socket]);

  const flip = color === "b";

  return (
    <div>
      {(flip ? [...board].reverse() : board).map((row, i) => {
        return (
          <div key={i} className="flex">
            {(flip ? [...row].reverse() : row).map((square, j) => {
              const squareKey = flip
                ? ((String.fromCharCode(104 - (j % 8)) +
                    "" +
                    (1 + i)) as Square)
                : ((String.fromCharCode(97 + (j % 8)) +
                    "" +
                    (8 - i)) as Square);
              return (
                <div
                  key={j}
                  className={`w-20 h-20 ${
                    (i + j) % 2 === 0 ? "bg-primary-light" : "bg-chess-dark"
                  }`}
                  onClick={() => {
                    handleSquareClick(squareKey);
                  }}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    {square &&
                      (square.type === "p" ? (
                        <img
                          className="w-10 h-12"
                          src={pieceImage(square.color, square.type)}
                          alt={`${square.color} ${square.type}`}
                        />
                      ) : (
                        <img
                          className="w-14 h-16"
                          src={pieceImage(square.color, square.type)}
                          alt={`${square.color} ${square.type}`}
                        />
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Chessboard;

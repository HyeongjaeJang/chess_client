import { Square, PieceSymbol, Color } from "chess.js";

interface ChessboardProps {
  board: ({ square: Square; type: PieceSymbol; color: Color } | null)[][];
}

const Chessboard: React.FC<ChessboardProps> = ({ board }) => {
  const pieceImage = (color: Color, type: PieceSymbol) => {
    return `${color}${type.toUpperCase()}.svg`;
  };

  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              return (
                <div
                  key={j}
                  className={`w-20 h-20 ${
                    (i + j) % 2 === 0 ? "bg-primary-light" : "bg-chess-dark"
                  }`}
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

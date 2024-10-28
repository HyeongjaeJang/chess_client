import Lottie from "react-lottie-player";
import pawn from "../assets/pawn.json";
import knight from "../assets/knight.json";

type Props = {
  pieceType: string;
};

const LottieAnimation = ({ pieceType }: Props) => {
  return (
    <div>
      {pieceType === "pawn" ? (
        <Lottie
          loop
          animationData={pawn}
          play
          style={{ width: 150, height: 150 }}
          className="absolute top-30 left-30"
        />
      ) : (
        <Lottie
          loop
          animationData={knight}
          play
          style={{ width: 150, height: 150 }}
        />
      )}
    </div>
  );
};

export default LottieAnimation;

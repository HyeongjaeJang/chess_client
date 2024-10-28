import "./Header.scss";
import LottieAnimation from "./LottieAnimation.tsx";

const Header = () => {
  return (
    <>
      <div className="header flex flex-grow items-center bg-primary-light">
        <LottieAnimation pieceType="knight" />
        <h1 className="header_title text-3xl font-bold text-white pl-3">
          Chess King
        </h1>
      </div>
    </>
  );
};

export default Header;

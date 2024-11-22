import { createPortal } from "react-dom";
import "./Connect.scss";

const Connect = () => {
  return createPortal(
    <div
      className="fixed w-full h-full top-0 left-0
      flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="absolute w-full h-full blur-lg"></div>
      <div className="flex items-center justify-center z-10 bg-primary-light w-40 h-20 rounded-lg shadow-inner shadow-gray-500">
        <p className="ellipsis text-white text-xl font-bold">connecting</p>
      </div>
    </div>,
    document.body,
  );
};

export default Connect;

import { useState, useEffect, useContext } from "react";
import LottieAnimation from "../components/LottieAnimation";
import chessboard from "../assets/chessboard.svg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Connect from "../components/Connect";
import { FindMatchHandler } from "../ws";
import { WebSocketContext } from "../context/WebSocketContext";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string | null>(null);
  const [find, setFind] = useState<boolean>(false);
  const { sendJsonMessage, lastJsonMessage } = useContext(WebSocketContext)!;

  useEffect(() => {
    const user = localStorage.getItem("chessId");
    setName(user);
    console.log(lastJsonMessage);
  }, [lastJsonMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.elements[0]);
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    console.log(input.value);
    if (input.value !== "") {
      localStorage.setItem("chessId", input.value);
      setName(input.value);
    }
  };

  return (
    <>
      {find && <Connect />}
      <div className="md:container md:mx-auto flex flex-grow justify-center items-center mt-16 flex-col lg:flex-row">
        <div className="flex w-full lg:w-2/4 px-5 lg:pl-10 relative">
          <LottieAnimation pieceType="pawn" />
          <img src={chessboard} alt="chessboard" className="w-full" />
        </div>
        <form
          className="relative flex w-72 lg:w-1/4 flex-col justify-center items-center p-0 lg:pl-10 mt-10 lg:m-0"
          onSubmit={handleSubmit}
        >
          {!name ? (
            <>
              <input
                type="text"
                className="border border-gray-400 rounded-md p-2 mt-2 w-full h-full focus:outline-none focus:ring focus:ring-primary-light"
                placeholder="Enter your name"
              />
              <button
                type="submit"
                className="bg-primary-light text-white rounded-md p-3.5 absolute top-2 left-56 lg:left-64"
              >
                Enter
              </button>
            </>
          ) : (
            <>
              <p className="text-white text-4xl lg:pl-10 mb-10">Hi {name}</p>
              <Button
                onClick={() => FindMatchHandler(sendJsonMessage)}
                children="Play Chess Online"
              />
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;

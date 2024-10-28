import { useState, useEffect } from "react";
import LottieAnimation from "../components/LottieAnimation";
import chessboard from "../assets/chessboard.svg";

const Home = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("chessId");
    setName(user);
  }, []);

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
      <div className="md:container md:mx-auto flex flex-grow justify-center items-center mt-20">
        <div className="flex w-full lg:w-2/4 pl-10 relative">
          <LottieAnimation pieceType="pawn" />
          <img src={chessboard} alt="chessboard" className="w-full" />
        </div>
        <form
          className="relative flex w-1/4 flex-col justify-center items-center pl-10"
          onSubmit={handleSubmit}
        >
          {!name ? (
            <>
              <input
                type="text"
                className="border border-gray-400 rounded-md p-2 m-2 w-full h-full focus:outline-none focus:ring focus:ring-primary-light"
                placeholder="Enter your name"
              />
              <button
                type="submit"
                className="bg-primary-light text-white rounded-md p-3.5 absolute top-2 left-64"
              >
                Enter
              </button>
            </>
          ) : (
            <>
              <p className="text-white text-4xl pl-10">Hi {name}</p>
              <button className="bg-primary-light text-white text-xl font-bold rounded-lg w-48 h-16 ml-10 mt-10">
                Play Chess Online
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;

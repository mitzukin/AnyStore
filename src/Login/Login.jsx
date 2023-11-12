import React from "react";
import TextInput from "./textInput";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse lg:flex-row-reverse">
        <div className="w-full h-full px-5 mt-20 xl:mt-0 xl:px-20 lg:w-3/5">
          <ShuffleGrid />
        </div>
        <div className="flex flex-col items-center w-full mt-28 lg:mt-20 lg:w-2/5">
          <p className="text-5xl font-bold text-center md:text-7xl mx-14 font-script">
            Discover the Perfect Shoes
          </p>
          <p className="mt-2 mb-20 text-xl lg:text-4xl font-script">
            & Share your Styles
          </p>

          <div className="flex items-center justify-center ">
            <div className="w-80 md:w-96">
              <form className="flex flex-col mt-4 font-roboto">
                <TextInput
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <TextInput
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  value="Log In"
                  className="p-2 py-3 mt-5 text-sm text-white bg-gray-900 cursor-pointer hover:bg-gray-800 "
                />
                <div class="flex items-center mt-5">
                  <div class="flex-1 border-b border-gray-300"></div>
                  <div class="mx-4 text-gray-500 text-sm" >or</div>
                  <div class="flex-1 border-b border-gray-300"></div>
                </div>

                <h1 className="mt-5 mb-5 text-sm text-center text-gray-500">
                  Log in with{" "}
                </h1>
                <div className="flex flex-row justify-center gap-4">
                  <button className="duration-500 hover:scale-110">
                    <FcGoogle size={32} />
                  </button>
                  <button className="duration-500 hover:scale-110">
                    <BsFacebook size={31} color="#3b5998" />
                  </button>
                  <button className="duration-500 hover:scale-110">
                    <BsTwitter size={32} color="#26a7de" />
                  </button>
                </div>
                <p className="mt-10 text-sm text-center text-gray-500">
                  Dont have an account?{" "}
                  <span className="text-gray-900 underline ">
                    <a href="">Sign Up for free</a>
                  </span>
                </p>

                <p className="mt-3 text-xs text-center text-gray-500 ">
                  By logging in you agree to our{" "}
                  <span>
                    <a href="" className="text-gray-900 underline ">
                      Terms
                    </a>
                  </span>{" "}
                  and
                  <span>
                    {" "}
                    <a href="" className="text-gray-900 underline ">
                      Privacy Policy
                    </a>
                  </span>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://i.pinimg.com/564x/52/fd/7f/52fd7f01745ffda6a65281f3ac3e406d.jpg",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/564x/51/04/4b/51044b7c20d6a1824f110caf88ffef15.jpg",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/564x/6a/5f/ac/6a5fac7e2009bf9378d84e509406b9f6.jpg",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/564x/4b/b4/a1/4bb4a1de889fce550d44a320bdf9d99c.jpg",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/564x/39/b6/7a/39b67a517a33ff603cd2d6579855e8ed.jpg",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/564x/1b/7a/41/1b7a41730620bf8134cd6f955f753a85.jpg",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/564x/aa/a4/82/aaa482234b373fa7f209f5391f71db39.jpg",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/564x/ad/ff/25/adff25d6f1e95b7759894fc0575eab46.jpg",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/564x/5d/70/df/5d70dff75919de165e985d4d5fc3e508.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 2, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[600px] md:h-[800px] gap-2 ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Login;

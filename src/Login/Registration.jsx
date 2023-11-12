import React from "react";
import TextInput from "./textInput";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import PhoneNumberValidation from "./Phone";
const Registration = () => {
  return (
    <div>
      <div className="mx-auto ">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="p-4 lg:w-2/5">
            <form className="flex flex-col mx-auto mt-4 font-roboto w-80 xl:w-96">
              <h1 className="mt-10 mb-5 text-3xl font-semibold text-center font-script">
                Join the Sneaker Club
              </h1>
              <h1 className="mb-10 text-sm text-center">
                Kindly Fill up this Form
              </h1>

              <TextInput
                label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="JohnDoe@gmail.com"
              />
              <TextInput
                label="Password"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <TextInput
                label="Confirm Password"
                type="password"
                id="repassword"
                name="repassword"
                placeholder="Confirm Password"
              />
              <TextInput
                label="First Name"
                type="text"
                id="Fname"
                name="Fname"
                placeholder="John"
              />
              <TextInput
                label="Last Name"
                type="text"
                id="Sname"
                name="Sname"
                placeholder="Doe"
              />
              <PhoneNumberValidation />
              <input
                type="submit"
                value="Register"
                className="p-2 py-3 mt-5 text-sm text-white bg-gray-900 cursor-pointer hover:bg-gray-800 "
              />
              <div class="flex items-center mt-5">
                <div class="flex-1 border-b border-gray-300"></div>
                <div class="mx-4 text-gray-500 text-sm">or</div>
                <div class="flex-1 border-b border-gray-300"></div>
              </div>
              <h1 className="mt-10 mb-5 text-sm text-center text-gray-500">
                Sign up with{" "}
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

              <p className="mt-5 text-xs text-center text-gray-500 ">
                By logging in you agree to our{" "}
                <span>
                  <a href="" className="font-semibold text-gray-900 underline">
                    Terms
                  </a>
                </span>{" "}
                and
                <span>
                  {" "}
                  <a href="" className="font-semibold text-gray-900 underline">
                    Privacy Policy
                  </a>
                </span>{" "}
              </p>
            </form>
          </div>
          <div className="lg:w-3/5 ">
            <div>
              <div className="relative">
                <p className="mt-10 text-6xl font-semibold text-center md:mt-32 lg:mt-10 lg:px-32 xl:text-9xl font-script">
                  Explore <br />{" "}
                </p>
                <p className="mt-3 text-4xl text-center font-script">
                  The World of Sneakers and Share Your Favorites
                </p>
                <p className="px-10 mt-2 text-center text-gray-600 lg:px-32 font-script">
                  Kicks aren't just shoes; they're a canvas for self-expression.
                  They carry the spirit of urban exploration and the heartbeat
                  of contemporary culture.
                </p>
                <div className="relative mt-5">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/07/15/18/32/sneakers-5408674_960_720.png"
                    alt=""
                    className="w-full h-full xl:px-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;

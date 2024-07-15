import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="border-2 p-10 rounded-lg bg-slate-100 w-[800px] my-10 space-y-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-center">
                MERN Authentication
              </h1>
              <p className="text-xl">
                This is an authentication service that helps to store the JWT
                cookies in an HTTP-Only Cookie. It makes use of Redux Toolkit
                for the state management of the component.
              </p>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <Link to="/login">
                <button className="p-2 rounded-lg bg-blue-700 text-white">
                  Sign in{" "}
                </button>
              </Link>
              <Link to="/register">
                {" "}
                <button className="p-2 rounded-lg bg-slate-700 text-white">
                  Sign up
                </button>
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Hero;

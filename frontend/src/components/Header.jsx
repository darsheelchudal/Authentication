import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-around bg-black text-white items-center font-semibold p-4">
        <div className="logo">
          <Link to="/">MERN AUTH</Link>
        </div>
        <div className="flex space-x-4 p-4">
          <div className="flex items-center gap-x-2">
            <Link to="/login">
              <span className="flex gap-x-2 items-center">
                <FaSignInAlt />
                Sign in
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <Link to="/register">
              <span className="flex gap-x-2 items-center">
                <FaSignInAlt />
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

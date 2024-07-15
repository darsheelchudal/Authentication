import React from "react";
import { FaSignInAlt } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex justify-around bg-black text-white items-center font-semibold">
        <div className="logo">MERN AUTH</div>
        <div className="flex space-x-4 p-4">
          <div className="flex items-center gap-x-2">
            <FaSignInAlt />
            Sign in
          </div>
          <div className="flex items-center gap-x-2">
            <FaSignInAlt />
            Sign up
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

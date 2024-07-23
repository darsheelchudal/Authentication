import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { toast } from "react-toastify";
import { logoutCredentials } from "../features/slices/authSlice";
import { useLogoutMutation } from "../services/usersApi";
import { useNavigate } from "react-router-dom";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    // Add your logout logic here
    try {
      await logout().unwrap();
      dispatch(logoutCredentials());
      navigate("/");
      toast.success("Logged out");
    } catch (err) {
      toast.error("Error", err.data.message);
    }
  };
  return (
    <>
      <div className="flex justify-around bg-black text-white items-center font-semibold p-4">
        <div className="logo">
          <Link to="/">MERN AUTH</Link>
        </div>
        <div className="flex space-x-4 p-4">
          {userInfo ? (
            <>
              <div className="flex items-center gap-x-4">
                <div className="relative">
                  <button
                    onClick={handleToggle}
                    className="text-white outline-none flex items-center gap-x-2"
                  >
                    {userInfo.name} <FaArrowDown size={`15`} />
                  </button>
                  {isOpen && (
                    <>
                      <div className="absolute mt-2 w-full bg-white shadow-lg rounded-md text-black">
                        <Link to="/profile">
                          <button className="flex gap-x-2 items-center w-full px-4 py-2 text-left hover:bg-gray-100">
                            Profile
                          </button>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex gap-x-2 items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          Logout <FaSignInAlt />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertContext } from "./context/Context";

export default function Navbar() {
  const { showAlert } = useContext(alertContext);
  let navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("id");
    navigate("/login");
    showAlert("Logout successful");
  };

  return (
    <nav className="bg-gray-800 ">
      <div className="container mx-auto px-4 flex items-center justify-between py-4 ">
        <div className="flex items-center space-x-4">
          <Link to="/home" className="text-white text-xl font-bold">
            JobBoard
          </Link>

          <Link
            to="/home"
            className="text-white pl-20rem text-base hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/findjob"
            className="text-white px-5 text-base hover:text-gray-200"
          >
            FindJob
          </Link>
          <Link
            to="/about"
            className="text-white text-base hover:text-gray-200"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {!localStorage.getItem("id") ? (
            <>
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/userprofile"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Profile
              </Link>
              <Link
                to="/signup"
                onClick={handleLogoutClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { alertContext } from "./context/Context";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CompanyNavbar({ setUserRole }) {
  const { showAlert } = useContext(alertContext);
  let navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("id");
    navigate("/login");
    showAlert("Logout successfull");
    setUserRole("user");
  };

  //toggler close when select another page
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <>
      <style>
        {`
          .collapse {
            visibility: visible !important;
          }
          .nav-link {
            color: white !important;
            font-weight:500 !important;
          }
        `}
      </style>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
        className="bg-gray-800 mx-auto px-4 flex items-center justify-between py-3"
      >
        <Navbar.Brand
          as={Link}
          to="/companyhomepage"
          className="text-white text-xl font-bold"
        >
          JobBoard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex-grow-1">
            <Nav.Link
              as={Link}
              to="/companyhomepage"
              className="text-white text-base  hover:text-gray-200"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/postnewjob"
              className="text-white text-base hover:text-gray-200"
            >
              PostJob
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-white text-base hover:text-gray-200"
            >
              About
            </Nav.Link>
          </Nav>
          <Nav className="flex flex-start gap-2 my-auto">
            {!localStorage.getItem("id") ? (
              <>
                <Link
                  Link
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
                  to="/signup"
                  onClick={handleLogoutClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Logout
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

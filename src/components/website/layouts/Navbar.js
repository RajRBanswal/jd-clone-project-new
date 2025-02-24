import React from "react";
import { Link } from "react-router-dom";
import { web_url } from "../../helpers/api_helper";
const logo = "./assets/images/logo.png";

const Navbar = () => {
  const userName = sessionStorage.getItem("userName");
  return (
    <nav className="web_navbar navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={`${web_url}/assets/images/logo.png`}
            alt="logo"
            width={"140"}
            className=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Free Listing
              </Link>
            </li>
            <li className="nav-item">
              {userName === null || userName === "" ? (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              ) : (
                <Link className="nav-link" to="/users">
                  {userName}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
const logo = "./assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* <div className="preloader-wrapper">
        <div className="preloader"></div>
      </div> */}

      {/* <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasCart"
        aria-labelledby="My Cart"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Growers cider</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Fresh grapes</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Heinz tomato ketchup</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasSearch"
        aria-labelledby="Search"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Search</span>
            </h4>
            <form
              role="search"
              action="index.html"
              method="get"
              className="d-flex mt-3 gap-0"
            >
              <input
                className="form-control rounded-start rounded-0 bg-light"
                type="email"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
              />
              <button className="btn btn-dark rounded-end rounded-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <header className="footer">
        <div className="container">
          <div className="row py-1 border-bottom">
            <div className="col-sm-3 col-6 col-lg-2 text-center text-sm-start">
              <div className="main-logo">
                <div>
                  <img
                    src={"./assets/images/logo.png"}
                    alt="logo"
                    className="web-logo"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-12 col-lg-10  justify-content-end gap-5 mt-lg-0 d-flex text-center">
              <ul className="nav-links justify-content-end list-unstyled  navbarItem mt-3 d-flex">
                <li>
                  <Link to="/" className="  p-3 mx-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" p-3 mx-1">
                    Free Listing
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="  p-3 mx-1">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

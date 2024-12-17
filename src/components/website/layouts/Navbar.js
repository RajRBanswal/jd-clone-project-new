import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <div class="preloader-wrapper">
        <div class="preloader"></div>
      </div> */}

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasCart"
        aria-labelledby="My Cart"
      >
        <div class="offcanvas-header justify-content-center">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Growers cider</h6>
                  <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Fresh grapes</h6>
                  <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Heinz tomato ketchup</h6>
                  <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasSearch"
        aria-labelledby="Search"
      >
        <div class="offcanvas-header justify-content-center">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Search</span>
            </h4>
            <form
              role="search"
              action="index.html"
              method="get"
              class="d-flex mt-3 gap-0"
            >
              <input
                class="form-control rounded-start rounded-0 bg-light"
                type="email"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
              />
              <button class="btn btn-dark rounded-end rounded-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <header className="footer">
        <div class="container-fluid">
          <div class="row py-1 border-bottom">
            <div class="col-sm-3 col-6 col-lg-2  m-auto m-lg-start text-center text-sm-start">
              <div class="main-logo pt-2">
                <Link to="/">
                  <img src="./logo.png" alt="logo" class="img-fluid" />
                </Link>
              </div>
            </div>

            <div class="col-sm-6 col-lg-6  offset-sm-2 offset-md-0 d-none d-md-block d-lg-block ps-3">
              <div class="search-bar bg-light  p-2 px-3 my-2 rounded-3 border border-danger">
                <div className="row">
                  <div class="col-6 col-md-4 col-lg-4">
                    <select class="form-select form-control">
                      <option>Select City</option>
                      <option>Groceries</option>
                      <option>Drinks</option>
                      <option>Chocolates</option>
                    </select>
                  </div>
                  <div class="col-11 col-md-7 col-lg-7">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for more than 20,000 products"
                    />
                  </div>
                  <div class="col-1 col-lg-1 col-md-1 pt-1 d-flex justify-content-center align-items-center">
                    <h4 className="mb-0">
                      <i className="fa fa-search"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-12 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-lg-0 mt-4 justify-content-center justify-content-sm-end">
              <ul class="d-flex justify-content-end list-unstyled m-0 navbarItem">
                <li>
                  <a href="#" class=" p-2 mx-1">
                    Home
                  </a>
                </li>
                <li>
                  <Link to="/about" class=" p-2 mx-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" class=" p-2 mx-1">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/login" class=" p-2 mx-1">
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

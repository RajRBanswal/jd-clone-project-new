import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-5 ">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <img src={"./assets/images/logo.png"} width={200} alt="logo" />
                <div className="social-links mt-5 text-center">
                  <ul className="d-flex list-unstyled gap-2 m-auto">
                    <li>
                      <a href="#" className="btn btn-outline-dark">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-dark">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-dark">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-dark">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Useful Links</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about" className="nav-link">
                      About us
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      FAQ
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Returns & Refunds
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Delivery Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Returns & Refunds
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Cookie Guidelines
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Delivery Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom" className="bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p className="mb-0 text-white">
                © 2024 JD Clone. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 credit-link text-start text-md-end">
              <p className="mb-0 text-white">
                Designed By
                <a href="https://ewebdigital.com/" className="text-danger">
                  {" "}
                  Vighnaharta E Web Digital
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

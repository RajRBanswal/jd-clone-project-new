import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="py-5 bg-warning">
        <div class="container">
          <div class="row g-3">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-menu">
                <img src="./logo.png" width={200} alt="logo" />
                <div class="social-links mt-5 text-center">
                  <ul class="d-flex list-unstyled gap-2 m-auto">
                    <li>
                      <a href="#" class="btn btn-outline-dark">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn btn-outline-dark">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn btn-outline-dark">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn btn-outline-dark">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Useful Links</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <Link to="/" class="nav-link">
                      Home
                    </Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/about" class="nav-link">
                      About us
                    </Link>
                  </li>
                  <li class="menu-item">
                    <Link href="/contact" class="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Customer Service</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      FAQ
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      Returns & Refunds
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      Delivery Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-menu">
                <h5 class="widget-title">Customer Service</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      Returns & Refunds
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">
                      Cookie Guidelines
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">
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
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 copyright">
              <p className="mb-0 text-white">
                © 2024 JD Clone. All rights reserved.
              </p>
            </div>
            <div class="col-md-6 credit-link text-start text-md-end">
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

import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserLayouts = () => {
  const navigate = useNavigate();
  const [buttonToggler, setButtonToggler] = useState(false);
  const userName = sessionStorage.getItem("userName");
  useEffect(() => {
    if (userName === null) {
      navigate("/login");
    }
  }, []);
  const handleloggedOut = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    window.location.reload();
    navigate("/login");
  };
  return (
    <div>
      <div className={`sidebar pe-1  pb-3 ${buttonToggler ? "open" : ""}`}>
        <nav className="navbar navbar-light">
          <Link to={"/users"} className="navbar-brand mx-4 mb-3">
            <h3 className="text-light">User</h3>
          </Link>
          <div className="navbar-nav w-100">
            <Link to={"/users"} className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2"></i>Dashboard
            </Link>
            <Link to={"/users/all-listing"} className="nav-item nav-link">
              <i className="fa fa-list me-2"></i>Add Listing
            </Link>
            <Link to="form.html" className="nav-item nav-link">
              <i className="fa fa-keyboard me-2"></i>Forms
            </Link>
            <Link to="table.html" className="nav-item nav-link">
              <i className="fa fa-table me-2"></i>Tables
            </Link>
            <Link to="chart.html" className="nav-item nav-link">
              <i className="fa fa-chart-bar me-2"></i>Charts
            </Link>
          </div>
        </nav>
      </div>
      <div className={`content ${buttonToggler ? "open" : ""}`}>
        <nav className="navbar navbar-expand navbar-light sticky-top px-4 py-0">
          <Link to="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-hashtag"></i>
            </h2>
          </Link>
          <Link
            to={"#"}
            className="sidebar-toggler flex-shrink-0"
            onClick={() => setButtonToggler(!buttonToggler)}
          >
            <i className="fa fa-bars"></i>
          </Link>
          <form className="d-none d-md-flex ms-4">
            <input
              className="form-control border-0"
              type="search"
              placeholder="Search"
            />
          </form>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <span className="d-none d-lg-inline-flex">{userName}</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-orange border-0 rounded-0 rounded-bottom m-0">
                <Link to="#" className="dropdown-item">
                  My Profile
                </Link>
                <Link
                  to="#"
                  onClick={() => handleloggedOut()}
                  className="dropdown-item"
                >
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayouts;

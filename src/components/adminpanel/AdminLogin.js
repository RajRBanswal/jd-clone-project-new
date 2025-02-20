import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../helpers/api_helper";

const AdminLogin = () => {
  const navigate = useNavigate();

  const adminName = sessionStorage.getItem("adminName");

  useEffect(() => {
    if (adminName !== null) {
      navigate("/admins");
    }
  }, []);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const getLogin = async () => {
    const response = await fetch(`${api_url}/api/admin/admin-login`, {
      method: "POST",
      body: JSON.stringify({
        username: Email,
        password: Password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === 201) {
      sessionStorage.setItem("adminId", result.data._id);
      sessionStorage.setItem("adminName", result.data.name);
      alert(result.message);
      navigate("/admins");
    } else {
      alert(result.message);
    }
  };
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="login-card">
        <img src="./assets/images/logo.png" alt="Car Logo" className="logo" />
        <h3>Admin</h3>
        <p>Access your account</p>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button
              type="button"
              onClick={getLogin}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
          <div className="forgot-link mt-3">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

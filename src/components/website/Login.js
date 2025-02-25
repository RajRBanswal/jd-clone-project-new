import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api_url } from "../helpers/api_helper";

const Login = () => {
  const navigate = useNavigate();

  const userName = sessionStorage.getItem("userName");
  const pathname = sessionStorage.getItem("pathname");

  useEffect(() => {
    if (userName !== null) {
      navigate("/users");
    }
  }, []);

  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const getLogin = async () => {
    const response = await fetch(`${api_url}/api/users/user-login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: Password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === 201) {
      sessionStorage.setItem("userId", result.data._id);
      sessionStorage.setItem("userName", result.data.name);
      alert(result.message);
      if (pathname == null || pathname === "") {
        navigate("/users");
      } else {
        navigate(pathname);
      }
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="wrapper bg-info">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className="registration-container">
            <div className="col-left">
              <div className="info-box">
                <h2>Welcome Back</h2>
                <p>
                  Join our platform to unlock exclusive benefits and
                  opportunities for your business.
                </p>
                <Link className="btn" to={"/signup"}>
                  Create An acoout? Sign up
                </Link>
              </div>
            </div>
            <div className="col-right">
              <div className="form-box">
                <h2>Sign In Your User Account</h2>
                <form>
                  <div className="form-group">
                    <label>
                      Email<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Email / Mobile No."
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={getLogin}
                    className="submit-btn"
                  >
                    Sign In
                  </button>
                  <div className="form-footer">
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

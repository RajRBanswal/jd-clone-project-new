import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_url } from "../helpers/api_helper";

const VRegister = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!name || name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
    if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getRegister = async () => {
    if (validate()) {
      const response = await fetch(
        `${api_url}/api/vendor/vendor-registration`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            name,
            password,
            mobile,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.status === 201) {
        alert(result.message);
        navigate("/vendor-login");
      } else {
        alert(result.message);
      }
    }
  };

  return (
    <div className="wrapper bg-info">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className="registration-container">
            <div className="col-left">
              <div className="info-box">
                <h2>Welcome to Vendor Registration</h2>
                <p>
                  Join our platform to unlock exclusive benefits and
                  opportunities for your business.
                </p>
                <Link className="btn" to={"/vendor-login"}>
                  Already a Member? Sign In
                </Link>
              </div>
            </div>
            <div className="col-right">
              <div className="form-box">
                <h2>Create Your Vendor Account</h2>
                <form>
                  <div className="form-group">
                    <label>
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errors.name && (
                      <p className="text-danger error">{errors.name}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Mobile.No<span>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your Mobile.No"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                    {errors.mobile && (
                      <p className="text-danger error">{errors.mobile}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Email<span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && (
                      <p className="text-danger error">{errors.email}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && (
                      <p className="text-danger error">{errors.password}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    {errors.confirmPassword && (
                      <p className="text-danger error">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={getRegister}
                    className="submit-btn"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRegister;

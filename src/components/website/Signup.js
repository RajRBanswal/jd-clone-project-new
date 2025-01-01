import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();


  const [name, setname] = useState("")
  const [mobile, setmobile] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const getRegister = async () => {
    const response = await fetch("http://localhost:8000/api/user-registration", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        password,
        mobile
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json();
    console.log(result);

    if (result.status === 200) {
      alert(result.message);
      navigate("/login")
    } else {
      alert(result.message);
    }

  }

    return (
        <div class="wrapper">
        <div class="registration-container">
          <div class="col-left">
            <div class="info-box">
              <h2>Welcome to Registration</h2>
              <p>Join our platform to unlock exclusive benefits and opportunities for your business.</p>
              <a class="btn" href="/login">Already a Member? Sign In</a>
            </div>
          </div>
          <div class="col-right">
            <div class="form-box">
              <h2>Create Your Account</h2>
              <form>
                <div class="form-group">
                  <label>Name<span>*</span></label>
                  <input type="text" placeholder="Enter your Name" onChange={(e) => setname(e.target.value)}  required />
                </div>
                <div class="form-group">
                  <label>Mobile.No<span>*</span></label>
                  <input type="number" placeholder="Enter your Mobile.No" onChange={(e) => setmobile(e.target.value)}  required />
                </div>
                <div class="form-group">
                  <label>Email<span>*</span></label>
                  <input type="email" placeholder="Enter your Email" onChange={(e) => setemail(e.target.value)}  required />
                </div>
                <div class="form-group">
                  <label>Password<span>*</span></label>
                  <input type="password" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)}  required />
                </div>
                <div class="form-group">
                  <label>Confirm Password<span>*</span></label>
                  <input type="password" placeholder="Re-enter your password" onChange={(e) => setpassword(e.target.value)}  required />
                </div>
                <button type="button" onClick={getRegister} class="submit-btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Signup

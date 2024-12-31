import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useEffect,useState} from 'react';
 

const Vendorlogin = () => { 
 const navigate = useNavigate()

  const vendorName = localStorage.getItem('vendorUsername')
  console.log(vendorName);

  useEffect(() => {
    if (vendorName !== null) {
      navigate("/vendor")
    }
  }, []);

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const getLogin = async () => {
    const response = await fetch("http://localhost:8000/api/vendor/vendor-login", {
      method: "POST",
      body: JSON.stringify({
        Email,
        Password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    console.log(result);
    
    if (result.status === 200) {
      localStorage.setItem("vendorId", result.vendor._id)
      localStorage.setItem("vendorUsername", result.vendor.username)
      alert(result.message);
      navigate("/vendor")
    } else {
      alert(result.message);
    }
  }



  return (
    <div class="wrapper">
    <div class="registration-container">
      <div class="col-left">
        <div class="info-box">
          <h2>Welcome Back</h2>
          <p>Join our platform to unlock exclusive benefits and opportunities for your business.</p>
          <a class="btn" href="/vender-signup">Create An acoout? Sign up</a>
          
        </div>
      </div>
      <div class="col-right">
        <div class="form-box">
          <h2>Sign In Your Vendor Account</h2>
          <form>
            <div class="form-group">
              <label>Email<span>*</span></label>
              <input type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            
            <div class="form-group">
              <label>Password<span>*</span></label>
              <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
             
            <button type="button" onClick={getLogin} class="submit-btn">Sign In</button>
            <div class="form-footer">
            <a href="#">Forgot Password?</a> 
          </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  



  )
}

export default Vendorlogin
import React from 'react'
import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const userName = localStorage.getItem('userUsername')
  console.log(userName);

 useEffect(() => {
    if (userName !== null) {
      navigate("/")
    }
  }, []); 

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const getLogin = async () => {
    const response = await fetch("http://localhost:8000/api/user-login", {
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
      alert(result.message);
      navigate("/")
    } else {
      alert(result.message);
    }
  }
  return (
    <div class="container d-flex align-items-center justify-content-center vh-100">
    <div class="login-card">
      <img src="./assets/images/logo.png" alt="Car Logo" class="logo"/>
      <h3>Login Here</h3>
      <p>Access your account</p>
      <form>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div class="d-grid">
          <button type="button" onClick={getLogin} class="btn btn-primary">Login</button>
        </div>
        <div class="forgot-link mt-3">
          <a href="/forgot">Forgot Password?</a> / <a href="/signup">Signup</a>
        </div>
      </form>
    </div>
  </div>
    
  )
}

export default Login

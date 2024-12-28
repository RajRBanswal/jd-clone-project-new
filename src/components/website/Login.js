import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="container d-flex align-items-center justify-content-center vh-100">
    <div class="login-card">
      <img src="./assets/images/logo.png" alt="Car Logo" class="logo"/>
      <h3>Login Here</h3>
      <p>Access your account</p>
      <form>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Email or Username" required/>
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" placeholder="Password" required/>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
        <div class="forgot-link mt-3">
          <a href="#">Forgot Password?</a> / <a href="/signup">Signup</a>
        </div>
      </form>
    </div>
  </div>
    
  )
}

export default Login

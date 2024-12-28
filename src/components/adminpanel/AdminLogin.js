import React from 'react'

const AdminLogin = () => {
    return (
      <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="login-card">
      <div class="text-center">
        <h3>Admin Login</h3>
        <p>Access your admin account securely</p>
      </div>
      <form>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="d-grid">
          <button class="login-log" type="submit">Login</button>
        </div>
        <div class="forgot-link">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
    
    );
};

export default AdminLogin

import React from 'react'

const Signup = () => {
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
                  <input type="text" placeholder="Enter your Name" required />
                </div>
                <div class="form-group">
                  <label>Mobile.No<span>*</span></label>
                  <input type="number" placeholder="Enter your Mobile.No" required />
                </div>
                <div class="form-group">
                  <label>Email<span>*</span></label>
                  <input type="email" placeholder="Enter your Email" required />
                </div>
                <div class="form-group">
                  <label>Password<span>*</span></label>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div class="form-group">
                  <label>Confirm Password<span>*</span></label>
                  <input type="password" placeholder="Re-enter your password" required />
                </div>
                <button type="submit" class="submit-btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Signup

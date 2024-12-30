import React from 'react'

const Vendorlogin = () => {
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
              <label>Email / mobile.No<span>*</span></label>
              <input type="text" placeholder="Enter your Email / Mobile.No" required />
            </div>
            
            <div class="form-group">
              <label>Password<span>*</span></label>
              <input type="password" placeholder="Enter your password" required />
            </div>
             
            <button type="submit" class="submit-btn">Sign In</button>
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
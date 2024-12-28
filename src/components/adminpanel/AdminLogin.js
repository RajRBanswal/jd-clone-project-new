import React from 'react'

const AdminLogin = () => {
    return (
      <div class="wrapper">
      <div class=" ven-login container">
        <div class="col-left">
          <div class="login-text">
            <h2>Welcome Back</h2>
            
             
          </div>
        </div>
        <div class="col-right">
          <div class="login-form">
            <h2>Admin-Login</h2>
            <form>
              <p>
                <label>Username or email address<span>*</span></label>
                <input type="text" placeholder="Username or Email" required />
              </p>
              <p>
                <label>Password<span>*</span></label>
                <input type="password" placeholder="Password" required />
              </p>
              <p>
                <input type="submit" value="Sing In" />
              </p>
              <p>
                <a class ="mx-5" href="">Forget Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

    );
};

export default AdminLogin

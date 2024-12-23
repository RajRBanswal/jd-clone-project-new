import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
      
        <div class="card my-5">

          <form class="card-body cardbody-color py-lg-1 px-5">

            <div class="text-center">
            <h2 class="text-center text-dark mt-3 pb">Login Here</h2>
                

              <img src="./assets/images/sign-up.png " class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="20%" alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password"/>
            </div>
            <div class="text-center"><button type="submit" class=" btn-loginn px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="signup" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Login

import React from 'react'

const AdminLogin = () => {
    return (
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center">
                
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                
                     
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                    <a href="index.html" class="text-center py-2">
                    <h3 class="text-primary text-center "> ADMIN SignIn</h3>
                </a>

                        <div class="d-flex align-items-center justify-content-between mb-3">


                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                        <p class="text-center mb-0">Don't have an Account? <a href="">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin

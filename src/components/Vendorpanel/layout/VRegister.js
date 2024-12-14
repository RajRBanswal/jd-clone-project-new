import React from 'react'

const VRegister = () => {
    return (
        <div class="container-fluid text-center">
            <div class="row h-100 align-items-center justify-content-center">
                <div class=" col-sm-6 m-auto mx-t3 mb-4 ">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <a href="index.html" class="text-center">
                            <h3 class="text-primary text-center">VENDOR SignUp</h3>
                        </a>


                        <div class="information-form mt-3">
                            <div class="row">
                            <div class="form-floating mb-3 col-sm-6">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">First Name</label>
                                </div>
                                <div class="form-floating mb-3 col-sm-6">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Last Name</label>
                                </div>
                            </div>



                            <div class="row">
                                <div class="form-floating mb-3 col-sm-6">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput"> Phone No</label>
                                </div>
                                <div class="form-floating mb-3 col-sm-6">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-floating mb-3 col-sm-6">
                                    <input type="password" class="form-control" id="floatingInput" placeholder="password" />
                                    <label for="password"> Password</label>
                                </div>
                                <div class="form-floating mb-4 col-sm-6">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword"> Confirm Password</label>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> 
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-25 mb-4">Sign Up</button>
                        <p class="text-center mb-0">Already have an Account? <a href="vendor-login">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VRegister
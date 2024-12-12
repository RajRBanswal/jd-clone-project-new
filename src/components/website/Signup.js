import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-12 m-auto'>
                    <img src='./assets/images/sign-up.png ' style={{ width: "90%" }} />
                </div>
                <div className='col-lg-6 col-12 text-center m-auto mt-lg-0 mt-5'>
                    <h1 style={{ color: "#fd7e14" }}>Sign-Up</h1>

                    <input type="text" placeholder="Enter Name" name="name" className='form-control form-control-lg mt-3' required />
                    <input type="text" placeholder="Enter Email" name="email" required className='form-control form-control-lg mt-3' />
                    <input type="text" placeholder="Address" name="address" required className='form-control form-control-lg mt-3' />
                    <input type="password" placeholder="Enter Password" name="password" required className='form-control form-control-lg mt-3' />
                    <input type="password" placeholder="Repeat Password" name="repeat password" className='form-control form-control-lg mt-3' required />

                    <button className='btn-login btn-warning btn-lg mt-3'>Sign-Up</button>

                    <p className='py-2'> If you already have a account? <Link to='/login' style={{ color: "#fd7e14" }}>Login Now</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup

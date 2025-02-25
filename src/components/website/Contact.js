 import React from 'react'
 
 const Contact = () => {
   return (
    <div className="contact-header">
    <h1>Contact Us</h1>
    <p>We’re here to help you with all your car rental needs!</p>
 

 
<div className="container my-5">
    <div className="row g-4">
     
        <div className="col-lg-6">
            <div className="mb-4">
                <h4>Our Location</h4>
                <p><i className="bi bi-geo-alt-fill text-primary"></i> 123 Main Street, New York, NY</p>
            </div>
            <div className="mb-4">
                <h4>Email Us</h4>
                <p><i className="bi bi-envelope-fill text-primary"></i> support@carrental.com</p>
            </div>
            <div className="mb-4">
                <h4>Call Us</h4>
                <p><i className="bi bi-telephone-fill text-primary"></i> +1 (555) 123-4567</p>
            </div>

          
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509608!2d144.95592831548604!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f6e4b21b%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzIyLjIiRQ!5e0!3m2!1sen!2sus!4v1677127571545!5m2!1sen!2sus"
                    allowfullscreen=""
                    loading="lazy">
                </iframe>
            </div>
        </div>

   
        <div className="col-lg-6">
            <div className="contact-form-container">
                <h4 className="mb-4 text-center">Send Us a Message</h4>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Full Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your full name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone Number</label>
                        <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required/>
                    </div>
                    <div className="mb-3">
                        <label for="date" className="form-label">Preferred Pickup Date</label>
                        <input type="date" id="date" className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Your Message</label>
                        <textarea id="message" rows="5" className="form-control" placeholder="Write your message here..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
   )
 }
 
 export default Contact
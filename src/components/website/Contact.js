import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="contact section light-background py-5">

      <div class="container section-title text-center" >
        <h2 class="contacttext">Contact</h2>
      </div>

      <div class="container mt-5" >

        <div class="row g-4 g-lg-5">
          <div class="col-lg-5">
            <div class="info-box py-lg-5 py-5 text-center" >
              <h3 >Contact Info</h3>

              <div class="info-item mt-5" >
                <div class="icon-box">
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="content">
                  <h4 >Our Location</h4>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>

              <div class="info-item" >
                <div class="icon-box">
                <i class="fa-solid fa-phone"></i>
                </div>
                <div class="content">
                  <h4>Phone Number</h4>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>

              <div class="info-item" >
                <div class="icon-box">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="content">
                  <h4>Email Address</h4>
                  <p>info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="contact-form" >
              <h3>Get In Touch</h3>

              <form action="forms/contact.php" method="post" class="php-email-form" >
                <div class="row gy-4">

                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/>
                  </div>

                  <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/>
                  </div>

                  <div class="col-12">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                  </div>

                  <div class="col-12">
                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                  </div>

                  <div class="col-12 text-center pb-3">
                  
                    

                    <button type="submit" class="btn">Send Message</button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact
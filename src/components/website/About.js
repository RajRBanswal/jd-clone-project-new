/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "./layouts/Navbar";

const About = () => {
  return (
    <>
      <div>
        <img src="./assets/images/aboutt.jpg" width={"100%"} height={500} />
      </div>
      <div class="container AboutSection py-5">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="aboutp">
              <h1>About Us</h1>
              <p>
                At Sainath cabs, we are the most recognized for the excellent
                car rental services across Mumbai-Pune and other considerable
                trips. With well-organized, customized travel packages, we tend
                to offer the best opportunities to our clients, based on their
                expectations.
                <br />
                We come along an exclusive range of services that could meet the
                demands of customers with respect to their travel plans and
                ecstasy for road trips. We look forward to accumulating all the
                best elements and making them apart of your excursions.
                <br />
                You may take up various activity-based tours with us and find
                the best deals for considerable group tours. Apart from
                maintaining a wide reach among services, we also look into the
                fact that these services are affordable enough to be accessible.
                saibasbaa
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="aboutp">
              <img src="./assets/images/about.png" width={"100%"} />
            </div>
          </div>

          <div className="col-lg-12 mt-5">
            <p>
              There are also different outstation cabs that could be taken up to
              visit nearby districts including Mahabaleshwar, Lonavala, Nashik,
              Aurangabad, etc. Determining special tour packages for pilgrimage
              visits, we tend to make these services even better for the ones
              who may be getting them. Considering the various modern-day
              requirements and practicality of your plans for traveling, we
              endeavor to get you the most satisfactory means for traversing
              around places. Along with excellent services, we also bring you
              the most reliable cabs to set out for new explorations,
              considering various efforts for your safety and security.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

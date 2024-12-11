/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "./layouts/Navbar";

const About = () => {
  return (
      <>
      <div>
        <img src="./assets/images/building.jpg" width={"100%"} />
      </div>
      <div class="container AboutSection py-5">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="aboutp">
              <h1>About Us</h1>
              <p>
                JD Limited is India's No. 1 Local Search engine that provides
                local search related services to users across India through
                multiple platforms such as website, mobile website, Apps
                (Android, iOS), over the telephone (voice, pan India number
                8888888888) and text (SMS). Justdial has also initiated ‘Search
                Plus’ services for its users. These services aim at making
                several day-to-day tasks conveniently actionable and accessible
                to users through one App. By doing so, it has transitioned from
                being purely a provider of local search and related information
                to being an enabler of such transactions. 
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="aboutp">
              <img src="./assets/images/pexels.jpg" width={"100%"} />
            </div>
          </div>

          <div className="col-lg-12 mt-5">
            <p>Justdial has also
                launched JD Omni, an end-to-end business management solution for
                SMEs, through which it intends to transition thousands of SMEs
                to efficiently run their business online and have adequate
                online presence via their own website and mobile site. Apart
                from this, it also launched JD Pay, a unique solution for quick
                digital payments for its users and vendors, and JD Social, its
                official social sharing platform to provide curated content on
                latest happenings to users. The organisation also aims to make
                communication between users and businesses seamless through its
                Real Time Chat Messenger.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

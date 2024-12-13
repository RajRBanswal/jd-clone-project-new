/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Home = () => {
  return (
    <>
      <div className="container py-3 d-block d-sm-block d-md-none d-lg-none">
        <div class="search-bar bg-light py-4 px-2 my-2 rounded-3 border border-danger">
          <div className="row g-2">
          <div class="col-12 col-lg-12 col-md-12">
            <h3 className="text-center">Search Here</h3>
          </div>
            <div class="col-4 col-lg-4 col-md-4">
              <select class="form-select form-control">
                <option>Select City</option>
                <option>Groceries</option>
                <option>Drinks</option>
                <option>Chocolates</option>
              </select>
            </div>
            <div class="col-7 col-lg-7 col-md-7">
              <form
                id="search-form"
                class="text-center"
                action="index.html"
                method="post"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for more than 20,000 products"
                />
              </form>
            </div>
            <div class="col-1 col-lg-1 col-md-1 pt-1 d-flex justify-content-center align-items-center">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <section
        class="py-3"
        style={{
          background: `url('./assets/images/background-pattern.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-blocks">
                <div class="banner-ad large bg-info block-1">
                  <div class="swiper main-swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories my-3">100% natural</div>
                            <h3 class="display-4">
                              Fresh Smoothie & Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                            >
                              Shop Now
                            </a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img
                              src="./assets/images/product-thumb-1.png"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories mb-3 pb-3">100% natural</div>
                            <h3 class="banner-title">
                              Fresh Smoothie & Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img
                              src="./assets/images/product-thumb-1.png"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories mb-3 pb-3">100% natural</div>
                            <h3 class="banner-title">Heinz Tomato Ketchup</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img
                              src="./assets/images/product-thumb-2.png"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-pagination"></div>
                  </div>
                </div>

                <div
                  class="banner-ad bg-warning block-2"
                  style={{
                    background: `url('./assets/images/ad-image-1.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div class="row banner-content p-5">
                    <div class="content-wrapper col-md-7">
                      <div class="categories sale mb-3 pb-3">20% off</div>
                      <h3 class="banner-title">Fruits & Vegetables</h3>
                      <a href="#" class="d-flex align-items-center nav-link">
                        Shop Collection{" "}
                        <svg width="24" height="24">
                          <use href="#arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="banner-ad bg-danger block-3"
                  style={{
                    background: `url('./assets/images/ad-image-2.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div class="row banner-content p-5">
                    <div class="content-wrapper col-md-7">
                      <div class="categories sale mb-3 pb-3">15% off</div>
                      <h3 class="item-title">Baked Products</h3>
                      <a href="#" class="d-flex align-items-center nav-link">
                        Shop Collection{" "}
                        <svg width="24" height="24">
                          <use href="#arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 class="service-heading text-center">Our Services</h2>
        </div>
        <div class="container py-5 ">
          <div class="row">
            <div class="col-lg-2 col-6 mt-3">
              <div class="card h-100">
                <img src="./assets/images/swift.jpg" width={"100%"} />
                <p class="car-name pt-3"><b>Swift dezire</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 mt-3">
              <div class="card h-100">
                <img
                  src="./assets/images/ertiga.jpg"
                  width={"100%"}
                />
                <p class="car-name pt-3"><b>Ertiga</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 mt-3">
              <div class="card h-100">
                <img src="./assets/images/scorpio.jpg" />
                <p class="car-name"><b>scorpio</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 mt-3">
              <div class="card h-100">
                <img src="./assets/images/cretaimg.jpg" width={"100%"} />
                <p class="car-name pt-4"><b>Creta</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 mt-3">
              <div class="card h-100">
                <img
                  src="./assets/images/crysta.jpg"
                  width={"100%"}
                />
                <p class="car-name pt-2"><b>Crysta</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 mt-3">
              <div class="card h-100">
                <img
                  src="./assets/images/verna.jpg"
                  width={"100%"}
                />
                <p class="car-name pt-4"><b>Verna</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 pt-4">
              <div class="card h-100">
                <img src="./assets/images/aura.jpg"  />
                <p class="car-name pt-3"><b>Hyundai Aura</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 pt-4">
              <div class="card h-100">
                <img
                  src="./assets/images/vitara.webp"
                  width={"100%"}
                />
                <p class="car-name"><b>Vitara brezza</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 pt-4">
              <div class="card h-100">
                <img
                  src="./assets/images/force.webp"
                  width={"100%"}
                />
                <p class="car-name pt-3"><b>Cruiser</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 pt-4">
              <div class="card h-100" >
                <img src="./assets/images/traveler.png"  />
                <p class="car-name pt-3"><b>Tempo Traveller</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 pt-4">
              <div class="card h-100">
                <img src="./assets/images/alto.jpg" />
                <p class="car-name pt-3"><b>Alto</b></p>
              </div>
            </div>

            <div class="col-lg-2 col-6 pt-4">
              <div class="card h-100">
                <img src="./assets/images/i20.webp" />
                <p class="car-name"><b>I20</b></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

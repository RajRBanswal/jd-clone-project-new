/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [talukas, setTalukas] = useState([]);
  const [selectedTalukas, setSelectedTalukas] = useState('');
  const [keyword, setKeyword] = useState('');

  const getAllTalukas = async () => {
    const res = await fetch('http://localhost:8000/api/admin/all-talukas');
    const result = await res.json();
    if (result.status === 201) {
      setTalukas(result.result)
    } else {
      setTalukas([])
    }

  }

  useEffect(() => {
    getAllTalukas();
  }, [])

  const getSearch = () => {
    navigate(`/${selectedTalukas}/${keyword}`)
  }

  return (
    <>

      <div class=" pt-3">

        <div class="col-lg-9 col-6  ps-3 w-100 pt-0 ">
          <div class="search-bar   p-2 px-3 my-2 ">

            <div className="search-input d-flex justify-content-center">

              <div class="search-city px-1">
                <select class="form-select form-control" onChange={(e) => setSelectedTalukas(e.target.value)}>
                  <option><b>Select City</b></option>
                  {
                    talukas.map((item) => {
                      return <option value={item.taluka_name + '-' + item.district}>{item.taluka_name + ' (' + item.district + ')'}</option>

                    })
                  }
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div class="input-search px-1">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for more than 20,000 products"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div class="col-1 col-lg-1 col-md-1 pt-1 d-flex justify-content-center align-items-center">
                <h4 className="mb-0 px=1">
                  <i className="fa fa-search" onClick={getSearch}></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="home-page-img ">
      <img src="./assets/images/home-page.jpg" class="img-fluid w-100" alt="..."></img>

      </div>
      {/* <section
        class="d-flex "
        style={{
          background: `url('./assets/images/background-pattern.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >

        <div class="col-lg-12 col-12   ">

          <img src="./assets/images/sliderimg.jpg" class="img-fluid w" alt="Responsive image" />
        </div>

     


      </section> */}

      {<section>


        <div class="container mb-5 mt-5">
          <div class="col-12 mt-1">
            <div class="row justify-content-center mb-5">
              <div>
                <h2 class="service-heading text-center">TOP CITIES</h2>
              </div>
            </div>
          </div>
          <div class="row mb-1  card-effects">
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center ">
                      <a class="text-decoration-none fw-bolder  text-tb-lines" href="#/">Mumbai</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100 ">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder  text-tb-lines" href="#/">Pune</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4  ">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder  text-tb-lines" href="#/">Nagpur</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div class="col-md-2 col-6 pt-4 ">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Nashik</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100 ">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Thane</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Aurangabad</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Solapur</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Kolhapur</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Amravati</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Jalgaon</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Akola</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Latur</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder  text-tb-lines" href="#/">Ratnagiris</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Chandrapur</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Sangli</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder  text-tb-lines" href="#/">Ahmednagar</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder   text-tb-lines" href="#/">Dhule</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 pt-4">
              <div class="card card-effect w-100">
                <div class="card-body position-relative ">
                  <div >
                    <div class="h4   text-center">
                      <a class="text-decoration-none fw-bolder  text-tb-lines" href="#/">Nanded</a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}



      {
        <section>


          <div class="container">
            <div class="col-12 mt-3">
              <div class="row justify-content-center mb-5">
                <div>
                  <h2 class="service-heading text-center">OUR SURVICES</h2>
                </div>
              </div>
            </div>
            <div class="row mb-5  card-effects">
              <div class="col-md-2 col-6 pt-3">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/swift.jpg" alt="..." />

                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Swift dzier</a>
                      </div>


                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-3">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/scorpio.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-3">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Scorpio</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-3">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/ertiga.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Ertiga</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/cretaimg.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center pt-3">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Creta</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/crysta.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Crysta</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/verna.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center pt-4">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Verna</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 pt-4 col-6">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/aura.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center pt-3">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Hyundai Aura</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/vitara.webp" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Vitara brezza</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/force.webp" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center pt-4">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Cruiser</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/traveler.png" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Tempo Traveller</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/alto.jpg" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Alto</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-2 col-6 pt-4 AboutSection">
                <div class="card card-effect p-0 h-100">
                  <div class="card-img rounded-0">
                    <div class="img-hover">
                      <img class="rounded-top img-fluid"
                        src="./assets/images/i20.webp" alt="..." />
                    </div>
                  </div>
                  <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div class="pt-6">
                      <div class="h4 mb-3 mt-4 text-center">
                        <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">I20</a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      

      
      <div class="container mb-5 pt-2 pb-4">
        <div class="col-12 mt-3">

          <div class="row justify-content-center mb-5">
            <div>
              <h2 class="service-heading text-center pb-1">RENTAL-TYPES</h2>
            </div>
          </div>
        </div>
    
        <div class="row mb-5 card-effects">

        <div class="col-md-1 pt-2">
            <div class="card card-effect p-0 h-100">
               
               
            </div>
          </div>
          <div class="col-md-2 pt-2">
          <div class="col-md-3 mt-2">
            <div class="card card-effect p-0 h-100">
              <div class="card-img rounded-0">
                <div class="img-hover">
                  <img class="rounded-top img-fluid"
                    src="./assets/images/wedding.jpeg" alt="..." />
                </div>
              </div>
              <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div class="pt-6">
                  <div class="h4 mb-3 mt-2 text-center">
                    <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">wedding</a>
                  </div>
                  <p class="text-dark text-center lh-base">
                    Customizable headers, footers, and interactive elements within cards empower you to create
                    engaging and modern web designs.</p>
                </div>
                <div class="text-center">
                  <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
                    <i class="fa fa-arrow-right icon-arrow before"></i>
                    <span class="label fw-normal">Know More!</span>
                    <i class="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2 pt-2">
          <div class="col-md-3  mt-3">

            <div class="card card-effect p-0 h-100">
              <div class="card-img rounded-0">
                <div class="img-hover">
                  <img class="rounded-top img-fluid " src="./assets/images/vintageimg.webp" alt="..." />
                </div>
              </div>
              <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div class="pt-6">
                  <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Vintage Car</a></div>
                  <p class="text-dark text-center ">Effortlessly stylish and responsive, Bootstrap 5 cards adapt beautifully to diverse screen sizes, enhancing user experience.</p>
                </div>
                <div class="text-center">
                  <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
                    <i class="fa fa-arrow-right icon-arrow before"></i>
                    <span class="label fw-normal">Know More!</span>
                    <i class="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2 pt-2">
          <div class="col-md-3 mt-3">

            <div class="card card-effect p-0 h-100">
              <div class="card-img rounded-0">
                <div class="img-hover">
                  <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
                </div>
              </div>
              <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div class="pt-6">
                  <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Outstation</a></div>
                  <p class="text-dark text-center">Bootstrap 5 cards revolutionize content presentation, offering sleek containers for your information and visuals</p>
                </div>
                <div class="text-center">
                  <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
                    <i class="fa fa-arrow-right icon-arrow before"></i>
                    <span class="label fw-normal">Know More!</span>
                    <i class="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-2 pt-2" >
          <div class="col-md-3 mt-3" >
            <div class="card card-effect p-0 h-100">
              <div class="card-img rounded-0">
                <div class="img-hover">
                  <img class="rounded-top img-fluid" src="./assets/images/luxury.png" alt="..." />
                </div>
              </div>
              <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div class="pt-6">
                  <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">luxury cars</a></div>
                  <p class="text-dark text-center">Bootstrap 5 cards revolutionize content presentation, offering sleek containers for your information and visuals</p>
                </div>
                <div class="text-center">
                  <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
                    <i class="fa fa-arrow-right icon-arrow before"></i>
                    <span class="label fw-normal">Know More!</span>
                    <i class="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2 pt-2" >
            <div class="card card-effect p-0 h-100">
              <div class="card-img rounded-0">
                <div class="img-hover">
                  <img class="rounded-top img-fluid " src="./assets/images/corporate.jpg" alt="..." />
                </div>
              </div>
              <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div class="pt-6">
                  <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">corporate</a></div>
                  <p class="text-secondary text-center">Bootstrap 5 cards revolutionize content presentation, offering sleek containers for your information and visuals</p>
                </div>
                <div class="text-center">
                  <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
                    <i class="fa fa-arrow-right icon-arrow before"></i>
                    <span class="label fw-normal">Know More!</span>
                    <i class="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="service-heading text-center pb-4 pt-4">TESTIMONIAL</h2>
        </div>

        <section class="testimonial-section">
    <div class="container text-center">
       
      <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          
          <div class="carousel-item active">
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/80" alt="User 1" class="testimonial-image mx-auto"/>
              <h5 class="testimonial-name">John Doe</h5>
              <div class="star-rating">
                ★★★★☆
              </div>
              <p class="testimonial-text">"This service exceeded my expectations! The team was prompt and professional."</p>
            </div>
          </div>
          
          <div class="carousel-item">
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/80" alt="User 2" class="testimonial-image mx-auto"/>
              <h5 class="testimonial-name">Jane Smith</h5>
              <div class="star-rating">
                ★★★★★
              </div>
              <p class="testimonial-text">"The cars were clean and well-maintained. I had a wonderful experience!"</p>
            </div>
          </div>
        
          <div class="carousel-item">
            <div class="testimonial-card">
              <img src="https://via.placeholder.com/80" alt="User 3" class="testimonial-image mx-auto"/>
              <h5 class="testimonial-name">Michael Lee</h5>
              <div class="star-rating">
                ★★★★☆
              </div>
              <p class="testimonial-text">"Highly recommended! Great customer service and value for money."</p>
            </div>
          </div>
        </div>
         
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

      </div>


      <div>
        <h2 class="service-heading text-center mb-3">FRIQUNTLY-ASK-QUESTIONS</h2>
      </div>

      <div class="accordion container pt-3 mb-5" id="accordionExample">
        <div class="accordion-item content-center">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body text-light">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body text-light">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body text-light">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>















    </>

  );
};

export default Home;

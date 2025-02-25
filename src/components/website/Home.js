/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../helpers/api_helper";
import { Dropdown } from "primereact/dropdown";

const Home = () => {
  const navigate = useNavigate();
  const [talukas, setTalukas] = useState([]);
  const [selectedTalukas, setSelectedTalukas] = useState("");
  const [keyword, setKeyword] = useState("");

  const getAllTalukas = async () => {
    const res = await fetch(`${api_url}/api/admin/all-talukas`);
    const result = await res.json();
    if (result.status === 201) {
      setTalukas(result.result);
    } else {
      setTalukas([]);
    }
  };
  const [allCategory, setAllCategory] = useState([]);
  const getAllCategory = async () => {
    const response = await fetch(`${api_url}/api/admin/get-category`);
    const result = await response.json();
    if (result.status === 201) {
      setAllCategory(result.data);
    } else {
      alert(result.message);
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllTalukas();
  }, []);

  const getSearch = () => {
    navigate(`/${selectedTalukas}/${keyword}`);
  };

  // Convert data to PrimeReact Dropdown format
  const categoryOptions = allCategory?.map((item) => {
    return {
      value: item.categoryName, // Store item as a string
      label: item.categoryName, // Display category name
    };
  });

  return (
    <>
      <div className="main-searchbar pt-3">
        <div className="row m-0">
          <div className="col-lg-6 col-12 m-auto">
            <div className="search-bar   p-2 px-3 my-2 ">
              <div className="row g-3">
                <div className="col-lg-4 col-4 ">
                  <select
                    className="form-select form-control form-select-lg"
                    onChange={(e) => setSelectedTalukas(e.target.value)}
                  >
                    <option>
                      <b>Select City</b>
                    </option>
                    {talukas.map((item) => {
                      return (
                        <option value={item.taluka_name + "-" + item.district}>
                          {item.taluka_name + " (" + item.district + ")"}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-6 col-6 ">
                  {/* <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search for more than 20,000 products"
                    onChange={(e) => setKeyword(e.target.value)}
                  /> */}
                  <Dropdown
                    value={keyword}
                    options={categoryOptions}
                    onChange={(e) => setKeyword(e.value)}
                    optionLabel="label"
                    placeholder="Select One"
                    filter
                    className="w-100 h-100 ps-0"
                  />
                </div>
                <div className="col-lg-2 col-2 ">
                  <button className="btn btn-danger rounded-5 w-100 btn-lg">
                    <i className="fa fa-search" onClick={getSearch}></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="d-flex "
        style={{
          backgroundImage: "url('./assets/images/background-pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="col-lg-12 col-12 p-0 m-0  ">
          <img
            src="./assets/images/sliderimg.jpg"
            className="img-fluid w"
            alt="Responsive image"
          />
        </div>
      </section>

      {
        <section>
          <div className="container mb-5 mt-5">
            <div className="col-12 mt-1">
              <div className="row justify-content-center mb-5">
                <div>
                  <h2 className="service-heading text-center">TOP CITIES</h2>
                </div>
              </div>
            </div>
            <div className="row mb-1  card-effects">
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center ">
                        <a
                          className="text-decoration-none fw-bolder  text-tb-lines"
                          href="#/"
                        >
                          Mumbai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100 ">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder  text-tb-lines"
                          href="#/"
                        >
                          Pune
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4  ">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder  text-tb-lines"
                          href="#/"
                        >
                          Nagpur
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-6 pt-4 ">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Nashik
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100 ">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Thane
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Aurangabad
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Solapur
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Kolhapur
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Amravati
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Jalgaon
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Akola
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Latur
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder  text-tb-lines"
                          href="#/"
                        >
                          Ratnagiris
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Chandrapur
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Sangli
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder  text-tb-lines"
                          href="#/"
                        >
                          Ahmednagar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder   text-tb-lines"
                          href="#/"
                        >
                          Dhule
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect w-100">
                  <div className="card-body position-relative ">
                    <div>
                      <div className="h4   text-center">
                        <a
                          className="text-decoration-none fw-bolder  text-tb-lines"
                          href="#/"
                        >
                          Nanded
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        <section>
          <div className="container">
            <div className="col-12 mt-3">
              <div className="row justify-content-center mb-5">
                <div>
                  <h2 className="service-heading text-center">OUR SURVICES</h2>
                </div>
              </div>
            </div>
            <div className="row mb-5  card-effects">
              <div className="col-md-2 col-6 pt-3">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/swift.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Swift dzier
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-3">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/scorpio.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-3">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Scorpio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-3">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/ertiga.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Ertiga
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/cretaimg.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center pt-3">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Creta
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/crysta.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Crysta
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/verna.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center pt-4">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Verna
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 pt-4 col-6">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/aura.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center pt-3">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Hyundai Aura
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/vitara.webp"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Vitara brezza
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/force.webp"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center pt-4">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Cruiser
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/traveler.png"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Tempo Traveller
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/alto.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          Alto
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-6 pt-4 AboutSection">
                <div className="card card-effect p-0 h-100">
                  <div className="card-img rounded-0">
                    <div className="img-hover">
                      <img
                        className="rounded-top img-fluid"
                        src="./assets/images/i20.webp"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                    <div className="pt-6">
                      <div className="h4 mb-3 mt-4 text-center">
                        <a
                          className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                          href="#/"
                        >
                          I20
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      <div className="container mb-5 pt-2 pb-4">
        <div className="col-12 mt-3">
          <div className="row justify-content-center mb-5">
            <div>
              <h2 className="service-heading text-center pb-1">RENTAL-TYPES</h2>
            </div>
          </div>
        </div>
        <div className="row mb-5 card-effects">
          <div className="col-md-3 mt-2">
            <div className="card card-effect p-0 h-100">
              <div className="card-img rounded-0">
                <div className="img-hover">
                  <img
                    className="rounded-top img-fluid"
                    src="./assets/images/wedding.jpeg"
                    alt="..."
                  />
                </div>
              </div>
              <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div className="pt-6">
                  <div className="h4 mb-3 mt-2 text-center">
                    <a
                      className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                      href="#/"
                    >
                      wedding
                    </a>
                  </div>
                  <p className="text-dark text-center lh-base">
                    Customizable headers, footers, and interactive elements
                    within cards empower you to create engaging and modern web
                    designs.
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="/#"
                    className="btn d-block btn-primary py-3 fs-5 card-btn md"
                  >
                    <i className="fa fa-arrow-right icon-arrow before"></i>
                    <span className="label fw-normal">Know More!</span>
                    <i className="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3  mt-3">
            <div className="card card-effect p-0 h-100">
              <div className="card-img rounded-0">
                <div className="img-hover">
                  <img
                    className="rounded-top img-fluid "
                    src="./assets/images/vintageimg.webp"
                    alt="..."
                  />
                </div>
              </div>
              <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div className="pt-6">
                  <div className="h4 mb-3 mt-4 text-center">
                    <a
                      className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                      href="#/"
                    >
                      Vintage Car
                    </a>
                  </div>
                  <p className="text-dark text-center ">
                    Effortlessly stylish and responsive, Bootstrap 5 cards adapt
                    beautifully to diverse screen sizes, enhancing user
                    experience.
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="/#"
                    className="btn d-block btn-primary py-3 fs-5 card-btn md"
                  >
                    <i className="fa fa-arrow-right icon-arrow before"></i>
                    <span className="label fw-normal">Know More!</span>
                    <i className="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card card-effect p-0 h-100">
              <div className="card-img rounded-0">
                <div className="img-hover">
                  <img
                    className="rounded-top img-fluid"
                    src="./assets/images/townimg.jpg"
                    alt="..."
                  />
                </div>
              </div>
              <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div className="pt-6">
                  <div className="h4 mb-3 mt-4 text-center">
                    <a
                      className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                      href="#/"
                    >
                      Outstation
                    </a>
                  </div>
                  <p className="text-dark text-center">
                    Bootstrap 5 cards revolutionize content presentation,
                    offering sleek containers for your information and visuals
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="/#"
                    className="btn d-block btn-primary py-3 fs-5 card-btn md"
                  >
                    <i className="fa fa-arrow-right icon-arrow before"></i>
                    <span className="label fw-normal">Know More!</span>
                    <i className="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-effect p-0 h-100">
              <div className="card-img rounded-0">
                <div className="img-hover">
                  <img
                    className="rounded-top img-fluid"
                    src="./assets/images/luxury.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="card-body position-relative pt-0 px-1-9 pb-1-9">
                <div className="pt-6">
                  <div className="h4 mb-3 mt-4 text-center">
                    <a
                      className="text-decoration-none fw-bolder text-uppercase text-tb-lines"
                      href="#/"
                    >
                      luxury cars
                    </a>
                  </div>
                  <p className="text-dark text-center">
                    Bootstrap 5 cards revolutionize content presentation,
                    offering sleek containers for your information and visuals
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="/#"
                    className="btn d-block btn-primary py-3 fs-5 card-btn md"
                  >
                    <i className="fa fa-arrow-right icon-arrow before"></i>
                    <span className="label fw-normal">Know More!</span>
                    <i className="fa fa-arrow-right icon-arrow after"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="service-heading text-center pb-4 pt-4">TESTIMONIAL</h2>
        </div>

        <section className="testimonial-section">
          <div className="container text-center">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testimonial-card">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="User 1"
                      className="testimonial-image mx-auto"
                    />
                    <h5 className="testimonial-name">John Doe</h5>
                    <div className="star-rating">★★★★☆</div>
                    <p className="testimonial-text">
                      "This service exceeded my expectations! The team was
                      prompt and professional."
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="testimonial-card">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="User 2"
                      className="testimonial-image mx-auto"
                    />
                    <h5 className="testimonial-name">Jane Smith</h5>
                    <div className="star-rating">★★★★★</div>
                    <p className="testimonial-text">
                      "The cars were clean and well-maintained. I had a
                      wonderful experience!"
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="testimonial-card">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="User 3"
                      className="testimonial-image mx-auto"
                    />
                    <h5 className="testimonial-name">Michael Lee</h5>
                    <div className="star-rating">★★★★☆</div>
                    <p className="testimonial-text">
                      "Highly recommended! Great customer service and value for
                      money."
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div>
        <h2 className="service-heading text-center mb-3">
          FRIQUNTLY-ASK-QUESTIONS
        </h2>
      </div>

      <div className="accordion container pt-3 mb-5" id="accordionExample">
        <div className="accordion-item content-center">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-light">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-light">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-light">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

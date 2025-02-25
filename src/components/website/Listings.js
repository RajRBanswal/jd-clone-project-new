import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api_url } from "../helpers/api_helper";

const Listings = () => {
  const { talukas, keyword } = useParams();
  const [allListing, setAllListing] = useState([]);
  const [filterListing, setFilterListing] = useState([]);
  const getListing = async () => {
    const response = await fetch(`${api_url}/api/admin/all-listing`);
    const result = await response.json();
    if (result.status === 201) {
      let allListing = result.data.filter(
        (item) => {
          let cate = JSON.parse(item.category);
          let tlk = item.taluka + "-" + item.district;
          return (
            cate.categoryName.toLowerCase().trim() ==
              keyword.toLowerCase().trim(),
            tlk.toLowerCase().trim() == talukas.toLowerCase().trim()
          );
        }
        // item.category.toLowerCase().trim() == keyword.toLowerCase().trim() &&
        // item.location.toLowerCase().trim() == talukas.toLowerCase().trim()
      );

      setAllListing(allListing);
      setFilterListing(result.data);
    } else {
      alert(result.message);
    }
  };
  useEffect(() => {
    getListing();
  }, []);

  return (
    <div>
      <section className=" d-flex pt-1 flex-wrap overflow-scroll flex-nowrap justify-content-center">
        <div className="location-bar col-lg-7 col-12">
          <div className="location-options">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort-By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Relevance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rating
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Popular
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Distance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {" "}
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <a className="text-light" href="">
                {" "}
                <i className="fa-solid fa-star"></i> Top Rated
              </a>
            </button>

            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brand
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Toyota
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Honda
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tata
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Maruti Suzuki
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mahindra
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Force
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hyundai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ford
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  BMW
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  mercedes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Scoda
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Nissan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Volkswogen
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Jaguar
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Range Rover
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Porsche
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary dropdown-toggle text-light"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Segment
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Hatchback
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sedan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SUV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Compact SUV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  MUV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Van
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tempo Traveller
                </a>
              </li>
            </ul>
            <button
              className="btn  btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seating Capacity
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  4seater
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  5seater
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  7seater
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rental type
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Wedding
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Vintage Car
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Corporate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Luxury
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Outstation
                </a>
              </li>
            </ul>
            <button
              className="btn  btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rating
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Any
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  3.5+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  4.0+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  4.5+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  5.0+
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className=" container mt-2 mb-5 ">
        <div className="d-flex  row">
          <div className="col-md-10 w-100">
            {allListing &&
              allListing.map((items) => (
                <div>
                  <div className="row p-2 bg-white border rounded mt-3 pb-5">
                    <div className="col-md-3 mt-1">
                      <img
                        src={`${api_url}/uploads/${items.uplodImages[0]}`}
                        alt={items.uplodImages[0]}
                        className="img-fluid img-responsive rounded product-image"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-6 mt-1">
                      <h5>{items.title}</h5>
                      <div className="d-flex flex-row">
                        <div className="ratings mr-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <span>310</span>
                      </div>
                      <div className="mt-1 mb-2 spec-1 mt-2 text-dark ">
                        <span>
                          <i className="fa-solid fa-location-dot px-1"></i>By{" "}
                          {items.location}, {items.taluka}, {items.district}
                        </span>
                      </div>
                      <div className="mt-1 mb-2s spec-1 text-dark">
                        <span>
                          <i className="fa-solid fa-money-bill-transfer px-1"></i>{" "}
                          {items.priceList
                            ? "Price Available"
                            : "Price not available"}
                        </span>
                      </div>

                      <button
                        className="btn btn-primary btn-lg mt-4 "
                        type="button"
                      >
                        Book Now
                      </button>
                      <Link
                        to={`tel:${items.mobile}`}
                        className="btn btn-primary btn-lg mt-4 mx-3 "
                        type="button"
                      >
                        <i className="fa-solid fa-phone mx-1"></i>
                        {items.mobile}
                      </Link>
                    </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-lg"
                          type="button"
                        >
                          Contact US
                        </button>
                        <button
                          className="btn btn-outline-primary btn-lg mt-2"
                          type="button"
                        >
                          Send Enquary
                        </button>
                        <Link
                          to={`https://wa.me/91${items.mobile}`}
                          className="btn btn-success btn-lg mt-2"
                          type="button"
                        >
                          <i className="fa-brands fa-whatsapp px-1"></i>Whatsapp
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <section className=" d-flex pt-1 flex-wrap overflow-scroll flex-nowrap justify-content-center">
              <div className="location-bar col-lg-10 col-12">
                <div className="icon">📍</div>
                <h4 className="col-4">Find Results near you</h4>
                <div className="location-options">
                  <button className="highlight">Use Precise Location</button>
                  <button>CIDCO</button>
                  <button>Waluj MIDC</button>
                  <button>HUDCO</button>
                  <button>CIDCO Colony</button>
                  <button>Jalna Road Aurangabad</button>
                  <button>Kannad Aurangabad</button>
                  <button>Garkheda</button>
                </div>
              </div>
            </section>
            <div className="row p-2 bg-white border rounded mt-3 pb-5">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src="/assets/images/swift.jpg"
                />
              </div>
              <div className="col-md-6 mt-1">
                <h5>Sairaj Cab service</h5>
                <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div>
                <div className="mt-1 mb-2 spec-1 mt-2 ">
                  <span>
                    <i className="fa-solid fa-location-dot px-1"></i>By Pass
                    Station Road Aurangabad, Aurangabad-Maharashtra
                  </span>
                </div>
                <div className="mt-1 mb-2s spec-1">
                  <span>
                    {" "}
                    <i className="fa-solid fa-money-bill-transfer px-1"></i>{" "}
                    Price Available
                  </span>
                </div>

                <button className="btn btn-primary btn-lg mt-4" type="button">
                  Book Now
                </button>
                <button
                  className="btn btn-primary btn-lg mt-4 mx-3"
                  type="button"
                >
                  <i className="fa-solid fa-phone mx-1"></i>91+9656565654
                </button>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-lg" type="button">
                    Contact US
                  </button>
                  <button
                    className="btn btn-outline-primary btn-lg mt-2"
                    type="button"
                  >
                    Send Enquary
                  </button>
                  <button className="btn btn-success btn-lg mt-2" type="button">
                    <i className="fa-brands fa-whatsapp px-1"></i>Whatsapp
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-2 bg-white border rounded mt-3 pb-5">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src="/assets/images/scorpio.jpg"
                />
              </div>
              <div className="col-md-6 mt-1">
                <h5>Sairaj Cab service</h5>
                <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div>
                <div className="mt-1 mb-2 spec-1 mt-2 ">
                  <span>
                    <i className="fa-solid fa-location-dot px-1"></i>By Pass
                    Station Road Aurangabad, Aurangabad-Maharashtra
                  </span>
                </div>
                <div className="mt-1 mb-2s spec-1">
                  <span>
                    {" "}
                    <i className="fa-solid fa-money-bill-transfer px-1"></i>{" "}
                    Price Available
                  </span>
                </div>

                <button className="btn btn-primary btn-lg mt-4" type="button">
                  Book Now
                </button>
                <button
                  className="btn btn-primary btn-lg mt-4 mx-3"
                  type="button"
                >
                  <i className="fa-solid fa-phone mx-1"></i>91+9656565654
                </button>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-lg" type="button">
                    Contact US
                  </button>
                  <button
                    className="btn btn-outline-primary btn-lg mt-2"
                    type="button"
                  >
                    Send Enquary
                  </button>
                  <button className="btn btn-success btn-lg mt-2" type="button">
                    <i className="fa-brands fa-whatsapp px-1"></i>Whatsapp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;

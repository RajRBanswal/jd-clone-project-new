import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { api_url, web_url } from "../helpers/api_helper";

const Detail = () => {
  const navigate = useNavigate();
  const { talukas, service, serviceId } = useParams();
  const location = useLocation();
  const ListingData = location.state?.data;
  useEffect(() => {
    const storedData = sessionStorage.getItem("state");
    console.log(storedData);
    
  }, []);

  const [allListing, setAllListing] = useState(null);
  const [filterListing, setFilterListing] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store the full list
  const getListing = async () => {
    const response = await fetch(`${api_url}/api/admin/all-listing`);
    const result = await response.json();
    if (result.status == 201) {
      let allListing = result.data.find((item) => item._id === serviceId);

      setAllListing(allListing);
      setOriginalData(allListing);
      setFilterListing(result.data);
    } else {
      alert(result.message);
    }
  };
  const userId = sessionStorage.getItem("userId");
  // const getUsers = async () => {
  //   const response = await fetch(`${api_url}/api/users/${userId}`);
  //   const result = await response.json();
  //   if (result.status === 201) {
  //     console.log(result.data);
  //   } else {
  //     alert(result.message);
  //   }
  // };
  useEffect(() => {
    // getUsers();
    getListing();
  }, []);
  let priceList = allListing?.priceList;

  const [rating, setRating] = useState(0);

  // Handle rating selection
  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);

    // Send rating to backend
    saveRating(selectedRating);
  };

  // Function to send data to backend
  const saveRating = async (selectedRating) => {
    sessionStorage.setItem("pathname", window.location.pathname);
    sessionStorage.setItem(
      "state",
      JSON.stringify([ListingData.keyword, ListingData.address])
    );

    if (userId === null || userId === "") {
      navigate("/login");
    } else {
      try {
        const response = await fetch(
          "https://your-backend-api.com/save-rating",
          {
            rating: selectedRating,
            userId: "12345", // Pass user ID dynamically if required
          }
        );
        console.log("Rating saved:", response.data);
      } catch (error) {
        console.error("Error saving rating:", error);
      }
    }
  };

  return (
    <div className="px-4 py-3 details_page">
      <ul className="listing-details p-0">
        <li>{talukas}</li>
        <li>
          {ListingData.keyword} in {talukas}
        </li>
        <li>
          {ListingData.keyword} in {ListingData.address}
        </li>
        <li>{service}</li>
      </ul>
      <div className="px-4">
        {allListing && (
          <div>
            <div className="row p-2 align-items-center bg-white border rounded mt-3">
              <div className="col-lg-9 mt-1">
                <h3>{allListing?.title}</h3>
                <div className="rating-box mb-0">
                  <p className="rating-average mb-0" role="button" tabIndex="0">
                    4.1 <span className="star">⭐</span>
                  </p>
                  <p
                    className="rating-count mb-0"
                    role="button"
                    aria-label="Ratings"
                    tabIndex="0"
                  >
                    126 Ratings
                  </p>
                  <p
                    className="trusted mb-0"
                    title="This business information is trusted based on users' ratings and reviews."
                  >
                    <img
                      src={`${web_url}/shield.png`}
                      width={25}
                      height={25}
                      alt=""
                    />{" "}
                    Trusted
                  </p>
                  <div className="verified" tabIndex="-1">
                    <p className="verified-tooltip mb-0">
                      <img
                        src={`${web_url}/verify.png`}
                        width={25}
                        height={25}
                        alt=""
                      />{" "}
                      Verified by Justdial
                    </p>
                  </div>
                  {/* <div className="claimed">
                      <span>🏆 Claimed</span>
                    </div> */}
                </div>
                <div className="address_hour ">
                  <li className="fw-bold">
                    <i className="fa-solid fa-location-dot px-1"></i>{" "}
                    {ListingData.address}, {talukas}
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right px-1"></i>{" "}
                    <label className="text-success">Open</label> until{" "}
                    {allListing.openingHour}
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right px-1"></i>{" "}
                    {allListing.yearOfExperience} Years in Business
                  </li>
                </div>
                <div className="row g-3">
                  <div className="col-lg-3 col-4">
                    <button
                      className="btn btn-primary btn-lg w-100"
                      type="button"
                    >
                      Contact US
                    </button>
                  </div>
                  <div className="col-lg-3 col-4">
                    <button
                      className="btn btn-outline-primary btn-lg w-100"
                      type="button"
                    >
                      Send Enquary
                    </button>
                  </div>
                  <div className="col-lg-3 col-4">
                    <Link
                      to={`https://wa.me/91${allListing?.mobile}`}
                      className="btn btn-success btn-lg w-100"
                      type="button"
                    >
                      <i className="fa-brands fa-whatsapp px-1"></i>
                      Whatsapp
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="my-auto ms-auto-center">
                  <h5 className="mb-0">Click to Rate</h5>
                  <div className="rate">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <>
                        <input
                          type="radio"
                          id={`star${star}`}
                          name="rate"
                          value={star}
                          checked={rating === star}
                          onChange={handleRatingChange}
                        />
                        <label htmlFor={`star${star}`} title={`${star} stars`}>
                          {star} stars
                        </label>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-photos-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-photos"
                    type="button"
                    role="tab"
                    aria-controls="pills-photos"
                    aria-selected="false"
                  >
                    Photos
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Price List
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-quickInfo-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-quickInfo"
                    type="button"
                    role="tab"
                    aria-controls="pills-quickInfo"
                    aria-selected="false"
                  >
                    Quick Info
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-services-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-services"
                    type="button"
                    role="tab"
                    aria-controls="pills-services"
                    aria-selected="false"
                  >
                    Services
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row g-3">
                    <div className="col-lg-3">
                      <img
                        src={`${api_url}/uploads/${allListing.uplodImages[0]}`}
                        alt={allListing.uplodImages[0]}
                        className="img-fluid img-responsive rounded product-image"
                        style={{ width: "100%", height: "200px" }}
                      />
                      <h5 className="mt-3 mb-0">All</h5>
                      <p className="mt-0">
                        {allListing.uplodImages.length} Photos / Video
                      </p>
                    </div>
                    <div className="col-lg-3">
                      <video
                        className=""
                        src={`${api_url}/uploads/${allListing.uplodVideos?.[0]}`}
                        controls
                        muted
                        style={{
                          width: "100%",
                          height: "200px",
                          borderRadius: 10,
                        }}
                      ></video>

                      <h5 className="mt-3">
                        {allListing.uplodVideos?.length} Video
                      </h5>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-8">
                      {priceList?.map((items) => {
                        let item = JSON.parse(items);
                        return (
                          <div className="card p-3">
                            <h5 className="fw-bold">{item.priceTitle}</h5>
                            <p className="mb-0 fw-bold">
                              ₹ {item.price} / {item.pricePer}
                            </p>
                            <p className="mb-0">
                              {item.priceDescription.length > 180
                                ? item.priceDescription.slice(0, 180) + "..."
                                : item.priceDescription}
                            </p>
                            <Link
                              to={"#"}
                              className="fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target={`#exampleModal${item.id}`}
                            >
                              View
                            </Link>

                            <div
                              className="modal fade"
                              id={`exampleModal${item.id}`}
                              tabIndex="-1"
                              aria-labelledby={`exampleModalLabel${item.id}`}
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button
                                      type="button"
                                      className="btn-close float-end"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                    <img
                                      src={`${api_url}/uploads/${allListing.uplodImages[0]}`}
                                      alt={allListing.uplodImages[0]}
                                      className="img-fluid img-responsive rounded product-image"
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                    <h5 className="fw-bold mt-3">
                                      {item.priceTitle}
                                    </h5>
                                    <p className="mb-0 fw-bold">
                                      ₹ {item.price} / {item.pricePer}
                                    </p>
                                    <small className="mb-0">
                                      {item.priceDescription}
                                    </small>
                                    <p className="mb-0 mt-2">
                                      Vehical Type : {item.vehicleType}
                                    </p>
                                    <p className="mb-0 mt-2">
                                      Other : {item.other}
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-lg-3 col-4">
                                <button
                                  className="btn btn-primary w-100"
                                  type="button"
                                >
                                  Contact US
                                </button>
                              </div>
                              <div className="col-lg-3 col-4">
                                <button
                                  className="btn btn-outline-primary w-100"
                                  type="button"
                                >
                                  Send Enquary
                                </button>
                              </div>
                              <div className="col-lg-3 col-4">
                                <Link
                                  to={`https://wa.me/91${allListing?.mobile}`}
                                  className="btn btn-success w-100"
                                  type="button"
                                >
                                  <i className="fa-brands fa-whatsapp px-1"></i>
                                  Whatsapp
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <hr />
                  <h5>Quick Information</h5>
                  <div className="row">
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Segments</h5>
                      <ul className="">
                        {allListing?.segment?.split(",").map((seg, index) => (
                          <li key={index} className="mt-1">
                            {seg.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Seating Capacity</h5>
                      <p>{allListing?.seatingCapacity}</p>
                      <h5 className="fw-bold mb-2">Packages Offered</h5>
                      <p>{allListing?.packagesOffered}</p>
                    </div>
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Brands</h5>
                      <ul className="">
                        {allListing?.brands?.split(",").map((brd, index) => (
                          <li key={index} className="mt-1">
                            {brd.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Rental Type</h5>
                      <ul className="">
                        {allListing?.rentalType
                          ?.split(",")
                          .map((rtype, index) => (
                            <li key={index} className="mt-1">
                              {rtype.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <h3> Reviews & Ratings</h3>
                  <div className="row">
                    <div className="col-lg-1 col-2">
                      <div className="card p-2 bg-success h-100 align-items-center justify-content-center">
                        <h5 className="mb-0 text-center text-white ">
                          {allListing?.rating}
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-8 col-8">
                      <h5 clas>114 Ratings</h5>
                      <p className="mb-0">
                        Taxi Ghar rating index based on 114 ratings across the
                        web
                      </p>
                    </div>
                  </div>
                  <h3 className="mb-0">Start your Review </h3>
                  <div className="row">
                    <div className="col-lg-2 col-6">
                      <div className="rate">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <>
                            <input
                              type="radio"
                              id={`star${star}`}
                              name="rate"
                              value={star}
                              checked={rating === star}
                              onChange={handleRatingChange}
                            />
                            <label
                              htmlFor={`star${star}`}
                              title={`${star} stars`}
                            >
                              {star} stars
                            </label>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3> Recent rating trend</h3>
                  <p>5.0 1.0 4.5 2.0 1.0 5.0 5.0 5.0 5.0</p>
                  <h3> User Reviews</h3>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-photos"
                  role="tabpanel"
                  aria-labelledby="pills-photos-tab"
                >
                  <div className="row g-3">
                    <div className="col-lg-3">
                      <img
                        src={`${api_url}/uploads/${allListing.uplodImages[0]}`}
                        alt={allListing.uplodImages[0]}
                        className="img-fluid img-responsive rounded product-image"
                        style={{ width: "100%", height: "200px" }}
                      />
                      <h5 className="mt-3 mb-0">All</h5>
                      <p className="mt-0">
                        {allListing.uplodImages.length} Photos / Video
                      </p>
                    </div>
                    <div className="col-lg-3">
                      <video
                        className=""
                        src={`${api_url}/uploads/${allListing.uplodVideos?.[0]}`}
                        controls
                        muted
                        style={{
                          width: "100%",
                          height: "200px",
                          borderRadius: 10,
                        }}
                      ></video>

                      <h5 className="mt-3">
                        {allListing.uplodVideos?.length} Video
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      {priceList?.map((items) => {
                        let item = JSON.parse(items);
                        return (
                          <div className="card p-3">
                            <h5 className="fw-bold">{item.priceTitle}</h5>
                            <p className="mb-0 fw-bold">
                              ₹ {item.price} / {item.pricePer}
                            </p>
                            <p className="mb-0">
                              {item.priceDescription.length > 180
                                ? item.priceDescription.slice(0, 180) + "..."
                                : item.priceDescription}
                            </p>
                            <Link
                              to={"#"}
                              className="fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target={`#exampleModal${item.id}`}
                            >
                              View
                            </Link>

                            <div
                              className="modal fade"
                              id={`exampleModal${item.id}`}
                              tabIndex="-1"
                              aria-labelledby={`exampleModalLabel${item.id}`}
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button
                                      type="button"
                                      className="btn-close float-end"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                    <img
                                      src={`${api_url}/uploads/${allListing.uplodImages[0]}`}
                                      alt={allListing.uplodImages[0]}
                                      className="img-fluid img-responsive rounded product-image"
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                    <h5 className="fw-bold mt-3">
                                      {item.priceTitle}
                                    </h5>
                                    <p className="mb-0 fw-bold">
                                      ₹ {item.price} / {item.pricePer}
                                    </p>
                                    <small className="mb-0">
                                      {item.priceDescription}
                                    </small>
                                    <p className="mb-0 mt-2">
                                      Vehical Type : {item.vehicleType}
                                    </p>
                                    <p className="mb-0 mt-2">
                                      Other : {item.other}
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-lg-3 col-4">
                                <button
                                  className="btn btn-primary w-100"
                                  type="button"
                                >
                                  Contact US
                                </button>
                              </div>
                              <div className="col-lg-3 col-4">
                                <button
                                  className="btn btn-outline-primary w-100"
                                  type="button"
                                >
                                  Send Enquary
                                </button>
                              </div>
                              <div className="col-lg-3 col-4">
                                <Link
                                  to={`https://wa.me/91${allListing?.mobile}`}
                                  className="btn btn-success w-100"
                                  type="button"
                                >
                                  <i className="fa-brands fa-whatsapp px-1"></i>
                                  Whatsapp
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-quickInfo"
                  role="tabpanel"
                  aria-labelledby="pills-quickInfo-tab"
                >
                  <h5>Quick Information</h5>
                  <div className="row">
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Segments</h5>
                      <ul className="">
                        {allListing?.segment?.split(",").map((seg, index) => (
                          <li key={index} className="mt-1">
                            {seg.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Seating Capacity</h5>
                      <p>{allListing?.seatingCapacity}</p>
                      <h5 className="fw-bold mb-2">Packages Offered</h5>
                      <p>{allListing?.packagesOffered}</p>
                    </div>
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Brands</h5>
                      <ul className="">
                        {allListing?.brands?.split(",").map((brd, index) => (
                          <li key={index} className="mt-1">
                            {brd.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-3">
                      <h5 className="fw-bold mb-2">Rental Type</h5>
                      <ul className="">
                        {allListing?.rentalType
                          ?.split(",")
                          .map((rtype, index) => (
                            <li key={index} className="mt-1">
                              {rtype.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-services"
                  role="tabpanel"
                  aria-labelledby="pills-services-tab"
                >
                  <h5 className="fw-bold mb-2">Services</h5>
                  <ul className="">
                    {allListing?.services?.split(",").map((seg, index) => (
                      <li key={index} className="mt-1">
                        {seg.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                >
                  <h3> Reviews & Ratings</h3>
                  <div className="row">
                    <div className="col-lg-1 col-2">
                      <div className="card p-2 bg-success h-100 align-items-center justify-content-center">
                        <h5 className="mb-0 text-center text-white ">
                          {allListing?.rating}
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-8 col-8">
                      <h5 clas>114 Ratings</h5>
                      <p className="mb-0">
                        Taxi Ghar rating index based on 114 ratings across the
                        web
                      </p>
                    </div>
                  </div>
                  <h3 className="mb-0">Start your Review </h3>
                  <div className="row">
                    <div className="col-lg-2 col-6">
                      <div className="rate">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <>
                            <input
                              type="radio"
                              id={`star${star}`}
                              name="rate"
                              value={star}
                              checked={rating === star}
                              onChange={handleRatingChange}
                            />
                            <label
                              htmlFor={`star${star}`}
                              title={`${star} stars`}
                            >
                              {star} stars
                            </label>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3> Recent rating trend</h3>
                  <p>5.0 1.0 4.5 2.0 1.0 5.0 5.0 5.0 5.0</p>
                  <h3> User Reviews</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Detail;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api_url } from "../helpers/api_helper";

const Listings = () => {
  const navigate = useNavigate();
  const { talukas, keyword } = useParams();
  const [allListing, setAllListing] = useState([]);
  const [filterListing, setFilterListing] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store the full list
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
      setOriginalData(allListing);
      setFilterListing(result.data);
    } else {
      alert(result.message);
    }
  };
  useEffect(() => {
    getListing();
  }, []);

  const [sortByFilter, setSortByFilter] = useState("Relevance");

  // Function to filter data
  const handleSortByFilter = (filter) => {
    setSortByFilter(filter); // Update selected filter

    let filteredData = [...allListing]; // Copy original data

    switch (filter) {
      case "Rating":
        filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case "Popular":
        filteredData.sort((a, b) => b.popularity - a.popularity);
        break;
      case "Distance":
        filteredData.sort((a, b) => a.distance - b.distance);
        break;
      default:
        break;
    }

    setAllListing(filteredData);
  };
  const [selectedBrand, setSelectedBrand] = useState("All");
  const handleBrandFilter = (selectedBrands) => {
    setSelectedBrand(selectedBrands);

    if (selectedBrands.length === 0 || selectedBrands.includes("All")) {
      setAllListing(originalData);
    } else {
      const filteredDatas = originalData.filter((item) => {
        let string = JSON.stringify(item.brands);
        return string.includes(selectedBrands);
      });
      setAllListing(filteredDatas);
    }
  };
  const [selectedSegment, setSelectedSegment] = useState("All");
  const handleSegmentFilter = (segment) => {
    setSelectedSegment(segment);

    if (segment === "All") {
      setAllListing(originalData);
    } else {
      const filteredDatas = originalData.filter((item) => {
        let string = JSON.stringify(item.segment);
        return string.includes(segment);
      });
      setAllListing(filteredDatas);
    }
  };

  const seatingOptions = [
    "5 Seater",
    "7 Seater",
    "9 Seater",
    "10 Seater",
    "12 Seater",
    "15 Seater",
  ];
  const [selectedCapacity, setSelectedCapacity] = useState("All");

  const handleSeatingFilter = (capacity) => {
    setSelectedCapacity(capacity);
    if (capacity === "All") {
      setAllListing(originalData);
    } else {
      const filteredDatas = originalData.filter((item) => {
        let string = JSON.stringify(item.cabSeaterCapacity);
        return string.includes(capacity);
      });
      setAllListing(filteredDatas);
    }
  };

  const [selectedRental, setSelectedRental] = useState("All");

  const handleRentalFilter = (rentalType) => {
    setSelectedRental(rentalType);
    if (rentalType === "All") {
      setAllListing(originalData);
    } else {
      const filteredDatas = originalData.filter((item) => {
        let string = JSON.stringify(item.rentalType);
        return string.includes(rentalType);
      });
      setAllListing(filteredDatas);
    }
  };

  const [selectedRating, setSelectedRating] = useState("Any");

  const handleRatingFilter = (rating) => {
    setSelectedRating(rating);

    if (rating === "Any") {
      setAllListing(originalData);
    } else {
      const minRating = parseFloat(rating); // Convert "4.5+" to 4.5
      const filteredDatas = originalData.filter((item) => {
        return item.rating >= minRating; // Check if any rating meets the condition
      });

      setAllListing(filteredDatas);
    }
  };

  return (
    <div>
      <section className="container-fluid">
        <div className="location-bar col-lg-12 col-12">
          <div className="location-options">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By: {sortByFilter}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {["Relevance", "Rating", "Popular", "Distance"].map((filter) => (
                <li key={filter}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSortByFilter(filter)}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
            <button className="btn btn-outline-primary">
              <i className="fa-solid fa-star"></i> Top Rated
            </button>

            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brand: {selectedBrand}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleBrandFilter("All")}
                >
                  All Brands
                </button>
              </li>
              {[
                "Nissan",
                "Force",
                "Ford",
                "Skoda",
                "Honda",
                "Hyundai",
                "Audi",
                "Mercedes",
                "Maruti Suzuki",
                "Volkswagen",
                "Tata",
                "BMW",
                "Toyota",
                "Limousine",
                "Mahindra",
                "Chevrolet",
              ].map((brand) => (
                <li key={brand}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleBrandFilter(brand)}
                  >
                    {brand}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Segment : {selectedSegment}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleSegmentFilter("All")}
                >
                  All
                </a>
              </li>
              {[
                "Hatchback",
                "Sedan",
                "SUV",
                "Compact SUV",
                "MUV",
                "Van",
                "Tempo Traveller",
              ].map((segment, index) => (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSegmentFilter(segment)}
                  >
                    {segment}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seating Capacity: {selectedCapacity}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleSeatingFilter("All")}
                >
                  All
                </a>
              </li>
              {seatingOptions.map((capacity, index) => (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSeatingFilter(capacity)}
                  >
                    {capacity}+
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rental Type: {selectedRental}
            </button>

            {/* Dropdown Menu */}
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleRentalFilter("All")}
                >
                  All
                </a>
              </li>
              {[
                "Wedding",
                "Vintage Car",
                "Corporate",
                "Luxury",
                "Outstation",
              ].map((type, index) => (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleRentalFilter(type)}
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rating: {selectedRating}
            </button>

            {/* Dropdown Menu */}
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {["Any", "3.0+", "3.5+", "4.0+", "4.5+", "5.0+"].map(
                (rate, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleRatingFilter(rate)}
                    >
                      {rate}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      <div className=" container mt-2 mb-5 ">
        <div className="d-flex  row">
          <div className="col-md-10 w-100">
            {allListing &&
              allListing.map((items) => (
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/details/${talukas}/${items.title}/${items._id}`,
                      {
                        state: {
                          data: { keyword: keyword, address: items.location },
                        },
                      }
                    )
                  }
                >
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

            {/* <section className=" d-flex pt-1 flex-wrap overflow-scroll flex-nowrap justify-content-center">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;

import React from 'react'

const Detail = () => {
    return (
        <div>
            <div className="containerr">
                <div className="col-md-10 w-100">
                    <div className="row p-2 bg-white border rounded pb-5">
                        <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="/assets/images/aura.jpg" /></div>
                        <div className="col-md-6 mt-1">
                            <h5>Sairaj Cab service</h5>
                            <div className="d-flex flex-row">
                                <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                            </div>
                            <div className="mt-1 mb-2 spec-1 mt-2 "><span ><i className="fa-solid fa-location-dot px-1"></i>By Pass Station Road Aurangabad, Aurangabad-Maharashtra</span></div>
                            <div className="mt-1 mb-2s spec-1"><span> <i className="fa-solid fa-money-bill-transfer px-1"></i> Price Available</span></div>

                            <button className="btn btn-primary btn-lg mt-4" type="button">Book Now</button>
                            <button className="no-btn btn btn-primary btn-lg mt-4" type="button"><i className="fa-solid fa-phone mx-1"></i>91+9656565654</button>


                        </div>
                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-lg" type="button">Contact US</button><button className="btn btn-outline-primary btn-lg mt-2" type="button">Send Enquary</button><button className="btn btn-success btn-lg mt-2" type="button"><i className="fa-brands fa-whatsapp px-1"></i>Whatsapp</button></div>
                        </div>
                    </div>
                </div>
                {/* Photos Section */}
                <div className="photoss container mt-5">
                    <h3>Photos</h3>
                    <div className="photos-gallery">

                        <img className="w-75" src="/assets/images/verna.jpg" alt="Photo 2" />
                        <img className="w-75" src="./assets/images/verna.jpg" alt="Photo 3" />
                        <img className="w-75" src="./assets/images/verna.jpg" alt="Photo 4" />
                        <img className="w-75" src="/assets/images/verna.jpg" alt="Photo 2" />
                        <img className="w-75" src="./assets/images/verna.jpg" alt="Photo 3" />
                        <img className="w-75" src="./assets/images/verna.jpg" alt="Photo 4" />
                    </div>
                    <button className="uploadd-button">Upload Photos</button>
                </div>

                {/* Contact Section */}
                <div className="contactt mt-3">
                    <h2>INFORMATION</h2>
                    <h3>Contact</h3>
                    <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:090549444627"> 090549444627</a>
                    </p>
                    <p>
                        <strong>Address:</strong> Mohammadi Chowk, Beed By Pass Road, Station Road Aurangabad,
                        Maharashtra - 431005
                    </p>
                    <p>
                        <strong>Hours:</strong> Open 24 Hrs
                    </p>
                    <a href="#">Get Directions</a>




                </div>

                {/* Price List Section */}
                <div className="pricee-list container ">
                    <h3 >Price List</h3>
                    <div className="cards-container">
                        <div className="cards">
                            <h4>Car on Rent - Airport Transfer</h4>
                            <p>Convenient transportation to and from the airport.</p>
                            <div className="price">₹11 onwards / km</div>
                            <button>View Details</button>
                        </div>

                        <div className="cards">
                            <h4>Car on Rent - One Way</h4>
                            <p>One way car rental services for flexible travel.</p>
                            <div className="price">₹11 onwards / km</div>
                            <button>View Details</button>
                        </div>

                        <div className="cards">
                            <h4>Car on Rent - Local</h4>
                            <p>Local rental services for nearby trips.</p>
                            <div className="price">₹11 onwards / km</div>
                            <button>View Details</button>
                        </div>

                        <div className="cards">
                            <h4>Rental-Duration</h4>
                            <p>Longer Rental Period May Qualify For Discounrted Rate</p>
                            <div className="price">₹11 onwards / km</div>
                            <button>View Details</button>
                        </div>

                        <div className="cards">
                            <h4>Seasonal Demand</h4>
                            <p>Price may rise during peak tourist seasons due to higher demand</p>
                            <div className="price">₹11 onwards / km</div>
                            <button>View Details</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="highlights-container ">
                <h2>Highlights from the business</h2>
                <div className="icons-section d-flex">
                    <div className="icon-item">
                        <img src=".\assets\images\luxury-diamond.png" alt="Luxury" width={100} />
                        <p>Luxury</p>
                    </div>
                    <div className="icon-item">
                        <img src="./assets/images/weeding-car.png" alt="Wedding" width={100} />
                        <p>Wedding</p>
                    </div>
                    <div className="icon-item">
                        <img src="./assets/images/corporate.png" alt="Corporate" width={100} />
                        <p>Corporate</p>
                    </div>
                </div>

                <div className="details-section container">
                    <div className="detail-item">
                        <p><strong>Segment:</strong></p>
                        <a href="#">Compact SUV</a>, <a href="#">Sedan </a>
                    </div>
                    <div className="detail-item">
                        <p><strong>Packages Offered:</strong></p>
                        <a href="#">Domestic</a>
                    </div>
                    <div className="detail-item">
                        <p><strong>Seating Capacity:</strong></p>
                        <a href="#">Tempo Traveller</a>
                    </div>
                    <div className="detail-item">
                        <p><strong>Services:</strong></p>
                        <a href="#">Tempos On Rent</a>
                    </div>
                </div>


            </div>

            <div className="container my-4">
                <h2 className="mb-4">Key Insights</h2>
                <div className="row g-4">

                    <div className="col-md-6">
                        <div className="card border-success h-100">
                            <div className="card-body">
                                <h5 className="card-title text-success"><i className="bi bi-hand-thumbs-up-fill"></i> What users liked</h5>
                                <ul className="list-unstyled">
                                    <li>🚗 Drivers are polite, knowledgeable, and cooperative.</li>
                                    <li>🚙 Cars are clean, well-maintained, and safe to travel.</li>
                                    <li>⏱️ The service is prompt and punctual.</li>
                                </ul>
                                <a href="#" className="text-primary">More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-danger h-100">
                            <div className="card-body">
                                <h5 className="card-title text-danger"><i className="bi bi-bar-chart-fill"></i> What can be improved</h5>
                                <ul className="list-unstyled">
                                    <li>💰 A few users mentioned that the pricing is on the higher side. However, many others felt that it was value for money.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>



            );
};
            export default Detail

// <div>

//     <div className="d-flex mx-5 pt-5">
//         <div className="col-lg-12 col-12">
//             <div className=" row p-2 bg-white border rounded mt-3 pb-5 ">
//                 <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="/assets/images/swift.jpg" /></div>
//                 <div className="col-md-6 mt-1">
//                     <h5>Sairaj Cab service</h5>
//                     <div className="d-flex flex-row">
//                         <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
//                     </div>
//                     <div className="mt-1 mb-2 spec-1 mt-2 "><span ><i className="fa-solid fa-location-dot px-1"></i>By Pass Station Road Aurangabad, Aurangabad-Maharashtra</span></div>
//                     <div className="mt-1 mb-2s spec-1"><span> <i className="fa-solid fa-money-bill-transfer px-1"></i> Price Available</span></div>

//                 </div>
//                 <div className="align-items-center align-content-center col-md-3 border-left mt-1">
//                     <div className="d-flex flex-column mt-4">
//                         <button className="btn btn-primary btn-lg" type="button">Contact US</button>
//                         <button className="btn btn-outline-primary btn-lg mt-2" type="button">Send Enquary</button>
//                         <button className="btn btn-success btn-lg mx-2" type="button"><i className="fa-brands fa-whatsapp px-1"></i>Whatsapp</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* <div className=" w-50 mt-3">
//         <div className="">

//             <div className="col-lg-2 col-4 w-100 mx-4">
//                 <div className="card">
//                     <div className="card-body">

//                         <h5 className="card-title">Contact Number</h5>
//                         <p className="card-text"><i className="fa-solid fa-phone px-1"></i>+1 234 567 890</p>

//                         <h5 className="card-title pt-2">Address</h5>
//                         <p className="card-text"><i className="fa-solid fa-location-dot px-1"></i>Mohammadi Chowk, Beed By Pass Road, Station Road Aurangabad, Aurangabad-Maharashtra - 431005 (Silk Mill Colony , Behind Janta Kirana)</p>

//                         <h5 className="card-title pt-2">Information</h5>
//                         <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo vel justo tincidunt tincidunt.</p>

//                         <div className="d-flex pt-2">
//                             <h5 className="card-title"><i className="fa-solid fa-diamond-turn-right"></i>Get Location</h5>
//                             <h5 className="card-title px-5"><i className="fa-solid fa-copy px-1"></i>Copy</h5>
//                         </div>

//                         <h5 className="card-title pt-3"><i className="fa-regular fa-clock px-1"></i>Open 25 Hour</h5>

//                         <h5 className="card-title pt-3"><i className="fa-solid fa-envelope px-1"></i>Send Enquary By Email</h5>


//                         <h5 className="card-title pt-3"><i className="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>


//                         <h5 className="card-title pt-3"><i className="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>

//                         <h5 className="card-title pt-3"><i className="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div> */}
//     </div>


//     <div>
//         <h2 className="service-heading pb-4 pt-4 text-center">More Information</h2>
//     </div>
//     <div className="card-group">
//         <div className="card-container">

//             <div className="card-info">
//                 <h3>Car on Rent - Airport Transfer</h3>
//                 <p>Car on rent for airport transfer services provide...</p>
//                 <div className="price">₹11 onwards / km</div>
//                 <button>View Details</button>
//             </div>


//             <div className="card-info">
//                 <h3>Car on Rent - One Way</h3>
//                 <p>One way car rental services allow customers to rent a...</p>
//                 <div className="price">₹11 onwards / km</div>
//                 <button>View Details</button>
//             </div>


//             <div className="card-info">
//                 <h3>Car on Rent - Local</h3>
//                 <p>Local car rental services provide residents and visitors...</p>
//                 <div className="price">₹11 onwards / km</div>
//                 <button>View Details</button>
//             </div>
//         </div>

//     </div>


//     <div>
//         <h2 className="service-heading text-center pb-4 pt-4">Photos</h2>
//     </div>
//     {<div className="d-flex">
//         <div className="col-md-3 col-4 pt-2">
//             <div className="card card-effect p-0 h-100">
//                 <div className="card-img rounded-0">
//                     <div className="img-hover">
//                         <img className="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="col-md-3 col-4 pt-2">
//             <div className="card card-effect p-0 h-100">
//                 <div className="card-img rounded-0">
//                     <div className="img-hover">
//                         <img className="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="col-md-3 col-4 pt-2">
//             <div className="card card-effect p-0 h-100">
//                 <div className="card-img rounded-0">
//                     <div className="img-hover">
//                         <img className="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="col-md-3 pt-2">
//             <div className="card card-effect p-0 h-100">
//                 <div className="card-img rounded-0">
//                     <div className="img-hover">
//                         <img className="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>}


// </div>


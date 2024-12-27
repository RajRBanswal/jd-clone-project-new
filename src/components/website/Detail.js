import React from 'react'

const Detail = () => {
    return (
        <div className="containerr">
            <div class="col-md-10 w-100">
                <div class="row p-2 bg-white border rounded pb-5">
                    <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/aura.jpg" /></div>
                    <div class="col-md-6 mt-1">
                        <h5>Sairaj Cab service</h5>
                        <div class="d-flex flex-row">
                            <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                        </div>
                        <div class="mt-1 mb-2 spec-1 mt-2 "><span ><i class="fa-solid fa-location-dot px-1"></i>By Pass Station Road Aurangabad, Aurangabad-Maharashtra</span></div>
                        <div class="mt-1 mb-2s spec-1"><span> <i class="fa-solid fa-money-bill-transfer px-1"></i> Price Available</span></div>

                        <button class="btn btn-primary btn-lg mt-4" type="button">Book Now</button>
                        <button class="btn btn-primary btn-lg mt-4 mx-4" type="button"><i class="fa-solid fa-phone mx-1"></i>91+9656565654</button>


                    </div>
                    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-lg" type="button">Contact US</button><button class="btn btn-outline-primary btn-lg mt-2" type="button">Send Enquary</button><button class="btn btn-success btn-lg mt-2" type="button"><i class="fa-brands fa-whatsapp px-1"></i>Whatsapp</button></div>
                    </div>
                    </div>
                </div>
                {/* Photos Section */}
                <div className="photoss container mt-5">
                    <h3>Photos</h3>
                    <div className="photos-gallery">
                        
                        <img class="w-75" src="/assets/images/verna.jpg" alt="Photo 2" />
                        <img class="w-75" src="./assets/images/verna.jpg" alt="Photo 3" />
                        <img class="w-75" src="./assets/images/verna.jpg" alt="Photo 4" />
                        <img class="w-75" src="/assets/images/verna.jpg" alt="Photo 2" />
                        <img class="w-75" src="./assets/images/verna.jpg" alt="Photo 3" />
                        <img class="w-75" src="./assets/images/verna.jpg" alt="Photo 4" />
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
                    +
                    
                </div>

                {/* Price List Section */}
                <div className="pricee-list">
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
                    </div>
                </div>
            </div>
            );
  };

        // <div>

        //     <div class="d-flex mx-5 pt-5">
        //         <div class="col-lg-12 col-12">
        //             <div class=" row p-2 bg-white border rounded mt-3 pb-5 ">
        //                 <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/swift.jpg" /></div>
        //                 <div class="col-md-6 mt-1">
        //                     <h5>Sairaj Cab service</h5>
        //                     <div class="d-flex flex-row">
        //                         <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
        //                     </div>
        //                     <div class="mt-1 mb-2 spec-1 mt-2 "><span ><i class="fa-solid fa-location-dot px-1"></i>By Pass Station Road Aurangabad, Aurangabad-Maharashtra</span></div>
        //                     <div class="mt-1 mb-2s spec-1"><span> <i class="fa-solid fa-money-bill-transfer px-1"></i> Price Available</span></div>

        //                 </div>
        //                 <div class="align-items-center align-content-center col-md-3 border-left mt-1">
        //                     <div class="d-flex flex-column mt-4">
        //                         <button class="btn btn-primary btn-lg" type="button">Contact US</button>
        //                         <button class="btn btn-outline-primary btn-lg mt-2" type="button">Send Enquary</button>
        //                         <button class="btn btn-success btn-lg mx-2" type="button"><i class="fa-brands fa-whatsapp px-1"></i>Whatsapp</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* <div class=" w-50 mt-3">
        //         <div class="">

        //             <div class="col-lg-2 col-4 w-100 mx-4">
        //                 <div class="card">
        //                     <div class="card-body">

        //                         <h5 class="card-title">Contact Number</h5>
        //                         <p class="card-text"><i class="fa-solid fa-phone px-1"></i>+1 234 567 890</p>

        //                         <h5 class="card-title pt-2">Address</h5>
        //                         <p class="card-text"><i class="fa-solid fa-location-dot px-1"></i>Mohammadi Chowk, Beed By Pass Road, Station Road Aurangabad, Aurangabad-Maharashtra - 431005 (Silk Mill Colony , Behind Janta Kirana)</p>

        //                         <h5 class="card-title pt-2">Information</h5>
        //                         <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo vel justo tincidunt tincidunt.</p>

        //                         <div class="d-flex pt-2">
        //                             <h5 class="card-title"><i class="fa-solid fa-diamond-turn-right"></i>Get Location</h5>
        //                             <h5 class="card-title px-5"><i class="fa-solid fa-copy px-1"></i>Copy</h5>
        //                         </div>

        //                         <h5 class="card-title pt-3"><i class="fa-regular fa-clock px-1"></i>Open 25 Hour</h5>

        //                         <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Send Enquary By Email</h5>


        //                         <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>


        //                         <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>

        //                         <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> */}
        //     </div>


        //     <div>
        //         <h2 class="service-heading pb-4 pt-4 text-center">More Information</h2>
        //     </div>
        //     <div class="card-group">
        //         <div class="card-container">

        //             <div class="card-info">
        //                 <h3>Car on Rent - Airport Transfer</h3>
        //                 <p>Car on rent for airport transfer services provide...</p>
        //                 <div class="price">₹11 onwards / km</div>
        //                 <button>View Details</button>
        //             </div>


        //             <div class="card-info">
        //                 <h3>Car on Rent - One Way</h3>
        //                 <p>One way car rental services allow customers to rent a...</p>
        //                 <div class="price">₹11 onwards / km</div>
        //                 <button>View Details</button>
        //             </div>


        //             <div class="card-info">
        //                 <h3>Car on Rent - Local</h3>
        //                 <p>Local car rental services provide residents and visitors...</p>
        //                 <div class="price">₹11 onwards / km</div>
        //                 <button>View Details</button>
        //             </div>
        //         </div>

        //     </div>


        //     <div>
        //         <h2 class="service-heading text-center pb-4 pt-4">Photos</h2>
        //     </div>
        //     {<div class="d-flex">
        //         <div class="col-md-3 col-4 pt-2">
        //             <div class="card card-effect p-0 h-100">
        //                 <div class="card-img rounded-0">
        //                     <div class="img-hover">
        //                         <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col-md-3 col-4 pt-2">
        //             <div class="card card-effect p-0 h-100">
        //                 <div class="card-img rounded-0">
        //                     <div class="img-hover">
        //                         <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div class="col-md-3 col-4 pt-2">
        //             <div class="card card-effect p-0 h-100">
        //                 <div class="card-img rounded-0">
        //                     <div class="img-hover">
        //                         <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div class="col-md-3 pt-2">
        //             <div class="card card-effect p-0 h-100">
        //                 <div class="card-img rounded-0">
        //                     <div class="img-hover">
        //                         <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>}


        // </div>

            export default Detail
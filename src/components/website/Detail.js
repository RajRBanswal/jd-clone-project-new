import React from 'react'

const Detail = () => {
    return (

        <div>

        <div class="d-flex mx-5 pt-5">
            <div class="col-lg-10 col-10">
                <div class=" row p-2 bg-white border rounded mt-3 pb-5 ">
                    <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/swift.jpg" /></div>
                    <div class="col-md-6 mt-1">
                        <h5>Sairaj Cab service</h5>
                        <div class="d-flex flex-row">
                            <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                        </div>
                        <div class="mt-1 mb-2 spec-1 mt-2 "><span ><i class="fa-solid fa-location-dot px-1"></i>By Pass Station Road Aurangabad, Aurangabad-Maharashtra</span></div>
                        <div class="mt-1 mb-2s spec-1"><span> <i class="fa-solid fa-money-bill-transfer px-1"></i> Price Available</span></div>

                    </div>
                    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Contact US</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Send Enquary</button><button class="btn btn-success btn-sm mt-2" type="button"><i class="fa-brands fa-whatsapp px-1"></i>Whatsapp</button></div>
                    </div>
                </div>
                <div>
                    <h2 class="service-heading px-4 pb-4 pt-4">Photos</h2>
                </div>

                {/* <div class="d-flex">
                <div class="col-md-3 pt-2">
                    <div class="card card-effect p-0 h-100">
                        <div class="card-img rounded-0">
                            <div class="img-hover">
                                <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 pt-2">
                    <div class="card card-effect p-0 h-100">
                        <div class="card-img rounded-0">
                            <div class="img-hover">
                                <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 pt-2">
                    <div class="card card-effect p-0 h-100">
                        <div class="card-img rounded-0">
                            <div class="img-hover">
                                <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 pt-2">
                    <div class="card card-effect p-0 h-100">
                        <div class="card-img rounded-0">
                            <div class="img-hover">
                                <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                </div> */}

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active">
                            <div class="row justify-content-center">

                                <div class="col-lg-3   mb-4">
                                    <div class="card">
                                        <img src="/assets/images/aura.jpg" class="card-img-top" alt="..." />

                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                                    <div class="card-2">
                                        <img src="/assets/images/aura.jpg" class="card-img-top" alt="..." />

                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                                    <div class="card-3">
                                        <img src="/assets/images/aura.jpg" class="card-img-top" alt="..." />

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="carousel-item">
                            <div class="row justify-content-center">

                                <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                                    <div class="card-4">
                                        <img src="/assets/images/aura.jpg" class="card-img-top" alt="..." />

                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                                    <div class="card-5">
                                        <img src="/assets/images/aura.jpg" class="card-img-top" alt="..." />

                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                                    <div class="card-6">
                                        <img src="/assets/images/aura.jpg" class="card-img-top" alt="..." />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class=" w-100 mt-3">
                <div class="">

                    <div class="col-lg-3 w-100 mx-4">
                        <div class="card">
                            <div class="card-body">

                                <h5 class="card-title">Contact Number</h5>
                                <p class="card-text"><i class="fa-solid fa-phone px-1"></i>+1 234 567 890</p>

                                <h5 class="card-title pt-2">Address</h5>
                                <p class="card-text"><i class="fa-solid fa-location-dot px-1"></i>Mohammadi Chowk, Beed By Pass Road, Station Road Aurangabad, Aurangabad-Maharashtra - 431005 (Silk Mill Colony , Behind Janta Kirana)</p>

                                <h5 class="card-title pt-2">Information</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo vel justo tincidunt tincidunt.</p>

                                <div class="d-flex pt-2">
                                    <h5 class="card-title"><i class="fa-solid fa-diamond-turn-right"></i>Get Location</h5>
                                    <h5 class="card-title px-5"><i class="fa-solid fa-copy px-1"></i>Copy</h5>
                                </div>

                                <h5 class="card-title pt-3"><i class="fa-regular fa-clock px-1"></i>Open 25 Hour</h5>

                                <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Send Enquary By Email</h5>


                                <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>


                                <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>

                                <h5 class="card-title pt-3"><i class="fa-solid fa-envelope px-1"></i>Get info via SMS/Email</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         

        <div>
                    <h2 class="service-heading pb-4 pt-4 px-5">Price List</h2>
                </div>

        <div class=" text-center ">
    <div class="row">
      
       
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Happy Holidays!</h5>
            <p class="card-text">Wishing you a season filled with joy, peace, and love. May the new year bring you happiness and success!</p>
          </div>
        </div>
      </div>

       
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Thinking of You</h5>
            <p class="card-text">Just a little note to let you know you’re in my thoughts. Wishing you all the best today and always.</p>
          </div>
        </div>
      </div>

       
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Congratulations!</h5>
            <p class="card-text">Celebrating your amazing achievement! May this be the first of many more to come. Well done!</p>
          </div>
        </div>
      </div>

       
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Thank You!</h5>
            <p class="card-text">Your kindness and generosity mean so much. Thank you for being such a wonderful person.</p>
          </div>
        </div>
      </div>

       
       

    </div>
  </div>
        </div>

    )
}

export default Detail
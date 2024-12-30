import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Listings = () => {
  const route = useParams();
  console.log(route);

  return (


    <div>



      <section class=" d-flex pt-1 flex-wrap overflow-scroll flex-nowrap justify-content-center">


        <div class="location-bar col-lg-10 col-12">
          
          <div class="location-options">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn btn-primary dropdown-toggle text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn  btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn   dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <button class="btn  btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
             
          </div>
        </div>



      </section>



      <div class=" container mt-2 mb-5 ">
        <div class="d-flex  row">
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
            <Link to='/keyword'>   <div class="row p-2 bg-white border rounded mt-3 pb-5">
              <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/verna.jpg" /></div>
              <div class="col-md-6 mt-1">
                <h5>Sairaj Cab service</h5>
                <div class="d-flex flex-row">
                  <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                </div>
                <div class="mt-1 mb-2 spec-1 mt-2 text-dark "><span ><i class="fa-solid fa-location-dot px-1"></i>By Pass Station Road Aurangabad, Aurangabad-Maharashtra</span></div>
                <div class="mt-1 mb-2s spec-1 text-dark"><span> <i class="fa-solid fa-money-bill-transfer px-1"></i> Price Available</span></div>

                        <button class="btn btn-primary btn-lg mt-4 " type="button">Book Now</button>
                        <button class="btn btn-primary btn-lg mt-4 mx-4 " type="button"><i class="fa-solid fa-phone mx-1"></i>91+9656565654</button>


              </div>
              <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-lg" type="button">Contact US</button><button class="btn btn-outline-primary btn-lg mt-2" type="button">Send Enquary</button><button class="btn btn-success btn-lg mt-2" type="button"><i class="fa-brands fa-whatsapp px-1"></i>Whatsapp</button></div>
              </div>
            </div>

            </Link>

            <section class=" d-flex pt-1 flex-wrap overflow-scroll flex-nowrap justify-content-center">


              <div class="location-bar col-lg-10 col-12">
                <div class="icon">📍</div>
                <h4 class="col-4">Find Results near you</h4>
                <div class="location-options">
                  <button class="highlight">Use Precise Location</button>
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
            <div class="row p-2 bg-white border rounded mt-3 pb-5">
              <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/swift.jpg" /></div>
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
            <div class="row p-2 bg-white border rounded mt-3 pb-5">
              <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/scorpio.jpg" /></div>
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
        </div>
      </div>

    </div>







  )

}

export default Listings
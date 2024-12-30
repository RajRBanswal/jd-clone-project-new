import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Listings = () => {
  const route = useParams();
  console.log(route);

  return (


    <div>



      <section class=" d-flex pt-1 flex-wrap overflow-scroll flex-nowrap justify-content-center">

        <div class="location-bar col-lg-7 col-12">

          <div class="location-options">


            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Sort-By
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Relevance</a></li>
              <li><a class="dropdown-item" href="#">Rating</a></li>
              <li><a class="dropdown-item" href="#">Popular</a></li>
              <li><a class="dropdown-item" href="#">Distance</a></li>
              <li><a class="dropdown-item" href="#"> </a></li>
            </ul>
            <button class="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <a class="text-light" href=""> <i class="fa-solid fa-star"></i> Top Rated</a>
            </button>
            
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Brand
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Toyota</a></li>
              <li><a class="dropdown-item" href="#">Honda</a></li>
              <li><a class="dropdown-item" href="#">Tata</a></li>
              <li><a class="dropdown-item" href="#">Maruti Suzuki</a></li>
              <li><a class="dropdown-item" href="#">Mahindra</a></li>
              <li><a class="dropdown-item" href="#">Force</a></li>
              <li><a class="dropdown-item" href="#">Hyundai</a></li>
              <li><a class="dropdown-item" href="#">Ford</a></li>
              <li><a class="dropdown-item" href="#">BMW</a></li>
              <li><a class="dropdown-item" href="#">mercedes</a></li>
              <li><a class="dropdown-item" href="#">Audi</a></li>
              <li><a class="dropdown-item" href="#">Scoda</a></li>
              <li><a class="dropdown-item" href="#">Nissan</a></li>
              <li><a class="dropdown-item" href="#">Volkswogen</a></li>
              <li><a class="dropdown-item" href="#">Jaguar</a></li>
              <li><a class="dropdown-item" href="#">Range Rover</a></li>
              <li><a class="dropdown-item" href="#">Porsche</a></li>
            </ul>
            <button class="btn btn-primary dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Segment
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Hatchback</a></li>
              <li><a class="dropdown-item" href="#">Sedan</a></li>
              <li><a class="dropdown-item" href="#">SUV</a></li>
              <li><a class="dropdown-item" href="#">Compact SUV</a></li>
              <li><a class="dropdown-item" href="#">MUV</a></li>
              <li><a class="dropdown-item" href="#">Van</a></li>
              <li><a class="dropdown-item" href="#">Tempo Traveller</a></li>
               
            </ul>
            <button class="btn  btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Seating Capacity
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">4seater</a></li>
              <li><a class="dropdown-item" href="#">5seater</a></li>
              <li><a class="dropdown-item" href="#">7seater</a></li>
            </ul>
            <button class="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Rental type
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Wedding</a></li>
              <li><a class="dropdown-item" href="#">Vintage Car</a></li>
              <li><a class="dropdown-item" href="#">Corporate</a></li>
              <li><a class="dropdown-item" href="#">Luxury</a></li>
              <li><a class="dropdown-item" href="#">Outstation</a></li>
            </ul>
            <button class="btn  btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Rating
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Any</a></li>
              <li><a class="dropdown-item" href="#">3.5+</a></li>
              <li><a class="dropdown-item" href="#">4.0+</a></li>
              <li><a class="dropdown-item" href="#">4.5+</a></li>
              <li><a class="dropdown-item" href="#">5.0+</a></li>
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
                        <button class="btn btn-primary btn-lg mt-4 mx-3" type="button"><i class="fa-solid fa-phone mx-1"></i>91+9656565654</button>


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
                        <button class="btn btn-primary btn-lg mt-4 mx-3 " type="button"><i class="fa-solid fa-phone mx-1"></i>91+9656565654</button>


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
                        <button class="btn btn-primary btn-lg mt-4 mx-3" type="button"><i class="fa-solid fa-phone mx-1"></i>91+9656565654</button>


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
                        <button class="btn btn-primary btn-lg mt-4 mx-3" type="button"><i class="fa-solid fa-phone mx-1"></i>91+9656565654</button>


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
import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Listings = () => {
  const route = useParams();
  console.log(route);

  return (


    <div>
      <div class="selectbar ps-3 w-75 pt-0 container pt-4">
        <div class="search-bar bg-light  p-2 px-3 my-2 rounded-3 border border-warning">

          <div className="row">

            <div class="col-6 col-md-4 col-lg-4 ">
              <select class="form-select form-control">
                <option>Select City</option>
                {/* {
                talukas.map((item) => {
                  return <option value={item.taluka_name + '-' + item.district}>{item.taluka_name + ' (' + item.district + ')'}</option>

                })
              } */}
                <option>Drinks</option>
                <option>Chocolates</option>
              </select>
            </div>
            <div class="col-11 col-md-7 col-lg-7 ">
              <input
                type="text"
                class="form-control"
                placeholder="Search for more than 20,000 products"
              // onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div class="col-1 col-lg-1 col-md-1 pt-1 d-flex justify-content-center align-items-center">
              <h4 className="mb-0">
                {/* <i className="fa fa-search" onClick={getSearch}></i> */}
              </h4>
            </div>
          </div>
        </div>
      </div>



      <section class=" d-flex pt-3 flex-wrap overflow-scroll flex-nowrap justify-content-center">
        {/* <div class="dropdown">
          <button class="btn dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn  dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn  dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn  dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn  dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle mx-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div> */}
        {/* <div class="btn-group">
          <button type="button" class="btn text-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Sort By</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>

        <div class="btn-group px-2">
          <button type="button" class="btn text-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Brand
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Brand</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="btn-group px-2">
          <button type="button" class="btn text-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Segment
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Segment</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="btn-group px-2">
          <button type="button" class="btn text-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Seating Capacity
          </button>
          <ul class="dropdown-menu px-2">
            <li><a class="dropdown-item" href="#">Seating Capacity</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button" class="btn text-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Rental type
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Rental type</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>  */}

        <div class="dropdown-container justify-content-center">
          <div class="dropdown">
            <button class="dropdown-button">Option 1</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-button">Option 2</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-button">Option 3</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-button">Option 3</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-button">Option 3</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-button">Option 3</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-button">Option 3</button>
            <div class="dropdown-content">
              <a href="#">Sub-option 1</a>
              <a href="#">Sub-option 2</a>
              <a href="#">Sub-option 3</a>
            </div>
          </div>

        </div>



      </section>


      <div class=" container mt-5 mb-5 ">
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

              </div>
              <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Contact US</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Send Enquary</button><button class="btn btn-success btn-sm mt-2" type="button"><i class="fa-brands fa-whatsapp px-1"></i>Whatsapp</button></div>
              </div>
            </div>
            <Link to='/about'>   <div class="row p-2 bg-white border rounded mt-3 pb-5">
              <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/verna.jpg" /></div>
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

            </Link>
            <div class="row p-2 bg-white border rounded mt-3 pb-5">
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
            <div class="row p-2 bg-white border rounded mt-3 pb-5">
              <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="/assets/images/scorpio.jpg" /></div>
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
          </div>
        </div>
      </div>

    </div>







  )

}

export default Listings
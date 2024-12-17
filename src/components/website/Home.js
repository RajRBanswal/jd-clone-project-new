/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Home = () => {
  return (
    <>
      <div className="container py-3 d-block d-sm-block d-md-none d-lg-none">
        <div class="search-bar bg-light py-4 px-2 my-2 rounded-3 border border-danger">
          <div className="row g-2">
            <div class="col-12 col-lg-12 col-md-12">
              <h3 className="text-center">Search Here</h3>
            </div>
            <div class="col-4 col-lg-4 col-md-4">
              <select class="form-select form-control">
                <option>Select City</option>
                <option>Buldhana</option>
                <option> PUNE</option>
                <option>Chocolates</option>
              </select>
            </div>
            <div class="col-7 col-lg-7 col-md-7">
              <form
                id="search-form"
                class="text-center"
                action="index.html"
                method="post"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for more than 20,000 products"
                />
              </form>
            </div>
            <div class="col-1 col-lg-1 col-md-1 pt-1 d-flex justify-content-center align-items-center">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <section
        class="py-3"
        style={{
          background: `url('./assets/images/background-pattern.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./assets/img/slider1.jpeg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./assets/img/slider2.jpeg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./assets/img/slider3.jpeg" class="d-block w-100" alt="..." />
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
        </section>

      <section class="top-cities container pt-5 pb-5 ">

      <div>
          <h2 class="service-heading text-center">OUR SURVICES</h2>
        </div>

        <table border="1" width="70%" cellspacing="0" cellpadding="0" align="CENTER" >
          <thead align="" bgcolor="#ffc107">
            <tr>
              <th class="top-cities pt-1 pb-1 text-center">Top Cities</th>
              <th>Top cities</th>
              <th>SUV</th>
            </tr>
          </thead>
          <tbody>
            <tr valign="BOTTOM">
              <td>
                <p class="hover-underline-animation" align="CENTER"><a class="text-dark" href="#" target="_blank">Mumbai</a></p>
              </td>
              <td >
                <p align="CENTER"> ₹5461</p>
              </td>
              <td  >
                <p align="CENTER"> ₹8387</p>
              </td>

            </tr>
            <tr valign="BOTTOM">
              <td>
                <p class="hover-underline-animation" align="CENTER"><a class="text-dark" href="#" target="_blank">Pune</a></p>
              </td>
              <td >
                <p align="CENTER"> ₹3919</p>
              </td>
              <td>
                <p align="CENTER"> ₹5022</p>
              </td>

            </tr>
            <tr valign="BOTTOM">
              <td >
                <p class="hover-underline-animation" align="CENTER"><a class="text-dark" href="#" target="_blank">Kolhapur</a></p>
              </td>
              <td >
                <p align="CENTER">Kolhapur</p>
              </td>
              <td>
                <p align="CENTER"> ₹6978</p>
              </td>

            </tr>
            <tr valign="BOTTOM">
              <td  >
                <p class="hover-underline-animation " align="CENTER"><a class="text-dark" href="#"  target="_blank">Nagpur</a></p>
              </td>
              <td >
                <p align="CENTER"> ₹2213</p>
              </td>
              <td >
                <p align="CENTER"> ₹3085</p>
              </td>

            </tr>
            <tr valign="BOTTOM">
              <td>
                <p class="hover-underline-animation"  align="CENTER"><a class="text-dark" href="#" target="_blank">Dhule</a></p>
              </td>
              <td >
                <p align="CENTER"> ₹3236</p>
              </td>
              <td >
                <p align="CENTER"> ₹5014</p>
              </td>

            </tr>
          </tbody>
        </table>
      </section>

{

<section>


<div class="container mb-5">
  <div class="col-12 mt-5">
    <div class="row justify-content-center mb-5">
    <div>
          <h2 class="service-heading text-center">OUR SURVICES</h2>
        </div>
    </div>
  </div>
  <div class="row mb-5  card-effects">
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/swift.jpg" alt="..."/>
                  
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Swift dzier</a>
             </div>
           
               
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/scorpio.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-3">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Scorpio</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/ertiga.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Ertiga</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>

     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/cretaimg.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center pt-3">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Creta</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/crysta.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Crysta</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/verna.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center pt-4">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Verna</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 pt-5 col-6">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/aura.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center pt-3">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Hyundai Aura</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/vitara.webp" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Vitara brezza</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/force.webp" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center pt-4">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Cruiser</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/traveler.png" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Tempo Traveller</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/alto.jpg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Alto</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
     <div class="col-md-2 col-6 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/i20.webp" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">I20</a>
             </div>
             
           </div>
          
         </div>
       </div>
     </div>
  </div>
</div>
</section>
}

      <div class="container mb-5 pt-5 pb-4">
  <div class="col-12 mt-5">
    <div class="row justify-content-center mb-5">
    <div>
          <h2 class="service-heading text-center pb-4">RENTAL-TYPES</h2>
        </div>
    </div>
  </div>
  <div class="row mb-5 card-effects">
     <div class="col-md-3 pt-5">
       <div class="card card-effect p-0 h-100">
         <div class="card-img rounded-0">
           <div class="img-hover">
             <img class="rounded-top img-fluid" 
                  src="./assets/images/wedding.jpeg" alt="..."/>
           </div>
         </div>
         <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
           <div class="pt-6">
             <div class="h4 mb-3 mt-4 text-center">
               <a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">wedding</a>
             </div>
             <p class="text-secondary text-center lh-base">
               Customizable headers, footers, and interactive elements within cards empower you to create 
               engaging and modern web designs.</p>
           </div>
           <div class="text-center">
             <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
               <i class="fa fa-arrow-right icon-arrow before"></i>
               <span class="label fw-normal">Know More!</span>
               <i class="fa fa-arrow-right icon-arrow after"></i>
             </a>
           </div>
         </div>
       </div>
     </div>
    <div class="col-md-3 pt-5">
      <div class="card card-effect p-0 h-100">
        <div class="card-img rounded-0">
          <div class="img-hover">
            <img class="rounded-top img-fluid " src="./assets/images/vintageimg.webp" alt="..." />
          </div>
        </div>
        <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
          <div class="pt-6">
            <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Vintage Car</a></div>
            <p class="text-secondary text-center ">Effortlessly stylish and responsive, Bootstrap 5 cards adapt beautifully to diverse screen sizes, enhancing user experience.</p>
          </div>
           <div class="text-center">
             <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
               <i class="fa fa-arrow-right icon-arrow before"></i>
               <span class="label fw-normal">Know More!</span>
               <i class="fa fa-arrow-right icon-arrow after"></i>
             </a>
           </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 pt-5">
      <div class="card card-effect p-0 h-100">
        <div class="card-img rounded-0">
          <div class="img-hover">
            <img class="rounded-top img-fluid" src="./assets/images/townimg.jpg" alt="..."/>
          </div>
        </div>
        <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
          <div class="pt-6">
            <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">Outstation</a></div>
            <p class="text-secondary text-center">Bootstrap 5 cards revolutionize content presentation, offering sleek containers for your information and visuals</p>
          </div>
           <div class="text-center">
             <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
               <i class="fa fa-arrow-right icon-arrow before"></i>
               <span class="label fw-normal">Know More!</span>
               <i class="fa fa-arrow-right icon-arrow after"></i>
             </a>
           </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 pt-5" >
      <div class="card card-effect p-0 h-100">
        <div class="card-img rounded-0">
          <div class="img-hover">
            <img class="rounded-top img-fluid" src="./assets/images/luxury.png" alt="..."/>
          </div>
        </div>
        <div class="card-body position-relative pt-0 px-1-9 pb-1-9">
          <div class="pt-6">
            <div class="h4 mb-3 mt-4 text-center"><a class="text-decoration-none fw-bolder text-uppercase text-tb-lines" href="#/">luxury cars</a></div>
            <p class="text-secondary text-center">Bootstrap 5 cards revolutionize content presentation, offering sleek containers for your information and visuals</p>
          </div>
           <div class="text-center">
             <a href="/#" class="btn d-block btn-primary py-3 fs-5 card-btn md">
               <i class="fa fa-arrow-right icon-arrow before"></i>
               <span class="label fw-normal">Know More!</span>
               <i class="fa fa-arrow-right icon-arrow after"></i>
             </a>
           </div>
        </div>
      </div>
    </div>
  </div>
</div>
 




      
    

    </>
    
  );
};

export default Home;

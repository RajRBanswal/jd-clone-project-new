import React from 'react'
import { useState, setFields, fields } from 'react';

const AddListing = () => {

    const [title, settitle] = useState("")
    const [mobile_number, setmobile_number] = useState("")
    const [whatsapp_number, setwhatsapp_number] = useState("")
    const [location, setlocation] = useState("")
    const [opening_hour, setopening_hour] = useState("")
    const [year_of_experience, setyears_of_experience] = useState("")
    const [uplod_images, setupload_images] = useState("")
    // const [price_listing, setprice_listing] = useState("")
    // const [segment, setsegment] = useState("")
    // const [packages_offered, setpackage_offered] = useState("")
    // const [seating_capacity, setseating_capacity] = useState("")
    // const [services, setservices] = useState("")
    // const [rental_type, setrental_type] = useState("")
    // const [brands, setbrands] = useState("")

    const AddListing = async () => {
        const response = await fetch("http://localhost:8000/api/vendor/add-listing  ", {
            method: "POST",
            body: JSON.stringify({
                title,
                mobile_number,
                whatsapp_number,
                location,
                opening_hour,
                year_of_experience,
                uplod_images,
                // price_listing,
                // segment,
                // packages_offered,
                // seating_capacity,
                // services,
                // rental_type,
                // brands,
            }),
            headers: {
                "Content-Type": "application/json"
            },
            
        })

        const result = await response.json();
        console.log(result);

        if (result.status === 200) {
            alert(result.message);

        } else {
            alert(result.message);
        }

    }

    // Add a new field dynamically
    const addField = () => {
        setFields([
            ...fields,
            { id: Date.now(), name: '' }, // Add new field with unique ID
        ]);
    };

    // Handle input change for dynamic fields
    const handleInputChange = (id, value) => {
        setFields(
            fields.map((field) =>
                field.id === id ? { ...field, name: value } : field
            )
        );
    };

    // Remove a specific field
    const removeField = (id) => {
        setFields(fields.filter((field) => field.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add New Listing</h2>
            <form submit>
                {/* Title */}

                <div class="row">
                    <div className="mb-3 col-lg-6 col-12">
                        <label htmlFor="title" className="form-label" >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            //   value={formData.title}
                            //   onChange={handleChange}

                            onChange={(e) => settitle(e.target.value)} required
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-3 col-lg-3 col-12">
                        <label htmlFor="mobile" className="form-label">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            className="form-control"
                            //   value={formData.mobile}
                            //   onChange={handleChange}
                            onChange={(e) => setmobile_number(e.target.value)} required
                        />
                    </div>

                    {/* WhatsApp */}
                    <div className="mb-3 col-lg-3 col-12">
                        <label htmlFor="whatsapp" className="form-label">
                            WhatsApp Number
                        </label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            className="form-control"
                            //   value={formData.whatsapp}
                            //   onChange={handleChange}
                            onChange={(e) => setwhatsapp_number(e.target.value)}
                        />
                    </div>

                </div>

                {/* Location */}
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-control"
                        //   value={formData.location}
                        //   onChange={handleChange}
                        onChange={(e) => setlocation(e.target.value)} required
                    />
                </div>

                {/* Opening Hour */}
                <div class="row">
                    <div className="mb-3 col-lg-3 col-12">
                        <label htmlFor="openingHour" className="form-label">
                            Opening Hour
                        </label>
                        <input
                            type="time"
                            id="openingHour"
                            name="openingHour"
                            className="form-control"
                            //   value={formData.openingHour}
                            //   onChange={handleChange}
                            onChange={(e) => setopening_hour(e.target.value)} required
                        />
                    </div>

                    {/* Year of Experience */}
                    <div className="mb-3 col-lg-3 col-12">
                        <label htmlFor="experience" className="form-label">
                            Years of Experience
                        </label>
                        <input
                            type="number"
                            id="experience"
                            name="experience"
                            className="form-control"
                            //   value={formData.experience}
                            //   onChange={handleChange}
                            onChange={(e) => setyears_of_experience(e.target.value)} required
                        />
                    </div>
                    {/* {upload images} */}
                    <div className="mb-3 col-lg-6 col-12 ">
                        <label htmlFor="images" className="form-label">
                            Upload Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            className="form-control"
                            // onChange={handleFileChange}
                            multiple
                            onChange={(e) => setupload_images(e.target.value)}
                        />
                    </div>
                </div>

                {/* Price Listing */}
                <h4>Price listing </h4>
                <div className="container mt-3">
                    <div>
                        {/* {fixed Added Fields} */}

                        <div className="fixed-first-row">
                            <div className="mb-2">
                                <div className="input-group">


                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Enter Price Title"


                                    />
                                    <input
                                        type="text"
                                        className="form-control mb-2 ms-3"
                                        placeholder="Enter Price"

                                    />
                                    <input
                                        type='text'
                                        className="form-control mb-2 ms-3"
                                        placeholder="Enter Price Description"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-secondary ms-3"
                                        onClick={addField}
                                    >
                                        Add Field
                                    </button>

                                    {/* onChange={(e) => setprice_listing(e.target.value)} */}

                                </div>

                            </div>

                        </div>


                        {/* Dynamically Added Fields */}

                        {fields && fields.map((field) => (
                            <div key={field.id} className="mb-3">
                                <div className="input-group">
                                    {/* Price Title */}
                                    <input
                                        type="text"
                                        value={field.priceTitle}
                                        className="form-control mb-2"
                                        placeholder="Enter Price Title"
                                        onChange={(e) =>
                                            handleInputChange(field.id, 'priceTitle', e.target.value)
                                        }
                                    />

                                    {/* Price */}
                                    <input
                                        type="text"
                                        value={field.price}
                                        className="form-control mb-2 ms-3"
                                        placeholder="Enter Price"
                                        onChange={(e) =>
                                            handleInputChange(field.id, 'price', e.target.value)
                                        }
                                    />

                                    {/* Price Description */}
                                    <input
                                        type='text'
                                        value={field.priceDescription}
                                        className="form-control mb-2 ms-3"
                                        placeholder="Enter Price Description"
                                        onChange={(e) =>
                                            handleInputChange(field.id, 'priceDescription', e.target.value)
                                        }
                                    />

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        className="btn btn-danger ms-3 btn-sm"
                                        onClick={() => removeField(field.id)}
                                    >
                                        Remove Fields
                                    </button>
                                    {/* onChange={(e) => setprice_listing(e.target.value)} */}
                                </div>
                            </div>
                        ))}



                    </div>

                </div>



                {/* {highlites} */}
                <h4>Highlights from the business</h4>
                <div class="container">
                    <div class="mb-4">
                        <h5 class="text-primary"><b>Segment</b></h5>
                        <div class="row g-3">
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Compact SUV" id="Compact SUV" />
                                    <label class="form-check-label" for="Compact SUV">
                                        Compact SUV
                                    </label>
                                </div>

                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Sedan" id="Sedan" />
                                    <label class="form-check-label" for="Sedan">
                                        Sedan
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="SUV" id="SUV" />
                                    <label class="form-check-label" for="SUV">
                                        SUV
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Hatchback" id="Hatchback" />
                                    <label class="form-check-label" for="Hatchback">
                                        Hatchback
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Van" id="Van" />
                                    <label class="form-check-label" for="Van">
                                        Van
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value=" MUV" id=" MUV" />
                                    <label class="form-check-label" for=" MUV">
                                        MUV
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* onChange={(e) => setsegment(e.target.value)} */}
                    </div>

                    <div class="mb-4">
                        <h5 class="text-primary"><b>Packages Offered</b></h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Domestic" id="Domestic" />
                            <label class="form-check-label" for="Domestic">
                                Domestic
                            </label>
                        </div>
                        {/* onChange={(e) => setpackage_offered(e.target.value)} */}
                    </div>

                    <div class="mb-4">
                        <h5 class="text-primary"><b>Seating Capacity</b></h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Tempo Traveller" id="Tempo Traveller" />
                            <label class="form-check-label" for="Tempo Traveller">
                                Tempo Traveller
                            </label>
                        </div>
                        {/* onChange={(e) => setseating_capacity(e.target.value)} */}
                    </div>

                    <div class="mb-4">
                        <h5 class="text-primary"><b>Services</b></h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Tempos On Rent For All India" id="a" />
                            <label class="form-check-label" for="a">
                                Tempos On Rent For All India
                            </label>
                        </div>
                        {/* onChange={(e) => setservices(e.target.value)} */}


                    </div>

                    <div class="mb-4">
                        <h5 class="text-primary"><b>Rental Type</b></h5>
                        <div class="row g-3">
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Luxury" id="Luxury" />
                                    <label class="form-check-label" for="Luxury">
                                        Luxury
                                    </label>
                                </div>

                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Wedding" id="Wedding" />
                                    <label class="form-check-label" for="Wedding">
                                        Wedding
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Corporate" id="Corporate" />
                                    <label class="form-check-label" for="Corporate">
                                        Corporate
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* onChange={(e) => setrental_type(e.target.value)} */}
                    </div>

                    <div class="mb-4 border-dark">
                        <h5 class="text-primary"><b>Brands</b> </h5>
                        <div class="row g-3">
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Nissan" id="Nissan" />
                                    <label class="form-check-label" for="Nissan">
                                        Nissan
                                    </label>
                                </div>

                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Maruti Suzuki" id="Maruti Suzuki" />
                                    <label class="form-check-label" for="Maruti Suzuki">
                                        Maruti Suzuki
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Force" id="Force" />
                                    <label class="form-check-label" for="Force">
                                        Force
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Volkswagen" id="Volkswagen" />
                                    <label class="form-check-label" for="Volkswagen">
                                        Volkswagen
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Ford" id="Ford" />
                                    <label class="form-check-label" for="Ford">
                                        Ford
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Tata" id="Tata" />
                                    <label class="form-check-label" for="Tata">
                                        Tata
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Skoda" id="Skoda" />
                                    <label class="form-check-label" for="Skoda">
                                        Skoda
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="BMW" id="BMW" />
                                    <label class="form-check-label" for="BMW">
                                        BMW
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Honda" id="Honda" />
                                    <label class="form-check-label" for="Honda">
                                        Honda
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Toyota" id="Toyota" />
                                    <label class="form-check-label" for="Toyota">
                                        Toyota
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Hyundai" id="Hyundai" />
                                    <label class="form-check-label" for="Hyundai">
                                        Hyundai
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Limousine" id="Limousine" />
                                    <label class="form-check-label" for="Limousine">
                                        Limousine
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Audi" id="Audi" />
                                    <label class="form-check-label" for="Audi">
                                        Audi
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Mahindra" id="Mahindra" />
                                    <label class="form-check-label" for="Mahindra">
                                        Mahindra
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Mercedes" id="Mercedes" />
                                    <label class="form-check-label" for="Mercedes">
                                        Mercedes
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="Chevrolet" id="Chevrolet" />
                                    <label class="form-check-label" for="Chevrolet">
                                        Chevrolet
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* onChange={(e) => setbrands(e.target.value)} */}
                    </div>
                </div>

                <button type="button" onClick={AddListing} className="btn btn-primary">
                    Add Listing
                </button>
            </form >
        </div >



    )
}

export default AddListing
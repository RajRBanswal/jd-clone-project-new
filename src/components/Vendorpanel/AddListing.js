import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

import { Toolbar } from "primereact/toolbar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { api_url } from "../helpers/api_helper";

const AddListing = () => {
  const [allListing, setAllListing] = useState("");
  const [selectedListing, setSelectedListing] = useState(null);
  const [allCategory, setAllCategory] = useState("");
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsappMobile, setWhatsappMobile] = useState("");
  const [location, setLocation] = useState("");
  const [openingHour, setOpeningHour] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [uplodImages, setUploadImages] = useState("");
  const [uplodVideo, setUplodVideo] = useState("");

  const [segment, setSegment] = useState("");
  const [packagesOffered, setPackageOffered] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [services, setServices] = useState("");
  const [rentalType, setRentalType] = useState("");
  const [cabSeaterCapacity, setCabSeaterCapacity] = useState("");
  const [brands, setBrands] = useState("");
  let vendorId = sessionStorage.getItem("vendorId");
  let vendorName = sessionStorage.getItem("vendorName");

  const getListing = async () => {
    const response = await fetch(`${api_url}/api/admin/all-listing`);
    const result = await response.json();
    if (result.status === 201) {
      setAllListing(result.data);
    } else {
      alert(result.message);
    }
  };
  useEffect(() => {
    getListing();
  }, [reload]);

  const [talukas, setTalukas] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectedTalukas, setSelectedTalukas] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [taluka, setTaluka] = useState("");

  const getAllTalukas = async () => {
    const res = await fetch(`${api_url}/api/admin/all-talukas`);
    const result = await res.json();
    if (result.status === 201) {
      setTalukas(result.result);

      // Extract unique districts
      const uniqueDistricts = [
        ...new Set(result.result.map((item) => item.district)),
      ];
      setDistrict(uniqueDistricts);
    } else {
      setTalukas([]);
    }
  };

  const getCategories = async () => {
    const response = await fetch(`${api_url}/api/admin/get-category`);
    const result = await response.json();
    if (result.status === 201) {
      setAllCategory(result.data);
    } else {
      alert(result.message);
    }
  };
  useEffect(() => {
    getAllTalukas();
    getCategories();
  }, []);

  const AddListing = async () => {
    if (!category || !title || !uplodImages) {
    } else {
      const formData = new FormData();
      formData.append("vendorName", vendorName);
      formData.append("vendorId", vendorId);
      formData.append("category", category);
      formData.append("title", title);
      formData.append("mobile", mobile);
      formData.append("whatsappMobile", whatsappMobile);
      formData.append("taluka", taluka);
      formData.append("selectedDistrict", selectedDistrict);
      formData.append("location", location);
      formData.append("openingHour", openingHour);
      formData.append("yearOfExperience", yearOfExperience);

      Object.values(uplodImages).forEach((file) => {
        formData.append("uplodImages", file);
      });
      Object.values(uplodVideo).forEach((file) => {
        formData.append("uplodVideo", file);
      });
      Object.values(fields).forEach((item) => {
        if (item.title === "" || item.price === "") {
        } else {
          formData.append("priceList", JSON.stringify(item));
        }
      });
      // Append checkbox selections as comma-separated strings or as arrays
      formData.append("segment", segment.join(",")); // Convert array to comma-separated string
      formData.append("packagesOffered", packagesOffered.join(","));
      formData.append("seatingCapacity", seatingCapacity.join(","));
      formData.append("services", services.join(","));
      formData.append("rentalType", rentalType.join(","));
      formData.append("cabSeaterCapacity", cabSeaterCapacity.join(","));
      formData.append("brands", brands.join(","));

      const response = await fetch(`${api_url}/api/vendor/add-listing`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.status === 201) {
        setReload(true);
        alert(result.message);
        setOpenDialog(false);
        window.location.reload();
      } else {
        alert(result.message);
      }
    }
  };

  const [fields, setFields] = useState([
    {
      id: Date.now(),
      priceTitle: "",
      price: "",
      pricePer: "",
      priceDescription: "",
      vehicleType: "",
      ageRequired: "",
      other: "",
    },
  ]);
  console.log(fields);

  const handleInputChange = (id, key, value) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    );
  };

  const addField = () => {
    setFields([
      ...fields,
      {
        id: Date.now(),
        priceTitle: "",
        price: "",
        pricePer: "",
        priceDescription: "",
        vehicleType: "",
        ageRequired: "",
        other: "",
      },
    ]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const openNew = () => {
    setOpenDialog(true);
  };

  const hideDialog = () => {
    setOpenDialog(false);
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`${api_url}/uploads/${rowData.uplodImages[0]}`}
        alt={rowData.uplodImages[0]}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };
  const deleteData = async (id) => {
    const response = await fetch(`${api_url}/api/vendor/delete-listing`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === 201) {
      setReload(true);
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <button
        type="button"
        onClick={() => deleteData(rowData._id)}
        className="btn btn-outline-danger"
      >
        <i className="fa fa-trash"></i>
      </button>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Listing</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </IconField>
      <Button
        label="New"
        icon="pi pi-plus"
        severity="success"
        onClick={openNew}
        className="btn-sm"
      />
    </div>
  );
  const openDialogFooter = (
    <React.Fragment>
      <Button
        label="Save"
        icon="pi pi-check"
        className="ms-3 btn-sm "
        onClick={AddListing}
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        outlined
        className="ms-3 btn-sm btn-danger"
        onClick={hideDialog}
      />
    </React.Fragment>
  );

  const handleSegmentCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSegment(
      (prevSegment) =>
        checked
          ? [...prevSegment, value] // Add to array if checked
          : prevSegment.filter((item) => item !== value) // Remove if unchecked
    );
  };

  const handleRentalTypeCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setRentalType(
      (prevSegment) =>
        checked
          ? [...prevSegment, value] // Add to array if checked
          : prevSegment.filter((item) => item !== value) // Remove if unchecked
    );
  };
  const handleSeaterCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setCabSeaterCapacity(
      (prevSegment) =>
        checked
          ? [...prevSegment, value] // Add to array if checked
          : prevSegment.filter((item) => item !== value) // Remove if unchecked
    );
  };
  const handleBrandsCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setBrands(
      (prevBrands) =>
        checked
          ? [...prevBrands, value] // Add brand if checked
          : prevBrands.filter((brand) => brand !== value) // Remove brand if unchecked
    );
  };

  const carBrands = [
    "Nissan",
    "Maruti Suzuki",
    "Force",
    "Volkswagen",
    "Ford",
    "Tata",
    "Skoda",
    "BMW",
    "Honda",
    "Toyota",
    "Hyundai",
    "Limousine",
    "Audi",
    "Mahindra",
    "Mercedes",
    "Chevrolet",
  ];
  const handleOtherCheckboxChange = (value, category) => {
    if (category === "packagesOffered") {
      setPackageOffered((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    } else if (category === "seatingCapacity") {
      setSeatingCapacity((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    } else if (category === "services") {
      setServices((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  const categoryBodyTemplate = (rowData) => {
    let cate = JSON.parse(rowData.category);
    return cate.categoryName;
  };

  const getDistrictTalukas = (dist) => {
    setSelectedDistrict(dist);
    const tal = talukas?.filter((item) => item.district === dist);
    setSelectedTalukas(tal);
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <DataTable
          ref={dt}
          value={allListing}
          selection={selectedListing}
          onSelectionChange={(e) => setSelectedListing(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Listing"
          globalFilter={globalFilter}
          header={header}
        >
          <Column
            field="category"
            header="Category"
            body={categoryBodyTemplate}
          ></Column>
          <Column field="title" header="Title" sortable></Column>
          <Column field="mobile" header="Mobile" sortable></Column>
          <Column field="location" header="Location" sortable></Column>
          <Column
            field="image"
            header="Image"
            body={imageBodyTemplate}
          ></Column>
          <Column field="status" header="Status" sortable></Column>
          <Column body={actionBodyTemplate} exportable={false}></Column>
        </DataTable>
      </div>

      <Dialog
        visible={openDialog}
        style={{ width: "80%" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Add New Listing"
        modal
        className="p-fluid"
        footer={openDialogFooter}
        onHide={hideDialog}
      >
        <div className="row g-2 mt-3">
          <div className="col-lg-2">
            <label className="form-label">Category</label>
            <select
              className="form-control fonm-select form-control-sm"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={""}>Select One</option>
              {allCategory &&
                allCategory.map((item) => (
                  <option value={JSON.stringify(item)}>
                    {item.categoryName}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-lg-4">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control form-control-sm"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-lg-2">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              className="form-control form-control-sm"
              placeholder="Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="col-lg-2">
            <small className="form-label">WhatsApp Number</small>
            <input
              type="tel"
              name="whatsapp"
              className="form-control mt-2 form-control-sm"
              placeholder="Whatsapp Number"
              onChange={(e) => setWhatsappMobile(e.target.value)}
            />
          </div>
          <div className=" col-lg-2">
            <label className="form-label">Opening Hour</label>
            <input
              type="time"
              name="openingHour"
              className="form-control form-control-sm"
              placeholder="Opening Hour"
              onChange={(e) => setOpeningHour(e.target.value)}
            />
          </div>
        </div>
        <div className="row g-2 mt-1">
          <div className="col-lg-2">
            <label className="form-label">District</label>
            <select
              className="form-control fonm-select form-control-sm"
              onChange={(e) => getDistrictTalukas(e.target.value)}
            >
              <option value={""}>Select One</option>
              {district &&
                district.map((item) => <option value={item}>{item}</option>)}
            </select>
          </div>
          <div className="col-lg-2">
            <label className="form-label">City</label>
            <select
              className="form-control fonm-select form-control-sm"
              onChange={(e) => setTaluka(e.target.value)}
            >
              <option value={""}>Select One</option>
              {selectedTalukas &&
                selectedTalukas.map((item) => (
                  <option value={item.taluka_name}>{item.taluka_name}</option>
                ))}
            </select>
          </div>
          <div className=" col-lg-5">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              className="form-control form-control-sm"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="col-lg-3">
            <label className="form-label">Years of Experience</label>
            <input
              type="text"
              name="experience"
              className="form-control form-control-sm"
              placeholder="Years of Experience"
              onChange={(e) => setYearOfExperience(e.target.value)}
            />
          </div>
          <div className="col-lg-3">
            <label className="form-label">Upload Images</label>
            <input
              type="file"
              name="images"
              className="form-control form-control-sm"
              multiple
              onChange={(e) => setUploadImages(e.target.files)}
            />
          </div>
          <div className="col-lg-3">
            <label className="form-label">Upload Videos</label>
            <input
              type="file"
              name="videos"
              className="form-control form-control-sm"
              accept="video/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const maxSize = 1 * 1024 * 1024; // 1MB in bytes

                const validFiles = files.filter((file) => file.size <= maxSize);

                if (validFiles.length !== files.length) {
                  alert(
                    "Some files exceed the 1MB limit and have been removed."
                  );
                  e.target.value = ""; // Reset input field
                } else {
                  setUplodVideo(validFiles);
                }
              }}
            />
          </div>
        </div>
        {/* Price Listing */}
        <div className="row mt-3">
          <div className="col-lg-12">
            <label className="form-label">Price Listing</label>
          </div>
          <div>
            {fields.map((field) => (
              <div key={field.id} className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    value={field.priceTitle}
                    className="form-control form-control-sm"
                    placeholder="Title"
                    onChange={(e) =>
                      handleInputChange(field.id, "priceTitle", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={field.price}
                    className="form-control form-control-sm ms-3"
                    placeholder="Price"
                    onChange={(e) =>
                      handleInputChange(field.id, "price", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={field.pricePer}
                    className="form-control form-control-sm ms-3"
                    placeholder="Price / Per"
                    onChange={(e) =>
                      handleInputChange(field.id, "pricePer", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={field.priceDescription}
                    className="form-control form-control-sm ms-3"
                    placeholder="Description"
                    onChange={(e) =>
                      handleInputChange(
                        field.id,
                        "priceDescription",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    value={field.vehicleType}
                    className="form-control form-control-sm ms-3"
                    placeholder="Vehicle Type"
                    onChange={(e) =>
                      handleInputChange(field.id, "vehicleType", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={field.ageRequired}
                    className="form-control form-control-sm ms-3"
                    placeholder="Age Required"
                    onChange={(e) =>
                      handleInputChange(field.id, "ageRequired", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={field.other}
                    className="form-control form-control-sm ms-3"
                    placeholder="Other"
                    onChange={(e) =>
                      handleInputChange(field.id, "other", e.target.value)
                    }
                  />
                  {fields.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger ms-3 btn-sm"
                      onClick={() => removeField(field.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary btn-sm text-white mt-1"
              onClick={addField}
            >
              Add New Row
            </button>
          </div>
        </div>
        {/* {highlites} */}
        <div className="row mt-3">
          <div className="col-lg-12">
            <label className="form-label">Highlights from the business</label>
          </div>
          <div className="col-lg-3">
            <h5 className="text-primary">
              <b>Segment</b>
            </h5>
            <div className="row row gy-1 gx-3">
              {["Compact SUV", "Sedan", "SUV", "Hatchback", "Van", "MUV"].map(
                (item) => (
                  <div key={item} className="col-lg-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item}
                        id={item}
                        checked={segment.includes(item)}
                        onChange={handleSegmentCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="text-primary">
              <b>Rental Type</b>
            </h5>
            <div className="row row gy-1 gx-3">
              {[
                "Wedding",
                "Vintage Car",
                "Corporate",
                "Luxury",
                "Outstation",
              ].map((item) => (
                <div key={item} className="col-lg-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item}
                      id={item}
                      checked={rentalType.includes(item)}
                      onChange={handleRentalTypeCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={item}>
                      {item}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-primary mt-3 mb-0">
              <b>Seating Capacity</b>
            </p>
            <div className="row gy-1 gx-3">
              {[
                "5 Seater",
                "7 Seater",
                "9 Seater",
                "10 Seater",
                "12 Seater",
                "15 Seater",
              ].map((item) => (
                <div key={item} className="col-lg-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item}
                      id={item}
                      checked={cabSeaterCapacity.includes(item)}
                      onChange={handleSeaterCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={item}>
                      {item}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="text-primary text-center">
              <b>Brands</b>{" "}
            </h5>
            <div className="row row gy-1 gx-3">
              {carBrands.map((brand) => (
                <div key={brand} className="col-lg-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={brand}
                      id={brand}
                      checked={brands.includes(brand)}
                      onChange={handleBrandsCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={brand}>
                      {brand}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <h5 className="text-primary">
              <b>Packages Offered</b>
            </h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Domestic"
                id="Domestic"
                checked={packagesOffered.includes("Domestic")}
                onChange={() =>
                  handleOtherCheckboxChange("Domestic", "packagesOffered")
                }
              />
              <label className="form-check-label" htmlFor="Domestic">
                Domestic
              </label>
            </div>

            <h5 className="text-primary mt-3">
              <b>Seating Capacity</b>
            </h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Tempo Traveller"
                id="Tempo Traveller"
                checked={seatingCapacity.includes("Tempo Traveller")}
                onChange={() =>
                  handleOtherCheckboxChange(
                    "Tempo Traveller",
                    "seatingCapacity"
                  )
                }
              />
              <label className="form-check-label" htmlFor="Tempo Traveller">
                Tempo Traveller
              </label>
            </div>

            <h5 className="text-primary mt-3">
              <b>Services</b>
            </h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Tempos On Rent For All India"
                id="a"
                checked={services.includes("Tempos On Rent For All India")}
                onChange={() =>
                  handleOtherCheckboxChange(
                    "Tempos On Rent For All India",
                    "services"
                  )
                }
              />
              <label className="form-check-label" htmlFor="a">
                Tempos On Rent For All India
              </label>
            </div>
          </div>
        </div>
      </Dialog>

      {/* <Dialog
        visible={deleteopenDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteopenDialogFooter}
        onHide={hideDeleteopenDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Are you sure you want to delete <b>{product.name}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>Are you sure you want to delete the selected products?</span>
          )}
        </div>
      </Dialog> */}
    </div>
  );
};

export default AddListing;

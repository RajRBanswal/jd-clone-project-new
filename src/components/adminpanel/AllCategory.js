import React, { useEffect, useRef, useState } from "react";
import { api_url } from "../helpers/api_helper";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";

const AllCategory = () => {
  const [Category, setCategory] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [allCategory, setAllCategory] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

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
    getCategories();
  }, []);

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm mr-2">
          <i className="fa fa-edit"></i>
        </button>
        <button className="btn btn-danger btn-sm">
          <i className="fa fa-trash"></i>
        </button>
      </React.Fragment>
    );
  };

  const openNew = () => {
    setOpenDialog(true);
  };

  const hideDialog = () => {
    setOpenDialog(false);
  };
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Categories</h4>
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

  const AddCategory = async () => {
    const response = await fetch(`${api_url}/api/admin/add-category`, {
      method: "POST",
      body: JSON.stringify({ Category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.status === 201) {
      alert(result.message);
      window.location.reload();
    } else {
      alert(result.message);
    }
  };
  const openDialogFooter = (
    <React.Fragment>
      <Button
        label="Save"
        icon="pi pi-check"
        className="ms-3 btn-sm "
        onClick={AddCategory}
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

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <DataTable
          ref={dt}
          value={allCategory}
          selection={selectedCategory}
          onSelectionChange={(e) => setSelectedCategory(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Category"
          globalFilter={globalFilter}
          header={header}
        >
          <Column field="categoryName" header="Category" sortable></Column>
          <Column field="status" header="Status" sortable></Column>
          <Column body={actionBodyTemplate} header="Action"></Column>
        </DataTable>

        <Dialog
          visible={openDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Add Category"
          modal
          footer={openDialogFooter}
          onHide={hideDialog}
        >
          <div className="row mt-3">
            <div className="col-lg-12">
              <label>Category Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default AllCategory;

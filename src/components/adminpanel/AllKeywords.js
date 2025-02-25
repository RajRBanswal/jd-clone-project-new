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

const AllKeywords = () => {
  const [keyword, setKeywords] = useState(null);
  const [price, setPrice] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [allKeyword, setAllKeyword] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const getCategories = async () => {
    const response = await fetch(`${api_url}/api/admin/get-keywords`);
    const result = await response.json();
    if (result.status === 201) {
      setAllKeyword(result.data);
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
      <h4 className="m-0">Manage Kaywords</h4>
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

  const AddKeyword = async () => {
    const response = await fetch(`${api_url}/api/admin/add-keyword`, {
      method: "POST",
      body: JSON.stringify({ keyword, price }),
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
        onClick={AddKeyword}
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
          value={allKeyword}
          selection={selectedKeyword}
          onSelectionChange={(e) => setSelectedKeyword(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Keyword"
          globalFilter={globalFilter}
          header={header}
        >
          <Column field="keyword" header="Keyword" sortable></Column>
          <Column field="price" header="Price" sortable></Column>
          <Column field="status" header="Status" sortable></Column>
          <Column body={actionBodyTemplate} header="Action"></Column>
        </DataTable>

        <Dialog
          visible={openDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Add Keyword"
          modal
          footer={openDialogFooter}
          onHide={hideDialog}
        >
          <div className="row mt-3">
            <div className="col-lg-12">
              <label>Keyword Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Keyword Name"
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
            <div className="col-lg-12 mt-3">
              <label>Keyword Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Keyword Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
export default AllKeywords;

import React from 'react';

function MyButtonsComponent() {
  return (
    <div className="d-flex justify-content-left p-3">
      <button type="button" className="btn button-grey rounded bg-light me-2 dropdown-toggle top-buttons d-md-block d-none">Collapse All</button>
      <button type="button" className="btn button-grey rounded bg-light me-2 dropdown-toggle top-buttons d-md-block d-none">View Progress</button>

      <div className="dropdown">
        <button className="btn button-grey rounded bg-light me-2 p-2 dropdown-toggle top-buttons d-md-block d-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Publish All
        </button>
        <ul className="dropdown-menu">
          {/* items here */}
        </ul>
      </div>
      <button type="button" className="btn btn-large bg-danger top-buttons d-md-block d-none me-3 rounded p-2"> <i className="fas fa-plus"></i> Module</button>
    </div>
  );
}

export default MyButtonsComponent;

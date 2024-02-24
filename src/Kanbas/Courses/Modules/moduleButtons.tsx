import React from 'react';
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";

function ModuleButtons() {
  return (
    <div>
        <div className="d-flex justify-content-left p-3">
        <button type="button" className="btn button-grey rounded bg-light me-2 dropdown-toggle top-buttons d-md-block d-none">Collapse All</button>
        <button type="button" className="btn button-grey rounded bg-light me-2 dropdown-toggle top-buttons d-md-block d-none">View Progress</button>

        <div className="dropdown">
            <button className="btn button-grey rounded bg-light me-2 dropdown-toggle top-buttons d-md-block d-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCheckCircle className="text-success" />
                Publish All
            </button>
            <ul className="dropdown-menu">
            </ul>
        </div>

        <button type="button" className="btn bg-danger top-buttons d-md-block d-none"> <i className="fas fa-plus"></i> Module</button>

        </div>
    </div>
  );
}

export default ModuleButtons;

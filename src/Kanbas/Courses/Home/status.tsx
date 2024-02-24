import React from 'react';

function StatusButtons() {
  return (
    <div>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-cloud-download me-1"></i>Import Existing Content</button>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-paperclip me-1"></i>Import From Commons</button>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-crosshairs me-1"></i>Choose Home Page</button>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-bar-chart me-1"></i>View Course Stream</button>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-phone me-1"></i>New Announcement</button>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-bar-chart me-1"></i>New Analytics</button>
        <button type="button" className="btn btn-block d-md-block bg-light mt-2 ml-2"><i className ="fa fa-bell me-1 mb-3"></i>View Course Notifications</button>

        <br/>
        <strong>TO DO</strong>
        <hr/>
        <strong>None </strong>
        <br/>
        <br/>
        
        <strong className ="mt-2">Coming Up</strong>
        <hr/>
        <strong>None </strong>
    </div>
  );
}

export default StatusButtons;
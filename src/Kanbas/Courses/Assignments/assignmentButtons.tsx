import React from 'react';
import "./index.css"

function AssignmentButtons() {
  return (
    <div className="d-flex justify-content-left p-3">
        <input id="text-fields-username" placeholder="Search for Assignments"/>
        <button> Group</button>
        <button className="red-button">Assignment</button>
        <select id="select-edit-assignment"> 
            <option value="Edit Assignment dates"> Edit Assignment dates</option>
            <option value="Assignment groups weight"> Assignment groups weight</option>
            <option value="Gradescope 1.3"> Gradescope 1.3</option>
            <option value="Commons Favourites"> Commons Favourites</option>
        </select>
    </div>
  );
}

export default AssignmentButtons;
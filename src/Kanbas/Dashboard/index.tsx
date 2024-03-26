import React, { useState } from "react";
import { Link } from "react-router-dom";
import Database from "../Database";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
{
  return (
    <div className="p-4">
      {/* placing the button in a diff col to keep them on the same line */}
      <div className="container m-0">
        <div className="row">
          <div className="col ml-0">
            <h1 className="m-0">Dashboard</h1>
          </div>
          {/* Course Name */}
          <div className="col-auto">
          <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          </div>

          {/* Course Number */}
          <div className="col-auto">
          <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          </div>

          {/* Course Start Date */}
          <div className="col-auto">
          <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          </div>

          {/* Course End date */}
          <div className="col-auto">
          <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          </div>

          {/* Add New Course Button */}
          <div className="col-auto">
            <button className="btn btn-success" onClick={addNewCourse}>Add</button>
          </div>

          {/* Update the course */}
          <div className="col-auto">
          <button className="btn btn-warning" onClick={updateCourse} >Update </button>
          </div>

        </div>
      </div>
      <hr />

      <h2>Published Courses (12)</h2> <hr />
      <div className="row mt-0 mb-0">
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{width: 400 }}>
              <div className="card">
                <img src={`https://t3.ftcdn.net/jpg/04/38/03/50/360_F_438035062_bxhey1N5fbRvjgPY0O7SqOnq3VzlrrSJ.jpg`} className="card-img-top"
                     style={{ height: 200 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}>
                    {course.name} 

                    {/* Code added for editing a course */}
                    <button className="btn btn-warning m-2" onClick={(event) => {event.preventDefault(); setCourse(course);}}>
                      Edit
                    </button>

                    {/* Added code for deleting a course */}
                    <button className="btn btn-danger m-2" onClick={(event) => {event.preventDefault(); deleteCourse(course._id);}}>
                      Delete
                    </button>
                    
                    
                    </Link>
                  <p className="card-text">{course.number}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-danger">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
export default Dashboard;
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Database from "./Database";
import { useState } from "react";


function Kanbas() {
  const [courses, setCourses] = useState(Database.courses);

// The starting boilerplate for a new course 
const [course, setCourse] = useState({
  _id: "0", name: "Course Name", number: "Course Number",
  startDate: "2023-09-10", endDate: "2023-12-15",
  image: "/images/reactjs.jpg"
});

// Adding a new course using the input from the forms
const addNewCourse = () => {
  const newCourse = { ...course,
                      _id: new Date().getTime().toString() };
  setCourses([...courses, { ...course, ...newCourse }]);
};

// Delete an existing course
const deleteCourse = (courseId: string) => {
  setCourses(courses.filter((course) => course._id !== courseId));
};

// Update an existing course
const updateCourse = () => {
  setCourses(
    courses.map((c) => {
      if (c._id === course._id) {
        return course;
      } else {
        return c;
      }
    })
  );
};
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

      </div>
    </div>
);}
export default Kanbas;
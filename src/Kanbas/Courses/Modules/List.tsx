import React, { useState } from "react";
import "./index.css";
import Database from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
const {modules} = Database;

function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(modules);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };

  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module.course) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };




  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group">

        {/* New code for adding buttons  */}

        <li className="list-group-item">
        <button className="btn btn-success" onClick={() => { addModule(module) }}>Add</button>
        <button className="btn btn-warning" onClick={updateModule}>
                Update
        </button>
        <input className= "m-2" value={module.name} onChange={(e) => setModule({...module, name: e.target.value })}/>
        <textarea className="m-2" value={module.description} onChange={(e) => setModule({...module, description: e.target.value })}/>
      </li>



        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item m-1" onClick={() => setSelectedModule(module)}>

            {/* Button for updating the modules */}

            <button className="btn btn-danger"
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>

            {/* Button for deleting modules */}
              <button className="btn btn-danger m-2"
              onClick={() => deleteModule(module._id)}>
              Delete
            </button>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id
            // Ask professor for help with this part!! 
            // (
            //   <ul className="list-group">
            //     {module.lessons?.map((lesson, index) => (
            //       <li className="list-group-item" key={index}>
            //         <FaEllipsisV className="me-2" />
            //         {lesson.name}
            //         <span className="float-end">
            //           <FaCheckCircle className="text-success" />
            //           <FaEllipsisV className="ms-2" />
            //         </span>
            //       </li>
            //     ))}
            //   </ul>
            // )
            }
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
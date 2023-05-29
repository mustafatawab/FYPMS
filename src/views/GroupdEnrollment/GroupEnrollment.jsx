import React, { useState } from "react";
import Sidebar2 from "../Supervisor/Sidebar2";
import AddButton from "../../components/button/addButton";

function GroupEnrollment() {
  const [projName, setProjName] = useState("");
  const [domain, setDomain] = useState("");
  const [name1, setName1] = useState("");
  const [sap1, setSap1] = useState();
  
  const [mylist, setMylist] = useState([]);


  function AddDetails(){
      setMylist((mylist)=>{
        let newTodo = {
          title: projName,
          domain: domain,
          name1: name1,
          
        }
      })
  }
  return (
    <div>
      <Sidebar2 />
      <div className=" w-1/2 m-auto mt-12 bg-slate-200 p-10 rounded-lg">
        <h1 className="text-red-900 font-bold text-3xl text-center">
          Group Enrollment
        </h1>

        <form
          onSubmit={() => {
            alert(`Form Submited`);
          }}
          action=""
          className="flex flex-col text-center w-1/2 m-auto p-10 gap-4 items-center"
        >
          <span className="flex gap-2">
            <input
              type="text"
              placeholder=" Project TItle"
              value={projName}
              onChange={(e) => setProjName(e.target.value)}
              className=""
            />{" "}
            <select value={domain} onChange={(e) => setDomain(e.target.value)}>
              <option value="" disabled>
                Select Domain
              </option>
              <option value="">Web App</option>
              <option value="">Mobile App</option>
              <option value="">Mechine Learning</option>
              <option value="">Artificial Intelligence</option>
              <option value="">Game Developement</option>
              <option value="">Other </option>
            </select>
          </span>

          <label htmlFor="" className="text-xl font-bold ">
            Enter Group Members Details
          </label>
          <span className="flex gap-2">
            <input
              type="text"
              placeholder=" Name 1"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className=""
            />{" "}
            <input
              type="number"
              placeholder="SAP 1"
              value={sap1}
              onChange={(e) => setSap1(e.target.value)}
            />
          </span>
          <span className="flex gap-2">
            <input type="text" placeholder=" Name 2" />{" "}
            <input type="number" placeholder="SAP 2" />
          </span>
          <span className="flex gap-2 p-2">
            <input type="text" placeholder=" Name 3" />{" "}
            <input type="number" placeholder="SAP 3" />
          </span>
          <AddButton lableName={"Submit Form"} />
        </form>
      </div>
    </div>
  );
}

export default GroupEnrollment;

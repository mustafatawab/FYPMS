import React, { useState } from "react";
import SideBar1 from "../Coordinator/SideBar1";
import AddButton from "../../components/button/addButton";
import Sidebar2 from "../Supervisor/Sidebar2";

function Students() {
  const [stdName, setStdName] = useState("");
  const [SAP, setSAP] = useState();
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity]);
    setlistData((listData) => {
      let newList = {
        StdName: stdName,
        SAP: SAP,
      };
      const updatedList = [...listData, newList];
      setStdName("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }
  return (
    <div>
      <Sidebar2 />

      <div className="w-1/2 m-auto mt-5">
        <h1 className="text-red-900 font-bold text-3xl text-center p-5">
          Students Records
        </h1>

        <form action="" className="flex justify-between bg-slate-200 p-10">
          <input
            type="text"
            placeholder="Enter Student Name"
            className="outline-0 rounded-lg"
            value={stdName}
            onChange={(e) => setStdName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter SAP ID"
            className="outline-0 rounded-lg"
            value={SAP}
            onChange={(e) => setSAP(e.target.value)}
          />

          <button
            onClick={addActivity}
            className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-[#927C48] hover:text-white hover:outline-none "
          >
            Add
          </button>
        </form>

        {/* List Data */}
        <div className=" bg-slate-200 px-12 py-5 mt-4 ">
          <h1 className="text-3xl font-bold text-center text-red-900 ">
            Student List
          </h1>

          <div className="grid grid-cols-4 px-3 mt-3">
            <span className="text-slate-600 font-bold text-lg">S.No</span>
            <span className="text-slate-600 font-bold text-lg">
              Student Name
            </span>
            <span className="text-slate-600 font-bold text-lg">SAP</span>

            <span></span>
          </div>

          {listData != [] &&
            listData.map((data, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="flex justify-between p-3 shadow-md bg-slate-300 mb-5 mt-4"
                  >
                    <span>{i + 1}</span>
                    <span>{data.StdName}</span>
                    <span>{data.SAP}</span>
                    <button
                      className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-red-700 hover:text-white hover:outline-none "
                      onClick={() => removeActivity(i)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              );
            })}

          {listData.length > 1 && (
            <div className="text-center">
              <button
                className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-red-700 hover:text-white hover:outline-none"
                onClick={removeAll}
              >
                Remove all
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Students;

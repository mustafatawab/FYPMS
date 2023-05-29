import React, { useState } from "react";
import SideBar1 from "../Coordinator/SideBar1";
import AddButton from "../../components/button/addButton";

function Rooms() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity]);
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
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
      <SideBar1 />

      <div className="w-1/2 m-auto mt-5">
        <h1 className="text-red-900 font-bold text-3xl text-center p-5">
          Rooms
        </h1>
        <div className="flex justify-between bg-slate-200 p-10">
          <input
            type="text"
            className="outline-0 rounded-lg"
            placeholder="S.No"
          />
          <input
            type="text"
            placeholder="Enter Room Number"
            className="outline-0 rounded-lg"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />

          <button
            onClick={addActivity}
            className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-[#927C48] hover:text-white hover:outline-none "
          >
            Add
          </button>
        </div>

        {/* List Data */}
        <div className=" bg-slate-200 px-12 py-5 mt-4 ">
          <h1 className="text-3xl font-bold text-center text-red-900 ">
            Rooms List
          </h1>

          <div className="flex justify-between px-3 mt-3">
            <span className="text-slate-600 font-bold text-lg">S.No</span>
            <span className="text-slate-600 font-bold text-lg">Room No.</span>
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
                    <span>{data}</span>
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

export default Rooms;

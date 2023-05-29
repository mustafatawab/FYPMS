import React, { useState } from "react";
import SideBar1 from "../Coordinator/SideBar1";
import AddButton from "../../components/button/addButton";

function Evaluator() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // let idCounter = 1;

  const [listData, setlistData] = useState([]);
  function addDetails() {
    setlistData( 
      (listData) => {
        // if (name.trim() != "" && email.trim() != "" && phone.trim() != "") {
        let newTodo = {
          // id: idCounter,
          Name: name,
          Email: email,
          Phone: phone,
        };
        const updatedList = [...listData, newTodo];
        setName("");
        setEmail("");
        setPhone("");
        // idCounter++;
        return updatedList;
      }
      // }
    );

    // if (name.trim() != "" && email.trim() != "" && phone.trim() != "") {
    //   const newTodo = {
    //     id: Math.random().toString(),
    //     Name: name,
    //     Email: email,
    //     PhoneNumber: phone,
    //   };
    //   setlistData((listData) => {
    //     const updatedLIst = [...listData, newTodo];
    //     setName("");
    //     setEmail("");
    //     setPhone("");
    //     return updatedLIst;
    //   });
    // }
  }

  function removeDetails(i) {
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

      <div className="w-2/3 ml-80 mt-5 ">
        <h1 className="text-red-900 font-bold text-3xl text-center p-5">
          Evaluator
        </h1>
        <div className="flex justify-between bg-slate-200 p-10">
          <input
            type="text"
            placeholder=" Enter  Name"
            className="outline-0 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Enter Email "
            className=" outline-0 rounded-md"
          />
          <input
            type="text"
            placeholder=" Enter Phone Number"
            className="outline-0 rounded-md"
          />

          <button
            onClick={addDetails}
            className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-[#927C48] hover:text-white hover:outline-none "
          >
            Add
          </button>
        </div>

        {/* List Data */}
        {listData != [] && (
          <div className=" bg-slate-200 px-12 py-5 mt-4 ">
            <h1 className="text-3xl font-bold text-center text-red-900 ">
              Evaluator List
            </h1>
            <div className="flex justify-between px-3 mt-3">
              <span className="text-slate-600 font-bold text-lg">S.No</span>
              <span className="text-slate-600 font-bold text-lg">Name</span>
              <span className="text-slate-600 font-bold text-lg">
                Email Address
              </span>
              <span className="text-slate-600 font-bold text-lg">
                Phone Number
              </span>
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
                      <span>{data.id}</span>
                      <span>{data.Name}</span>
                      <span>{data.Email}</span>
                      <span className="text-red-800">{data.Phone}</span>

                      <button
                        className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-red-700 hover:text-white hover:outline-none "
                        onClick={() => removeDetails(i)}
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
        )}

        {/*  */}
      </div>
    </div>
  );
}

export default Evaluator;

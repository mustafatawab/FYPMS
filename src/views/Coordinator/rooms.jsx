import React from "react";
import AddButton from "../../components/button/addButton";

function Rooms() {
  return (
    <>
      <section className=" mt-32">
        {/* Entering  Rooms  Records*/}
        <div className="justify-center items-center flex sp space-x-24 ">
          <input
            type="text"
            placeholder="Enter Room No"
            className="outline outline-1 outline-[#927C48] rounded-sm"
          />
          <input
            type="text"
            placeholder="Enter Floor No"
            className="outline outline-1 outline-[#927C48] rounded-sm"
          />

          <AddButton lableName={"Add"}></AddButton>
        </div>

        {/* Deleting and Updating Rooms Records */}

        <div className="justify-center  items-start flex sp space-x-24 mt-20">
          <label htmlFor="">1</label>
          <label htmlFor="">F 1/2</label>
          <label htmlFor="">1st Floor</label>
        </div>
      </section>
    </>
  );
}

export default Rooms;

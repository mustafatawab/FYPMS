import React from "react";

function AddButton({ lableName, link }) {
  return (
    <div>
      <button type="submit" className="outline outline-[#927C48] py-1 px-6 text-[#927C48] rounded-md hover:bg-[#927C48] hover:text-white hover:outline-none ">
        {lableName}
      </button>
    </div>
  );
}

export default AddButton;

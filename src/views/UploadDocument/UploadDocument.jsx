import React, { useState } from "react";
import Sidebar2 from "../Supervisor/Sidebar2";

function UploadDocument() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const [list, setList] = useState([]);

  function AddData() {
    setList((list) => {
      let NewTodo = {
        myFile: file,
        proTitle: title,
      };

      const UpdatedList = [...list, NewTodo];
      setFile(null);
      setTitle("");
      return UpdatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = list.filter((elem, id) => {
      return i != id;
    });
    setList(updatedListData);
  }
  return (
    <div>
      <Sidebar2 />
      <div className=" w-1/2 m-auto mt-12 bg-slate-200 p-10">
        <h1 className="text-red-900 font-bold text-3xl text-center">
          Upload Document
        </h1>

        <form action="" className="flex justify-between items-center">
          <input
            type="text"
            placeholder=" Project Name Please"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            className=""
            placeholder=""
            multiple
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default UploadDocument;

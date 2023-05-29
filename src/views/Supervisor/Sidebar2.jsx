import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";

function Sidebar2() {
  return (
    <>
      <Header profile={"Supervisor"} />
      <div className="">
        <div className="fixed left-0 w-1/5 shadow-md">
          <div className="p-10 font-bold gap-5 text-xl h-[700px] flex flex-col">
          <Link to="/Students">
              <a href="" className="hover:underline">
                Students
              </a>
            </Link>
            
            <Link to="/GroupEnrollment">
              <a href="" className="hover:underline">
                Group Enrollment
              </a>
            </Link>
            <Link to="/Gradding">
              <a href="" className="hover:underline">
                Gradding
              </a>
            </Link>

            <Link to="/UploadDocument">
              <a href="" className="hover:underline">
                Upload Document
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar2;

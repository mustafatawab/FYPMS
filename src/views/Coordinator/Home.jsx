import React from "react";
import Profile from "../../assets/images/profile.png";
import Rooms from "./rooms.jsx";
import iiuiLogo from "../../assets/images/iiui.png";
import profileIcon from "../../assets/images/profile.png";
import FYP1 from "../FYP1/fyp1";



const Home = () => {
  
  return (

    <>
      <div className="">
        <div className="p-6 flex justify-between">
          <img src={iiuiLogo} alt="IIUI Logo" className="w-22 h-16 " />

          <button onClick={fyp=><FYP1/>}
            className="flex items-center space-x-5 hover:text-red-900"
          >
            <p className="font-bold ">COORDINATOR</p>
            <img src={profileIcon} alt="Profile Image" className="w-22 h-16" />
          </button>
        </div>

        <hr />

        <div className="ml-[150px] mt-[50px]">
          <h1 className="font-extrabold text-4xl ">
            <span className=" "> FYP </span> Management System For{" "}
            <span className="text-red-900"> IIUI </span>{" "}
          </h1>

          <div className="flex justify-between w-[600px] mt-[50px]  ">
            {/* FYP II */}
            <a href="">
              <div className="shadow-2xl  hover:opacity-80 flex flex-col space-y-5 justify-center rounded-lg items-center w-[250px] h-[250px] bg-slate-300">
                <h1 className="font-bold text-4xl">FYP I</h1>

                <hr />
                <a href="/">Icon Here</a>
              </div>
            </a>
            {/* FYP II */}
            <a href="">
              <div className="shadow-2xl  hover:opacity-80 flex flex-col space-y-5 justify-center rounded-lg items-center w-[250px] h-[250px] bg-slate-300">
                <h1 className="font-bold text-4xl">FYP II</h1>
                <hr />
                <a href="/">Icon Here</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

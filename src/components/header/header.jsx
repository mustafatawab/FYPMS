import React from "react";
import iiuiLogo from "../../assets/images/iiui.png";
import profileIcon from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

function Header({profile}) {
  return (
    <>
      {/* <div className="p-6 flex justify-between ">
        <img src={iiuiLogo} alt="IIUI Logo" className="w-22 h-16 " />

        <button className="flex items-center space-x-5 hover:text-red-900">
          <p className="font-bold ">PROFILE</p>
          <img src={profileIcon} alt="Profile Image" className="w-22 h-16" />
        </button>
      </div> */}
      {/*  */}
      <div className="p-6 flex justify-between items-center   shadow-md">
        <img src={iiuiLogo} alt="" className="w-22 h-16" />
        <ul className="flex font-bold gap-5">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
        </ul>

        <a href={""} className="flex items-center space-x-5 hover:text-red-900">
          <p className="font-bold ">
            <span className="">{profile}</span>{" "}
          </p>
          <img src={profileIcon} alt="Profile Image" className="w-22 h-16" />
        </a>
      </div>

      <hr className="" />
    </>
  );
}

export default Header;

import React from "react";
import iiuiLogo from "../../assets/images/iiui.png";
import profileIcon from "../../assets/images/profile.png";

function DashboardCo() {
  return (
    <>
      <div className="">
        <div className="p-6 flex justify-between items-center   shadow-md">
          <img src={iiuiLogo} alt="" className="w-22 h-16" />

          <ul className="flex font-bold gap-5">
            <a href="">
              <li>Dashboard</li>
            </a>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>

          <a
            href={""}
            className="flex items-center space-x-5 hover:text-red-900"
          >
            <p className="font-bold ">
              Coordinator <span className="">(Admin)</span>{" "}
            </p>
            <img src={profileIcon} alt="Profile Image" className="w-22 h-16" />
          </a>
        </div>

        <hr className="" />

        <div className="fixed left-0 w-1/5 shadow-md">
          <div className="p-10 font-bold gap-5 text-xl h-[700px] flex flex-col">
            <a href="" className="hover:underline">
              Rooms
            </a>

            <a href="" className="hover:underline">
              Schedule
            </a>

            <a href="" className="hover:underline">
              Panels
            </a>
            <a href="" className="hover:underline">
              Groups
            </a>
            <a href="" className="hover:underline">
              Result
            </a>
            <a href="" className="hover:underline">
              Notifications
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCo;

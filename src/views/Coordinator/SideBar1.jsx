import React from "react";
import iiuiLogo from "../../assets/images/iiui.png";
import profileIcon from "../../assets/images/profile.png";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";

function SideBar1() {
  return (
    <>
    <Header profile={'Coordinator'}/>
      <div className="">
        

        <div className="fixed left-0 w-1/5 shadow-md">
          <div className="p-10 font-bold gap-5 text-xl h-[700px] flex flex-col">
            <Link to="/Panel">
              <a href="" className="hover:underline">
                Panels
              </a>
            </Link>

            <a href="" className="hover:underline">
              Schedule
            </a>

            <Link to="/Rooms">
              <a href="" className="hover:underline">
                Rooms
              </a>
            </Link>

            <Link to="/Evaluator">
              <a href="" className="hover:underline">
                Evaluator
              </a>
            </Link>
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

export default SideBar1;

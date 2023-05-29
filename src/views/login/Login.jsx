import React from "react";
import Header from "../../components/header/header";
import FYPheading from "../../components/fypHeading/FYPheading";
import AddButton from "../../components/button/addButton";
import { Link } from "react-router-dom";
import DashboardCoordinator from "../Coordinator/SideBar1";
import { useState } from "react";
import SideBar1 from "../Coordinator/SideBar1";
import Sidebar2 from "../Supervisor/Sidebar2";

function Login() {
  const [to, setTo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // if(to === 'Coordinator')
    // {
    //   return <Link to={'/SideBar1'}/>
    // }
    // else{
    //   return <Link to={'/Sidebar2'}/>
    // }
  }

  return (
    <>
    <Header profile={'Profile'}/>
      <div className="p-10">
        <FYPheading />
      </div>
      <div className="">
        {/* First Div select Login As Coorinator or Supervisor */}
        {/* <div className="text-center p-10 ">
          <select
            name=""
            id=""
            className="m-auto bg-slate-200 outline-0 p-2 rounded-md space-y-2 "
          >
            <option value="loginAs" className="" disabled>
              Login As
            </option>
            <option value="Coordinator">{select[0]}</option>
            <option value="Supervisor">{select[1]}</option>
          </select>
        </div> */}

        {/* Form to Login  */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col mx-auto bg-slate-100 mt-5 gap-5 text-center p-10 space-y-5 shadow-xl w-1/2 rounded-xl"
        >
          <h1 className="text-slate-500 font-bold text-3xl">Sign In</h1>
          <input
            type="text"
            placeholder="Enter Username Here"
            className="w-2/3 m-auto p-1 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-2/3 m-auto p-1 outline-none"
            required
          />

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            name=""
            id=""
            className="w-2/3 m-auto p-1 outline-none"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Coordinator"> Coordinator</option>
            <option value="Supervisor"> Supervisor</option>
          </select>
          {/* <button
            type="submit"
            className="bg-red-900 px-4 py-2 text-white hover:bg-slate-300 hover:text-red-900 font-semibold shadow-xl rounded-lg m-auto"
          >
            Login
          </button> */}
          {to === "Coordinator" && (
            <Link to="/SideBar1">
              <button
                type="submit"
                className="bg-red-900 px-4 py-2 text-white hover:bg-slate-300 hover:text-red-900 font-semibold shadow-xl rounded-lg m-auto"
              >
                Login
              </button>
            </Link>
          )}

          {to === "Supervisor" && (
            <Link to="/Sidebar2">
              <button
                type="submit"
                className="bg-red-900 px-4 py-2 text-white hover:bg-slate-300 hover:text-red-900 font-semibold shadow-xl rounded-lg m-auto"
              >
                Login
              </button>
            </Link>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;

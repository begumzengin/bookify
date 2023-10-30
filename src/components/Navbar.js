import React from "react";
import AuthDetails from "./auth/AuthDetails";
import bookifyLogo from "../bookify-logo.png";

function Navbar() {
  return (
    <>
      <div className="bg-pinkerBackgroundColor h-[70px] drop-shadow-md flex justify-between">
        <div className="flex">
          <img className="h-[80px]" src={bookifyLogo} alt="app logo" />
        </div>
        <div className="">
          <div className="justify-end mt-3 mr-3">
            <AuthDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

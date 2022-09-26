import React from "react";
import { NavLink } from "react-router-dom";
import "./SelectPro.css";

const SelctProd = () => {
  return (
    <div className="selectpro">
      <div className="prod">
        <NavLink to={"/products/intelProcessor"}>
          <img
            className="prodimg"
            src="/Images/intel/intel.png"
            alt="Intel"
          ></img>
        </NavLink>
      </div>
      <div className="prod">
        <NavLink to={"/products/AMDProcessor"}>
          <img className="prodimg" src="/Images/AMD/AMD.jpg" alt="Intel"></img>
        </NavLink>
      </div>
    </div>
  );
};

export default SelctProd;

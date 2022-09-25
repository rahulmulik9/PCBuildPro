import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav classNameName="navbar">
        <NavLink classNameName="navbarlogo" to={""}>
          Navbar
        </NavLink>

        <div classNameName="navlist">
          <ul classNameName="navbarul">
            <li classNameName="navitem">
              <NavLink classNameName="navlink" to={""}>
                Home
              </NavLink>
            </li>
            <li classNameName="navitem">
              <NavLink classNameName="navlink" to={""}>
                Link
              </NavLink>
            </li>

            <li classNameName="navitem">
              <NavLink classNameName="navlink" to={""}>
                COmponents
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to={""}>
          PCBuilderPro
        </NavLink>

        <div className="expand navbar-expand" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to={"/components"}>
              Components
            </NavLink>
            <NavLink className="nav-item nav-link" to={"/customers"}>
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to={"/products"}>
              Products
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

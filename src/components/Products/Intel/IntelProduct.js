import React from "react";
import inteldata from "./IntelProductData";
import "./IntelProductcss.css";
import intelMotherBoardData from "./IntelMotherboardData";
import { NavLink } from "react-router-dom";

const IntelProduct = () => {
  return (
    <div>
      <div className="Head"></div>
      <main>
        <div className="subcat">
          <h2>Intel Processor</h2>
        </div>

        <div className="product">
          {inteldata.products.map((product) => (
            <div className="productEach" key={product.id}>
              <div className="productImage">
                <a href={"/product/intel/${product.name}"}>
                  <img src={product.Image} alt={product.name}></img>
                </a>
              </div>

              <div className="productInfo">
                <NavLink to={"/products/intel/${product.name}"}>
                  <p>{product.name}</p>
                </NavLink>
                <p>₹{product.price}</p>
                <p>{product.discription}</p>
                <div className="buttondiv">
                  <NavLink to={"/products/intelMotherBoard"}>
                    <button className="buttonproduct">Select</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default IntelProduct;

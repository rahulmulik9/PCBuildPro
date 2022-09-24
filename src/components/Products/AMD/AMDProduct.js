import React from "react";
import AMDdata from "./AMDProductData";
import "./AMDProductcss.css";
import { NavLink } from "react-router-dom";

const AMDProduct = () => {
  return (
    <div>
      <div className="Head"></div>
      <main>
        <div className="subcat">
          <h2>AMD Processor</h2>
        </div>

        <div className="product">
          {AMDdata.products.map((product) => (
            <div className="productEach" key={product.id}>
              <div className="productImage">
                <NavLink to={"/product/AMD/${product.name}"}>
                  <img src={product.Image} alt={product.name}></img>
                </NavLink>
              </div>

              <div className="productInfo">
                <NavLink to={"/product/AMD/${product.name}"}>
                  <p>{product.name}</p>
                </NavLink>
                <p>₹{product.price}</p>
                <p>{product.discription}</p>
                <div className="buttondiv">
                  <NavLink to="/products/AMDMotherBoard">
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

export default AMDProduct;

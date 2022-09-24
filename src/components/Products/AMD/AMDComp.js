import axios from "axios";
import { useEffect, useState } from "react";
import "./AMDProductcss.css";
import { NavLink } from "react-router-dom";

const AMDComp = () => {
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/components")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    custList();
  }, []);

  return (
    <div>
      <div className="Head"></div>

      <main>
        <div className="subcat">
          <h2>Motherboard</h2>
        </div>

        <div className="product">
          {responseData.map(
            (product) =>
              product.status == "processor" && (
                <div className="productEach" key={product.compId}>
                  <div className="productImage">
                    <NavLink to={"/product/AMD/${product.name}"}>
                      <img
                        src={`/Images/AMD/${product.category}.jpg`}
                        alt={product.name}
                      ></img>
                    </NavLink>
                  </div>

                  <div className="productInfo">
                    <NavLink to={"/product/AMD/${product.name}"}>
                      <p>{product.name}</p>
                    </NavLink>
                    <p>₹{product.price}</p>
                    <p>{product.status}</p>
                    <div className="buttondiv">
                      <button className="buttonproduct">Add to Cart</button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </main>
    </div>
  );
};

export default AMDComp;

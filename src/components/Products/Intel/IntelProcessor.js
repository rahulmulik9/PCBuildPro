import axios from "axios";
import { useEffect, useState } from "react";
import "./IntelProductcss.css";
import { NavLink } from "react-router-dom";

const IntelProcessor = () => {
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
          <h2>Processor</h2>
        </div>

        <div className="product">
          {responseData.map(
            (product) =>
              product.status == "intel" && (
                <div className="productEach" key={product.compId}>
                  <div className="productImage">
                    <NavLink to={"/product/AMD/${product.name}"}>
                      <img
                        src={`/Images/intel/${product.category}.jpg`}
                        alt={product.name}
                      ></img>
                    </NavLink>
                  </div>

                  <div className="productInfo">
                    <NavLink to={"/product/intel/${product.name}"}>
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

export default IntelProcessor;

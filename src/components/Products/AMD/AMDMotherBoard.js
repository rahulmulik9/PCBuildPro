import "./AMDProductcss.css";
import AMDMotherBoardData from "./AMDMotherBoardData";
import { NavLink } from "react-router-dom";

const AMDMotherBoard = () => {
  return (
    <div>
      <div className="Head"></div>

      <main>
        <div className="subcat">
          <h2>Motherboard</h2>
        </div>

        <div className="product">
          {AMDMotherBoardData.motherboard.map((product) => (
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
                  <button className="buttonproduct">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AMDMotherBoard;

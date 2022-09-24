import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerList.css";

const CustomerList = () => {
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/customers")
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
    <>
      <div className="container">
        <h2 className="heading">Customer List</h2>

        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th>CustomerID</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.custId}</td>
                <td>{val.address}</td>
                <td>{val.email}</td>
                <td>{val.mobile}</td>
                <td>{val.name}</td>
                <td>{val.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerList;

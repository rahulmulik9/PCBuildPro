import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import ComponentList from "./components/ComponentList";

import AMDProduct from "./components/Products/AMD/AMDProcessor";
import AMDMotherBoard from "./components/Products/AMD/AMDMotherBoard";
import IntelMotherBoard from "./components/Products/Intel/IntelMotherBoard";

import Navbar from "./components/Products/Navbar";
import SelctProd from "./components/Products/SelctProd";

import IntelProcessor from "./components/Products/Intel/IntelProcessor";
import AMDProcessor from "./components/Products/AMD/AMDProcessor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/customers" element={<CustomerList />}></Route>
          <Route path="/components" element={<ComponentList />}></Route>
          <Route path="/products" element={<SelctProd />}></Route>

          {/* Route For AMDProcessor and AMDMotherBoard  */}
          <Route
            path="/products/AMDProcessor"
            element={<AMDProcessor></AMDProcessor>}
          ></Route>
          <Route
            path="/products/AMDMotherBoard"
            element={<AMDMotherBoard />}
          ></Route>
          {/* Route for IntelProcessor and IntelMotherBoard */}
          <Route
            path="/products/IntelProcessor"
            element={<IntelProcessor></IntelProcessor>}
          ></Route>
          <Route
            path="/products/IntelMotherBoard"
            element={<IntelMotherBoard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

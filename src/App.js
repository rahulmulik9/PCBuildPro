import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import ComponentList from "./components/ComponentList";

import IntelProduct from "./components/Products/Intel/IntelProduct";
import AMDProduct from "./components/Products/AMD/AMDProduct";
import AMDMotherBoard from "./components/Products/AMD/AMDMotherBoard";
import IntelMotherBoard from "./components/Products/Intel/IntelMotherBoard";
import AMDComp from "./components/Products/AMD/AMDComp";
import Navbar from "./components/Products/Navbar";
import SelctProd from "./components/Products/SelctProd";
import IntelProcessor from "./components/Products/Intel/IntelProcessor";
import AMDMotherbrd from "./components/Products/AMD/AMDMotherbrd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/customers" element={<CustomerList />}></Route>
          <Route path="/components" element={<ComponentList />}></Route>
          <Route path="/products" element={<SelctProd />}></Route>

          {/* path of files feccthing data from hardcore */}
          <Route path="/products/intel" element={<IntelProduct />}></Route>
          <Route path="/products/AMD" element={<AMDProduct />}></Route>

          <Route
            path="/products/AMDMotherBoard"
            element={<AMDMotherBoard />}
          ></Route>
          <Route
            path="/products/IntelMotherBoard"
            element={<IntelMotherBoard />}
          ></Route>
          {/* path of files after feccthing data from database */}
          <Route path="/AMDpro" element={<AMDComp />}></Route>
          <Route
            path="/products/AMDMotherbrd"
            element={<AMDMotherbrd />}
          ></Route>
          <Route path="/IntelProcessor" element={<IntelProcessor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

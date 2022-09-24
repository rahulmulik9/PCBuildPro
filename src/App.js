import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import ComponentList from "./components/ComponentList";

import IntelProduct from "./components/Products/Intel/IntelProduct";
import AMDProduct from "./components/Products/AMD/AMDProduct";
import AMDMotherBoard from "./components/Products/AMD/AMDMotherBoard";
import IntelMotherBoard from "./components/Products/Intel/IntelMotherBoard";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/customers" element={<CustomerList />}></Route>
          <Route path="/components" element={<ComponentList />}></Route>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import ProductJenson from "./Pages/ProductJenson";
import ProductDeon from "./Pages/ProductDeon";
import ProductKrisha from "./Pages/ProductKrisha";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {/* In der Routes Komponente definieren wir, was gerendert werden soll je nachdem auf welcher URL wir uns befinden */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/Jenson" element={<ProductJenson />} />
          <Route path="//categories/Deon" element={<ProductDeon />} />
          <Route path="//categories/Krisha" element={<ProductKrisha />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

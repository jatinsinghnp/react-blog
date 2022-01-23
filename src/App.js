import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "./context/ShoppingCartContext";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <ShoppingCartProvider>
        <Navbar />
        <div className="container mx-auto px-6 mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <ShoppingCart />
      </ShoppingCartProvider>
    </React.Fragment>
  );
}

export default App;

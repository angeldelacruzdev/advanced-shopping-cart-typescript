import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../../context/ShoppingCartContext";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <React.Fragment>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-4">
              <Link to={"/"}>Home</Link>
              <Link to={"/store"}>Store</Link>
              <Link to={"/about"}>About</Link>
            </div>
            <div>
              <button
                onClick={openCart}
                className="rounded-full h-10 w-10 ring-sky-500 hover:bg-sky-500 hover:text-white ring-1 flex justify-center items-center relative"
              >
                {cartQuantity > 0 && (
                  <span className="absolute -top-2 -right-1 h-5 w-5 bg-red-500 rounded-full ring-1 ring-white text-white flex justify-center items-center text-[12px] font-bold">
                    {cartQuantity}
                  </span>
                )}

                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

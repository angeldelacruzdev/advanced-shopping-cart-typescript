import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import CartItem from "../CartItem";

const ShoppingCart = () => {
  const { closeCart, cartItems, isOpenCart } = useShoppingCart();

  return (
    <React.Fragment>
      <div
        className={`${
          isOpenCart
            ? "fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 transform-none"
            : "fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <div className="flex items-center justify-between">
          <h2
            id="drawer-right-label"
            className="text-lg font-medium text-white"
          >
            Shopping Cart
          </h2>
          <button
            onClick={closeCart}
            type="button"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close panel</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="font-bold text-white flex justify-end mt-4">
          <span>
          Subtotal: $
            {new Intl.NumberFormat('us-IN').format(
              cartItems.reduce((total, carItem) => {
                const item = storeItems.find((item) => item.id === carItem.id);

                return total + (item?.price || 0) * carItem.quantity;
              }, 0)
            )}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;

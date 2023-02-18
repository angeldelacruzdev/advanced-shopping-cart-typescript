import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

import storeItems from "../../data/items.json";

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1">
        <div className="flex flex-row ">
          <div className="flex items-center w-2/4">
            <img
              src={item.image}
              alt="item"
              className="w-16 h-16 rounded object-cover"
            />
            <div className="flex flex-col ml-2">
              <span className="text-gray-400 font-bold text-[13px]">
                {item.name} x {quantity}
              </span>
              <span className="text-gray-500 text-sm">
                ${new Intl.NumberFormat("us-IN").format(item.price)}
              </span>
            </div>
          </div>
          <div className="flex  justify-end items-center ml-2 w-2/4">
            <span className="text-white">
              ${new Intl.NumberFormat("us-IN").format(item.price * quantity)}
            </span>
            <button
              className="text-white h-7 w-7 bg-red-500 rounded-full flex justify-center ml-2"
              onClick={() => removeFromCart(item.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;

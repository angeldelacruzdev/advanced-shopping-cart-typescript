import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const StoreItem = ({ id, name, price, description, image }: StoreItemProps) => {
  console.log(id, name, price, description, image)
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increeaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const qty = getItemQuantity(id);
  console.log(qty);
  return (
    <React.Fragment>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {name}  
          </div>
          <p className="text-gray-700 text-base">{description}</p>
          {qty === 0 ? (
            <>
              <button
                onClick={() => increeaseCartQuantity(id)}
                className="p-2 bg-blue-500  w-full  text-white mt-2 rounded-sm"
              >
                Add To Cart
              </button>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="p-2 bg-red-500 w-24 text-white  rounded-sm"
                >
                  -
                </button>
                <span>{qty} in cart</span>
                <button
                  onClick={() => increeaseCartQuantity(id)}
                  className="p-2 bg-blue-500 w-24 text-white  rounded-sm"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="p-2 bg-red-500 w-full text-white mt-2 rounded-sm"
              >
                Eliminar
              </button>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default StoreItem;

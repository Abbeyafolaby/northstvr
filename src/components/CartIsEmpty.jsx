import React from "react";
import emptyCartImage from "../assets/empty-cart.png";
import { Link } from "react-router-dom";

const CartIsEmpty = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center justify-center ">
        <img src={emptyCartImage} alt="Empty cart" className=" mb-4" />
        <p className="text-xl font-semibold text-[#A93030] ">
          Your cart is currently empty.
        </p>
        <p className="text-m font-Inter font-normal mb-4">
          Proceed to store and start shopping
        </p>
        <Link to='/products'>
          <button className="py-3 px-4 bg-[#A93030] rounded text-sm text-white">
            Go To Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartIsEmpty;
